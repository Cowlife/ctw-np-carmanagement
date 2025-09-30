import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {CarService} from "../../service/car.service";
import {CarModule} from "../car.module";
import {Car} from "../../model/car";
import {Select} from "primeng/select";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    FloatLabel,
    InputText,
    Button,
    Select
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  brand_value: any;
  model_value: any;
  engine: any | undefined; // not value to access the value of select

  cars: any[] | undefined;
  car_to_insert: Car = ({} as any) as Car
  constructor(public carService: CarService) { }

  createCarElement(){
    this.car_to_insert.model = this.model_value
    this.car_to_insert.brand = this.brand_value
    this.car_to_insert.engineType = this.engine.value
    this.car_to_insert.createdAt = "2024-09-26 21:09:31.880154 +00:00"
    this.carService.createCarElement(this.car_to_insert)
  }

  ngOnInit() {
    this.cars = [
      { name: 'Bev', value: 'BEV' },
      { name: 'Phev', value: 'PHEV' },
      { name: 'Diesel', value: 'DIESEL' },
      { name: 'Gasoline', value: 'GASOLINE' },
    ];
  }

}
