import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-team',
  imports: [],
  templateUrl: './card-team.component.html',
  styleUrl: './card-team.component.css'
})
export class CardTeamComponent {

  @Input() name:string = "";
  @Input() profission: string = "";
  @Input() description: string = "";
  @Input() imgUrl:string = ""
}
