import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FloatLabel} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {CarService} from "../../service/car.service";
import {DatePicker} from "primeng/datepicker";
import {Password} from "primeng/password";
import {PersonService} from "../../service/person.service";
import {catchError, throwError} from "rxjs";
import {Person} from "../../model/person";
import {HttpClient} from "@angular/common/http";
import {InputNumber} from "primeng/inputnumber";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    Button,
    FloatLabel,
    FormsModule,
    InputText,
    DatePicker,
    Password,
    InputNumber
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name_value: string = '';
  password_value: string = '';
  email_value: string = '';
  password_value2: string = '';
  person_to_register: Person = {} as Person;
  phone_value: any;

  constructor(public carService: CarService,
              protected personService: PersonService,
              private httpClient: HttpClient) { }

  registerToPage() {
      this.person_to_register.name = this.name_value
      this.person_to_register.email = this.email_value
      this.person_to_register.phone = this.phone_value
      this.person_to_register.role = 'user'
      if (this.password_value == this.password_value2 && this.password_value != ''){
        this.person_to_register.password = this.password_value
        this.httpClient.post(this.carService.apiURL + '/people', this.person_to_register)
          .pipe(catchError(this.carService.errorHandler))
          .subscribe({
            next: (response: any) => {
              setTimeout(() => {alert("Account succesfully created.")}, 500);
              this.personService.mainTransition(this.carService,'car/index', this.person_to_register)
            },
            error: error => setTimeout(() => {alert("Account not inserted.")}, 500)
          })
      }
      else{
        setTimeout(() => {alert("Please fill all fields including the passwords.")}, 500)
      }

  }

}
