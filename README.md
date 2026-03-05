# NumisMap – Ceques del Món Antic

Aplicació Angular 20 per a la visualització interactiva de ceques de monedes antigues del Mediterrani occidental, amb un mapa basat en Leaflet i dades de 12 cecas documentades.

## Tecnologies

| Tecnologia    | Versió         |
| ------------- | -------------- |
| Angular       | 20             |
| Leaflet       | 1.9.4          |
| OpenStreetMap | Tiles gratuïts |
| TypeScript    | 5.8            |

## Funcionalitats

- **Mapa a pantalla completa** amb controls de zoom temàtics
- **12 ceques documentades** repartides per Hispania, Àfrica del Nord i la Gàl·lia
- **Filtres per regió** per mostrar/ocultar marcadors
- **Popup informatiu** per ceca amb descripció, període i monedes documentades
- **Sidebar** amb llista de ceques navegable
- **Tema fosc** inspirat en l'estètica de la numismàtica antiga
- **Disseny responsive** adaptat a mòbil

## Estructura del Projecte

```
src/
└── app/
    ├── components/
    │   └── map/                  # MapComponent (standalone)
    │       ├── map.component.ts
    │       ├── map.component.html
    │       └── map.component.css
    ├── data/
    │   └── mock-data.ts          # 12 ceques amb dades reals
    ├── models/
    │   └── ceca.model.ts         # Interfície Ceca
    ├── services/
    │   └── ceca.service.ts       # Servei injectável
    ├── app.component.ts          # Component arrel
    └── app.config.ts             # Configuració Angular
```

## Com Executar

```bash
# Instal·lar dependències
npm install

# Iniciar servidor de desenvolupament
npm start

# Construir per a producció
npm run build
```

L'aplicació estarà disponible a `http://localhost:4200`.

## Ceques Incloses

| Ceca                   | Regió                  | Període              |
| ---------------------- | ---------------------- | -------------------- |
| Cartago Nova           | Hispania               | Segles III-I aC      |
| Empúries (Emporion)    | Hispania Citerior      | Segles VI-I aC       |
| Ilici (La Alcudia)     | Hispania               | Segles II-I aC       |
| Saguntum               | Hispania Citerior      | Segles III aC - I dC |
| Caesaraugusta          | Hispania Tarraconensis | Segles I aC - I dC   |
| Tarraco                | Hispania Tarraconensis | Segles II aC - I dC  |
| Emerita Augusta        | Lusitania              | Segles I aC - I dC   |
| Carthago (Tunísia)     | Àfrica del Nord        | Segles VI-II aC      |
| Massalia               | Gàl·lia                | Segles VI-I aC       |
| Rhodes (Rodes Ibèrica) | Hispania Citerior      | Segles V-II aC       |
| Gades (Gadir)          | Hispania Baetica       | Segles IV aC - I dC  |
| Corduba                | Hispania Baetica       | Segles II aC - I dC  |
