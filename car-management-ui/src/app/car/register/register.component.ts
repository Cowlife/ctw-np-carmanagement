import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        Button,
        FloatLabel,
        FormsModule,
        InputText
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  license_value: any;
  contact_value: any;
  name_value: any;


  constructor(public carService: CarService) { }

  registerToPage() {
    this.carService.changePage('car/index')
  }
}
