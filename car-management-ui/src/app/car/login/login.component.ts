import { Component } from '@angular/core';
import {FloatLabel} from "primeng/floatlabel";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {CarService} from "../../service/car.service";
import {catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Password} from "primeng/password";
import {Person} from "../../model/person";
import {PersonService} from "../../service/person.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FloatLabel,
    FormsModule,
    InputText,
    Button,
    Password
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password_value: string = '';
  email_value: string = '';
  alertString: string = '';

  constructor(private httpClient: HttpClient,
              private carService: CarService,
              private personService: PersonService) { }

  accessPage() {
    this.httpClient.get(this.carService.apiURL + '/people/search/' + this.email_value).pipe(catchError(this.carService.errorHandler))
      .subscribe({
        next: (response: any) => {
          let person_response_object = response as Person
          const cond1 = this.email_value == person_response_object.email;
          const cond2 = this.password_value == person_response_object.password;
          cond1 && cond2 ?
            this.mainTransition(person_response_object) :
            setTimeout(() => {alert("Wrong password/email.")}, 500);
        },
        error: error => setTimeout(() => {alert("Account not found.")}, 500)
      })

  }

    mainTransition(person_response_object: Person){
      this.personService.current_user = person_response_object
      this.carService.changePage('/car/index')
    }

}
