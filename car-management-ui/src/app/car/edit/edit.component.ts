import {afterNextRender, Component} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {Button} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    Button,
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    Select,
    FormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  brand_value: any;
  model_value: any;
  engine: any;

  cars: any[] | undefined;
  car_to_insert: Car = ({} as any) as Car

  constructor(public carService: CarService) { }

  createCarElement(){
    this.car_to_insert.model = this.model_value
    this.car_to_insert.brand = this.brand_value
    this.car_to_insert.engineType = this.engine.value
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
