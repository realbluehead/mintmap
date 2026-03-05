import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  inject,
  signal,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import maplibregl, { setWorkerUrl } from 'maplibre-gl';
import { CecaService } from '../../services/ceca.service';
import { Ceca } from '../../models/ceca.model';

// Fix for Angular (esbuild) + MapLibre: the worker cannot be bundled
// into the main bundle; it must point to the static CSP file.
setWorkerUrl('/assets/maplibre-gl-csp-worker.js');

const STYLE_ROMAN =
  'https://raw.githubusercontent.com/klokantech/roman-empire/master/style.json';
const STYLE_OSM = 'https://tiles.openfreemap.org/styles/liberty';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapContainer', { static: true })
  mapContainer!: ElementRef<HTMLDivElement>;

  private cecaService = inject(CecaService);
  private map!: maplibregl.Map;
  private markersMap = new Map<number, maplibregl.Marker>();

  ceques = signal<Ceca[]>([]);
  cecaSeleccionada = signal<Ceca | null>(null);
  regioFiltre = signal<string>('All');
  regionsDisponibles = signal<string[]>([]);
  totalVisible = signal<number>(0);
  estilActual = signal<string>(STYLE_ROMAN);
  sidebarOpen = signal<boolean>(false);

  readonly STYLES = [
    { id: STYLE_ROMAN, label: '🏛️ Ancient Roman Map' },
    { id: STYLE_OSM, label: '🌍 Modern (OSM Liberty)' },
  ];

  ngOnInit(): void {
    this.cecaService.getCeques().subscribe((data) => {
      this.ceques.set(data);
      this.totalVisible.set(data.length);
    });
    this.cecaService.getRegions().subscribe((regions) => {
      this.regionsDisponibles.set(['All', ...regions]);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  private initMap(): void {
    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: STYLE_ROMAN,
      center: [28, 39],
      zoom: 5,
      attributionControl: false,
    });

    this.map.addControl(new maplibregl.NavigationControl(), 'top-right');
    this.map.addControl(
      new maplibregl.ScaleControl({ unit: 'metric' }),
      'bottom-right',
    );
    this.map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      'bottom-right',
    );

    this.map.on('load', () => {
      this.renderMarkers();
      this.fitAllCeques();
    });
  }

  private createMarkerElement(selected = false): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'ceca-marker-wrapper';

    const label = document.createElement('div');
    label.className = 'ceca-label-ml';

    const pin = document.createElement('div');
    pin.className = selected ? 'ceca-pin selected' : 'ceca-pin';

    wrapper.appendChild(label);
    wrapper.appendChild(pin);
    return wrapper;
  }

  private renderMarkers(): void {
    this.markersMap.forEach((m) => m.remove());
    this.markersMap.clear();

    const cequesFiltrades = this.getCequesFiltrades();
    cequesFiltrades.forEach((ceca) => {
      const el = this.createMarkerElement(false);

      // Permanent label
      const label = el.querySelector('.ceca-label-ml') as HTMLElement;
      label.textContent = ceca.nom;

      const popup = new maplibregl.Popup({
        maxWidth: 'none',
        className: 'numismap-popup',
        offset: 20,
      }).setHTML(this.buildPopupContent(ceca));

      popup.on('close', () => {
        this.setMarkerSelected(ceca.id, false);
        if (this.cecaSeleccionada()?.id === ceca.id) {
          this.cecaSeleccionada.set(null);
        }
      });

      const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat([ceca.lng, ceca.lat])
        .setPopup(popup)
        .addTo(this.map);

      el.addEventListener('click', () => this.selectMarker(ceca));
      this.markersMap.set(ceca.id, marker);
    });

    this.totalVisible.set(cequesFiltrades.length);
  }

  private setMarkerSelected(id: number, selected: boolean): void {
    const marker = this.markersMap.get(id);
    if (!marker) return;
    const pin = marker.getElement().querySelector('.ceca-pin');
    if (pin) pin.classList.toggle('selected', selected);
  }

  private selectMarker(ceca: Ceca): void {
    const prev = this.cecaSeleccionada();
    if (prev && prev.id !== ceca.id) {
      this.setMarkerSelected(prev.id, false);
      this.markersMap.get(prev.id)?.getPopup()?.remove();
    }
    this.cecaSeleccionada.set(ceca);
    this.setMarkerSelected(ceca.id, true);
    // On narrow screens pan to centre so the popup never overflows an edge
    if (window.innerWidth < 768) {
      this.map.easeTo({ center: [ceca.lng, ceca.lat], duration: 250 });
    }
  }

  private buildPopupContent(ceca: Ceca): string {
    return `
      <div class="popup-ceca">
        <div class="popup-col-left">
          <div class="popup-header">
            <h3 class="popup-nom">${ceca.nom}</h3>
            <span class="popup-regio">${ceca.regio}</span>
          </div>
          <div class="popup-periode">
            <span class="popup-icon">📅</span>
            <strong>${ceca.periode}</strong>
          </div>
        </div>
        <div class="popup-col-right">
          <p class="popup-descripcio">${ceca.descripcio}</p>
        </div>
      </div>
    `;
  }

  private getCequesFiltrades(): Ceca[] {
    const filtre = this.regioFiltre();
    return filtre === 'All'
      ? this.ceques()
      : this.ceques().filter((c) => c.regio === filtre);
  }

  onFiltreCanviat(regio: string): void {
    this.regioFiltre.set(regio);
    this.renderMarkers();
  }

  private fitAllCeques(): void {
    const ceques = this.getCequesFiltrades();
    if (!ceques.length) return;
    const bounds = new maplibregl.LngLatBounds();
    ceques.forEach((c) => bounds.extend([c.lng, c.lat]));
    this.map.fitBounds(bounds, { padding: 40 });
  }

  onCentrarMapa(): void {
    this.fitAllCeques();
    this.cecaSeleccionada.set(null);
  }

  onNavegaCeca(ceca: Ceca): void {
    this.sidebarOpen.set(false);
    this.map.flyTo({ center: [ceca.lng, ceca.lat], zoom: 9 });
    this.selectMarker(ceca);
    setTimeout(() => {
      const marker = this.markersMap.get(ceca.id);
      if (marker && !marker.getPopup()?.isOpen()) {
        marker.togglePopup();
      }
    }, 600);
  }

  canviarEstil(styleUrl: string): void {
    if (this.estilActual() === styleUrl) return;
    this.estilActual.set(styleUrl);
    this.markersMap.forEach((m) => m.remove());
    this.markersMap.clear();
    this.map.setStyle(styleUrl);
    this.map.once('styledata', () => this.renderMarkers());
  }
}
