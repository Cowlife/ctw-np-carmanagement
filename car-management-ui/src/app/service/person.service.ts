import { Injectable } from '@angular/core';
import {Person} from "../model/person";
import {CarService} from "./car.service";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  get current_user(): Person {
    return this._current_user;
  }

  set current_user(value: Person) {
    this._current_user = value;
  }

  private _current_user: Person = {} as Person;

  constructor() { }

  mainTransition(carService: CarService, url = '',person_response_object?: Person){
    this.current_user = person_response_object ? person_response_object : {} as Person
    carService.changePage(url)
  }

}
