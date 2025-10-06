import { Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PrevisionsComponent } from './pages/previsions/previsions.component';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import {AboutComponent} from './pages/about/about.component'

export const routes: Routes = [

  {
    path: "map",
    component:MapComponent
  },

  {
    path: 'dashboard',
    component:DashboardComponent
  },

  {
    path:"previsions",
    component:PrevisionsComponent
  },

  {
    path: "alerts",
    component:AlertPageComponent
  },

  {
    path:"perfil",
    component:PerfilComponent
  },

  {
    path:"about",
    component:AboutComponent
  }
];
