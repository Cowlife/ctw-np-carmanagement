import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Car} from '../model/car';
import {Router} from "@angular/router";
import {PersonService} from "./person.service";
import {Person} from "../model/person";


@Injectable({
  providedIn: 'root',
})
export class CarService {
  get apiURL(): string {
    return this._apiURL;
  }
  get current_car(): Car {
    return this._current_car;
  }

  set current_car(value: Car) {
    this._current_car = value;
  }


  private _apiURL = "http://localhost:8080"
  private _current_car: Car = {} as Car;
  private _alertString = ''
  cars: Car[] = []

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient,
              private router: Router) { }



  getAllCars(): Observable<any> {
    return this.httpClient.get(this._apiURL + '/cars').pipe(catchError(this.errorHandler))
  }

  createCarElement(car: Car) {
    this.httpClient.post(this._apiURL + '/cars', car).pipe(catchError(this.errorHandler))
      .subscribe({
        next: response => this._alertString = "Car is successfully created.",
        error: error => this._alertString = error.toString()
      })
    this.cars.push(car)
    setTimeout(() => {alert(this._alertString)}, 100);
  }

  changeCarElement(car: Car) {
    this.httpClient.put(this._apiURL + '/cars/' + car.id, car).pipe(catchError(this.errorHandler))
      .subscribe({
        next: response => this._alertString = "Car is successfully changed.",
        error: error => {
          this._alertString = error.toString();
          console.log(error)
        }
      })
    setTimeout(() => {alert(this._alertString)}, 500);
  }

  delete_without_toast(car_to_delete: Car){
    this.httpClient.delete(this._apiURL + '/cars/' + car_to_delete.id).subscribe({
      next: response => this._alertString = "Car is successfully removed.",
      error: error => this._alertString = error.toString(),
    })
    this.cars = this.cars.filter(car => car !== car_to_delete)
    setTimeout(() => {alert(this._alertString)}, 100);
  }

  changePage(url: any, carToPersist?: Car){
    this.current_car = carToPersist ? carToPersist : {} as Car
    this.router.navigate([url]).then(r => {});
  }

  errorHandler(error:any) {
    return throwError(() => `Error Code: ${error.status}\nMessage: ${error.message}`);
  }

}
