import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-base-ui',
  imports: [RouterLink, RouterModule],
  templateUrl: './base-ui.component.html',
  styleUrl: './base-ui.component.css'
})
export class BaseUiComponent {

}
