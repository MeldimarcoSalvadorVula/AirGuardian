import { Component } from '@angular/core';



@Component({
  selector: 'app-information-today',
  imports: [],
  templateUrl: './information-today.component.html',
  styleUrl: './information-today.component.css'
})
export class InformationTodayComponent {


    value:number = 65;
    poluent:string = "PM2,5";
    color:string = "Moderado";
    level:string = ""


     initalizeCard():void{

      if(this.value >=0 && this.value <= 50){
        this.color = "#10B981";
        this.level = "Bom"
      }else if(this.value >=51 && this.value<101){
        this.color = "#F59E0B";
        this.level = "Moderado"
      }else if(this.value >= 101 && this.value < 151){
        this.color = "#F97316";
        this.level = "Não saudável para pessoas sensíveis"

      }else if(this.value>=151 && this.value < 201){
        this.color = "#EF4444";
        this.level = "Insalubre"
      }else{
        this.color = "#991B1B";
        this.level = "Perigoso"
      }



    }


}


