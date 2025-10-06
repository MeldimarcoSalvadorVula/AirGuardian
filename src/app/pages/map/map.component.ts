import { Component } from '@angular/core';
import { MapaComponent } from '../../components/mapa/mapa.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  imports: [MapaComponent, CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

   myStyles = {
  'flex-grow':'1'
};
  poluents = [];

}
