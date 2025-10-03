import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {CarService} from "../../service/car.service";
import {TableModule} from "primeng/table";
import {Car} from "../../model/car";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    Button,
    FloatLabel,
    FormsModule,
    InputText,
    TableModule
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {


  current_car: Car[] = [];

  constructor(public carService: CarService) { }

  ngOnInit(){
    this.current_car.push(this.carService.current_car)
  }

}
