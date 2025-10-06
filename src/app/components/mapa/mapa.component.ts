import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

interface AirQualityData {
  id: number;
  name: string;
  lat: number;
  lng: number;
  aqi: number;
  pollutant: string;
  pm25: number;
  pm10: number;
  o3: number;
  no2: number;
}

interface NominatimResponse {
  lat: string;
  lon: string;
  display_name: string;
}

@Component({
  selector: 'app-mapa',
  imports: [CommonModule, FormsModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})


export class MapaComponent  implements OnInit, OnDestroy{


  private map:any;

  @Input() private latitude:number = -8.8383;
  @Input() private longitude:number = 13.2344


  private readonly DEFAULT_CENTER: [number, number] = [-8.8383, 13.2344];
  private readonly DEFAULT_ZOOM = 10;

  airQualityStations: AirQualityData[] = [
    {
      id: 1,
      name: 'Luanda Centro',
      lat: -8.8383,
      lng: 13.2344,
      aqi: 85,
      pollutant: 'PM2.5',
      pm25: 28.5,
      pm10: 45.2,
      o3: 32,
      no2: 18
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.map = L.map('mapa').setView([this.latitude, this.longitude], this.DEFAULT_ZOOM);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);

    L.marker([this.latitude, this.longitude]).addTo(this.map).bindPopup(this.airQualityStations[0].aqi.toString()).openPopup();
    L.circle([this.latitude, this.longitude], {
      color:"orange",
      fillColor: "light-blue",
      fillOpacity:0.35,
      radius:1000
    }).addTo(this.map);


  }//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
  //https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png




  ngOnDestroy(): void {
   this.map.invalidateSize();
  }



  getAQIColor(aqi: number): string {
    if (aqi <= 50) return '#00e400';
    if (aqi <= 100) return '#ffff00';
    if (aqi <= 150) return '#ff7e00';
    if (aqi <= 200) return '#ff0000';
    if (aqi <= 300) return '#8f3f97';
    return '#7e0023';
  }

  private getAQICategory(aqi: number): string {
    if (aqi <= 50) return 'Bom';
    if (aqi <= 100) return 'Moderado';
    if (aqi <= 150) return 'Insalubre p/ Sensíveis';
    if (aqi <= 200) return 'Insalubre';
    if (aqi <= 300) return 'Muito Insalubre';
    return 'Perigoso';
  }

  getAQIMessage(aqi: number): string {
    if (aqi <= 50) return '✓ Qualidade do ar satisfatória. O ar não representa riscos.';
    if (aqi <= 100) return '⚠ Aceitável. Alguns poluentes podem afetar pessoas sensíveis.';
    if (aqi <= 150) return '⚠ Grupos sensíveis podem sentir efeitos na saúde.';
    if (aqi <= 200) return '⚠ Toda população pode sentir efeitos na saúde.';
    if (aqi <= 300) return '⚠⚠ Alerta de saúde. População inteira pode sentir efeitos sérios.';
    return '⚠⚠⚠ Alerta de emergência. Toda população em risco.';
  }

  private getMarkerRadius(aqi: number): number {
    return 200 + (aqi * 2);
  }
}

// ============================================
// 2. main.ts (Configuração moderna)
// ============================================
/*
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()) // Usa fetch API (moderna)
  ]
}).catch(err => console.error(err));
*/
