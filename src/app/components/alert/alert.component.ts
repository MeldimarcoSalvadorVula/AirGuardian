import { Component,Input } from '@angular/core';


type colorVariants = "#FF6900" | "#2B7FFF" | "#FB2C36"
type iconvariants = "/public/assests/danger.svg" | "/public/assests/info.svg" | "/public/assests/superDanger.svg"

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  @Input() color:colorVariants = "#2B7FFF";
  @Input() icon:iconvariants = "/public/assests/info.svg"
  @Input() title:string = "";
  @Input() location:string = "";
  @Input() hour:string = "";
  @Input() information:string = ""

}
