import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Checkbox} from "primeng/checkbox";
import {ColorPicker} from "primeng/colorpicker";
import {FloatLabel} from "primeng/floatlabel";
import {InputText} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {CarService} from "../../service/car.service";
import {DatePicker} from "primeng/datepicker";

@Component({
  selector: 'app-reserve-page',
  standalone: true,
  imports: [
    Button,
    Checkbox,
    ColorPicker,
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    Select,
    FormsModule,
    DatePicker
  ],
  templateUrl: './reserve-page.component.html',
  styleUrl: './reserve-page.component.css'
})
export class ReservePageComponent {
  name_value: any;
  contact_value: any;
  license_plate_value: any;
  date: Date | undefined;
  minDate: Date | undefined ;
  maxDate: Date | undefined ;
  license_value: any;

  constructor(public carService: CarService) { }


  ngOnInit(){
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    this.minDate = new Date();
    this.minDate.setMonth(month);
    this.minDate.setFullYear(year);
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 4)
    this.maxDate.setMonth(month);
    this.maxDate.setFullYear(year);


  }

  reserveCarElement() {

  }
}
