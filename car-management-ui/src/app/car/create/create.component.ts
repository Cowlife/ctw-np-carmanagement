import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {CarService} from "../../service/car.service";
import {Car, EngineType} from "../../model/car";
import {Select} from "primeng/select";
import {Checkbox} from "primeng/checkbox";
import {ColorPicker} from "primeng/colorpicker";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    FloatLabel,
    InputText,
    Button,
    Select,
    Checkbox,
    ColorPicker
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  brand_value: string = '';
  model_value: string = '';
  engine: any | undefined; // not value to access the value of select
  brand: any | undefined;
  brand_enum: any[] | undefined;
  engine_enum: any[] | undefined;
  car_to_insert: Car = {} as Car
  autonomy_value: boolean = false;
  color_value: string = '#000000';
  seats_value: number = 2;
  license_plate_value: string = '';
  constructor(public carService: CarService) { }

  createCarElement(){

    try{
      this.car_to_insert.brand = this.brand.value
      this.car_to_insert.model = this.model_value
      this.car_to_insert.engineType = this.engine.value
      this.car_to_insert.createdAt = "2024-09-26T21:09:03.892"
      this.car_to_insert.createdBy = 'system_user'
      this.car_to_insert.seats = Number(this.seats_value)
      this.car_to_insert.licensePlate = this.license_plate_value
      this.car_to_insert.autonomy = this.autonomy_value
      this.car_to_insert.color = this.color_value
      this.car_to_insert.image = 'RandomImgTest'
      this.carService.createCarElement(this.car_to_insert)
      this.carService.changePage('car/index')
    }
    catch (e) {
      setTimeout(() => {alert("Please fill all elements.")}, 500);
    }
  }

  ngOnInit() {
    this.brand_enum = [
      { name: 'BMW', value: 'BMW' },
      { name: 'Toyota', value: 'TOYOTA' },
      { name: 'Ford', value: 'FORD' },
      { name: 'Honda', value: 'HONDA' },
    ];
    this.engine_enum = [
      { name: 'Bev', value: EngineType.BEV },
      { name: 'Phev', value: EngineType.PHEV },
      { name: 'Diesel', value: EngineType.DIESEL },
      { name: 'Gasoline', value: EngineType.GASOLINE },
    ];
  }

}
