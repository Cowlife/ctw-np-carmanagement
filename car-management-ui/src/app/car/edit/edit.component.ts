import {afterNextRender, Component} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {Button} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {Checkbox} from "primeng/checkbox";
import {ColorPicker} from "primeng/colorpicker";

@Component({
  selector: 'app-edit',
  standalone: true,
    imports: [
        Button,
        FloatLabel,
        InputText,
        ReactiveFormsModule,
        Select,
        FormsModule,
        Checkbox,
        ColorPicker
    ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  brand_value: string = '';
  model_value: string = '';
  engine: any | undefined; // not value to access the value of select
  brand: any | undefined;
  brand_enum: any[] | undefined;
  engine_enum: any[] | undefined;
  car_to_change: Car = {} as Car
  autonomy_value: boolean = false;
  color_value: string = '#000000';
  seats_value: number = 2;
  license_plate_value: string = '';


  constructor(public carService: CarService) { }

  changeCarElement(){
    try {
      this.car_to_change.brand = this.brand.value
      this.car_to_change.model = this.model_value
      this.car_to_change.engineType = this.engine.value
      this.car_to_change.createdAt = "2024-09-26T21:09:03.892"
      this.car_to_change.createdBy = 'system_user'
      this.car_to_change.seats = Number(this.seats_value)
      this.car_to_change.licensePlate = this.license_plate_value
      this.car_to_change.autonomy = this.autonomy_value
      this.car_to_change.color = this.color_value
      this.car_to_change.image = 'RandomImgTest'
      this.carService.changeCarElement(this.car_to_change)
      this.carService.changePage('car/index')
    }
    catch (e) {
      setTimeout(() => {alert("Please fill all elements.")}, 500);
    }

  }

  ngOnInit() {
    this.car_to_change.id = this.carService.current_car.id;
    this.brand_value = this.carService.current_car.brand;
    this.model_value = this.carService.current_car.model;
    this.engine = this.carService.current_car.engineType; // not value to access the value of select

    this.autonomy_value = this.carService.current_car.autonomy;
    this.color_value= this.carService.current_car.color;
    this.seats_value = this.carService.current_car.seats;
    this.license_plate_value = this.carService.current_car.licensePlate;
    this.brand_enum = [
      { name: 'BMW', value: 'BMW' },
      { name: 'Toyota', value: 'TOYOTA' },
      { name: 'Ford', value: 'FORD' },
      { name: 'Honda', value: 'HONDA' },
    ];
    this.engine_enum = [
      { name: 'Bev', value: 'BEV' },
      { name: 'Phev', value: 'PHEV' },
      { name: 'Diesel', value: 'DIESEL' },
      { name: 'Gasoline', value: 'GASOLINE' },
    ];
  }

}
