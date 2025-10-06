import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUiComponent } from './components/base-ui/base-ui.component';
import { MapaComponent } from './components/mapa/mapa.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseUiComponent, MapaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AirGuardian';
}
