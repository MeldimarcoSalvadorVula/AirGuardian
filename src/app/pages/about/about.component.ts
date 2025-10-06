import { Component, Input } from '@angular/core';
import { CardTeamComponent } from '../../components/card-team/card-team.component';
import { ParcerComponent } from "../../components/parcer/parcer.component";

@Component({
  selector: 'app-about',
  imports: [CardTeamComponent, ParcerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


}
