import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    Button,
    FloatLabel,
    FormsModule,
    InputText
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {


  constructor(public carService: CarService) { }

  ngOnInit(){

  }

}
