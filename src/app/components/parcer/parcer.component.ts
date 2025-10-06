import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parcer',
  imports: [],
  templateUrl: './parcer.component.html',
  styleUrl: './parcer.component.css'
})
export class ParcerComponent {

  @Input() name:string = "";
  @Input() information:string = "";
  @Input() link:string = ""
}
