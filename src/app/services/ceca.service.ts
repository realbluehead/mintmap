import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Ceca } from "../models/ceca.model";
import { CEQUES_MOCK } from "../data/mock-data";

@Injectable({
  providedIn: "root",
})
export class CecaService {
  private ceques: Ceca[] = CEQUES_MOCK;

  getCeques(): Observable<Ceca[]> {
    return of(this.ceques);
  }

  getCecaById(id: number): Observable<Ceca | undefined> {
    return of(this.ceques.find((c) => c.id === id));
  }

  getCequesByRegio(regio: string): Observable<Ceca[]> {
    return of(this.ceques.filter((c) => c.regio === regio));
  }

  getRegions(): Observable<string[]> {
    const regions = [...new Set(this.ceques.map((c) => c.regio))];
    return of(regions);
  }
}
