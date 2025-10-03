import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarService } from '../../service/car.service';
import { Car } from '../../model/car';
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {IconField} from "primeng/iconfield";
import {InputIcon} from "primeng/inputicon";
import {MultiSelect} from "primeng/multiselect";
import {Select} from "primeng/select";
import {Tag} from "primeng/tag";
import {InputText} from "primeng/inputtext";
import {Toast, ToastModule} from "primeng/toast";
import {ConfirmDialog} from "primeng/confirmdialog";
import {ConfirmationService, FilterMatchMode, MessageService, SelectItem} from "primeng/api";
import {PersonService} from "../../service/person.service";
import {RoleName} from "../../model/person";
import {ReserveService} from "../../service/reserve.service";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, IconField, InputIcon, MultiSelect, FormsModule, Select, Tag, InputText, Button],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  loading: boolean = false;
  cols!: any[];



  constructor(public carService: CarService,
              protected personService: PersonService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((data: Car[])=>{
      this.carService.cars = data;
    });
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'brand', header: 'Brand' },
      { field: 'model', header: 'Model' },
      { field: 'engineType', header: 'Engine Type' },
      { field: '', header: 'Action' },
    ];
    this.matchModeOptions = [
      { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contains', value: FilterMatchMode.CONTAINS},
      { label: 'Not Contains', value: FilterMatchMode.NOT_CONTAINS},
      { label: 'Ends With',value: FilterMatchMode.ENDS_WITH},
      { label: 'Equals',value: FilterMatchMode.EQUALS},
      { label: 'Not Equals',value: FilterMatchMode.NOT_EQUALS}
    ];
  }

  protected readonly RoleName = RoleName;
  matchModeOptions: SelectItem[] = [];
}
