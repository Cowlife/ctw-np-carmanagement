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
import {ReserveService} from "../../service/reserve.service";
import {Car} from "../../model/car";
import {Reserve} from "../../model/reserve";
import {InputNumber} from "primeng/inputnumber";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";

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
    DatePicker,
    InputNumber
  ],
  templateUrl: './reserve-page.component.html',
  styleUrl: './reserve-page.component.css'
})
export class ReservePageComponent {
  name_value: any;
  contact_value: any;
  minDate: Date | undefined ;
  minDate2: Date | undefined ;
  maxDate: Date | undefined ;
  license_value: any;
  PickUpTime: Date[] | undefined;
  DropOffTime: Date[] | undefined;
  pickupSelected!: Date;
  dropTimeSelected!: Date;
  protected readonly String = String;
  enabler: boolean = true;
  reserve_to_insert: Reserve = {} as Reserve
  constructor(public carService: CarService,
              private reserveService: ReserveService,
              private httpClient: HttpClient) { }


  ngOnInit(){
    this.minDate = this.setToday();
    /* Below was going to be the implementation of the hour limit
      /*let car_object = this.httpClient.get(this.carService.apiURL +
          '/reserves?car_license_plate=' + this.carService.current_car.licensePlate).pipe(catchError(this.carService.errorHandler))
        if (car_object){
          let reserve_result: Reserve[] = []
          car_object.subscribe({
            next: (response: Reserve[]) => {
              reserve_result = response
              this.minDate = new Date();
              this.minDate.setDate(Number(reserve_result[reserve_result.length-1].dropDate.substring(0,10)))
              this.minDate.setHours(Number(reserve_result[reserve_result.length-1].dropDate.substring(11,2)))
              this.minDate.setMinutes(Number(reserve_result[reserve_result.length-1].dropDate.substring(14,2)))
            },
            error: error => console.log(error)
          })
        }*/

  }

  setToday() : Date{
    let today = new Date();
    let hour = today.getHours()
    let month = today.getMonth();
    let year = today.getFullYear();
    let data_now = new Date();
    data_now.setMonth(month);
    data_now.setFullYear(year);

    return data_now;
  }

  defineLimitDates(date: Date, reset: boolean = false) {
    this.minDate = reset ? this.setToday() : date;
    this.enabler = reset;
    this.maxDate = new Date();

    if (date){
      const month_change = date.getDate() + 4;
      const month_selection = month_change > 31 ? date.getMonth() + 1 : date.getMonth();
      // The commands are to avoid not being able to select beyond 31
      const friday_cond = this.minDate.getHours() > 20 && this.minDate.getDay() == 5
      const date_limit = friday_cond ? date.getDate() + 3 : date.getDate() + 4;
      this.maxDate.setDate(date_limit)
      this.maxDate.setMonth(month_selection);
      this.maxDate.setFullYear(date.getFullYear());
      this.pickupSelected = this.minDate;
      this.dropTimeSelected = this.maxDate;
      console.log(this.pickupSelected)
      console.log(this.dropTimeSelected)
      if (friday_cond){
        this.maxDate.setHours(8)
        this.maxDate.setMinutes(0)
      }
      else{
        this.maxDate.setHours(this.minDate.getHours())
        this.maxDate.setMinutes(this.minDate.getMinutes())
      }
    }



  }
  reserveCarElement() {
    try{
      // Remove final letter at end to obey true format of var SQL
      this.reserve_to_insert.dropDate = this.pickupSelected.toISOString().slice(0,-1);
      this.reserve_to_insert.pickDate = this.dropTimeSelected.toISOString().slice(0,-1);

      this.reserve_to_insert.carLicensePlate = this.license_value
      this.reserve_to_insert.userPhone = this.contact_value
      console.log(this.reserve_to_insert)
    }
    catch (e) {
      setTimeout(() => {alert("Please fill all elements.")}, 500);
    }
    this.reserveService.reserveCarElement(this.carService.apiURL, this.reserve_to_insert)
  }
}
