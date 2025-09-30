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
import {Toast} from "primeng/toast";
import {ConfirmDialog} from "primeng/confirmdialog";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, IconField, InputIcon, MultiSelect, FormsModule, Select, Tag, InputText, Button, Toast, ConfirmDialog],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  cars: Car[] = []
  loading: boolean = false;
  cols!: any[];


  constructor(public carService: CarService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.carService.getAll().subscribe((data: Car[])=>{
      this.cars = data;
    });
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'brand', header: 'Brand' },
      { field: 'model', header: 'Model' },
      { field: 'engineType', header: 'Engine Type' },
      { field: '', header: 'Action' },
    ];
  }


  /*confirm_delete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record successfully deleted.' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected the deletion of component.' });
      },
    });
  }*/
}
