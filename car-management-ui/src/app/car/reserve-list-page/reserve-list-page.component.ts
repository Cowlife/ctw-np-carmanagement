import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";
import {Person, RoleName} from "../../model/person";
import {CarService} from "../../service/car.service";
import {Reserve} from "../../model/reserve";
import {Button} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {InputText} from "primeng/inputtext";
import {FilterMatchMode, PrimeTemplate, SelectItem} from "primeng/api";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-reserve-list-page',
  standalone: true,
  imports: [
    Button,
    NgForOf,
    IconField,
    InputIcon,
    InputText,
    NgIf,
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './reserve-list-page.component.html',
  styleUrl: './reserve-list-page.component.css'
})
export class ReserveListPageComponent {

  reserve_response_object: Reserve[] = [];
  protected readonly RoleName = RoleName;
  cols!: any[] | undefined;
  matchModeOptions_text: SelectItem[] = [];


  constructor(private httpClient: HttpClient,
              protected carService: CarService) {}

  ngOnInit(){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'carLicensePlate', header: 'License Plate' },
      { field: 'userPhone', header: 'User Phone' },
      { field: 'pickDate', header: 'Date Chosen to Pick UP' },
      { field: 'dropDate', header: 'Date Chosen to Drop OFF' },
    ];
    this.matchModeOptions_text = [
      { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contains', value: FilterMatchMode.CONTAINS},
      { label: 'Not Contains', value: FilterMatchMode.NOT_CONTAINS},
      { label: 'Ends With',value: FilterMatchMode.ENDS_WITH},
      { label: 'Equals',value: FilterMatchMode.EQUALS},
      { label: 'Not Equals',value: FilterMatchMode.NOT_EQUALS}
    ];
    this.httpClient.get(this.carService.apiURL + '/reserves?car_license_plate=' + this.carService.current_car.licensePlate).pipe(catchError(this.carService.errorHandler))
        .subscribe({
          next: (response: any) => {
            this.reserve_response_object = response as Reserve[]
            console.log(this.reserve_response_object)
          },
          error: error => setTimeout(() => {alert("Element not found.")}, 500)})


  }


}
