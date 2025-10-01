import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Car} from '../model/car';
import {Router} from "@angular/router";
import {IndexComponent} from "../car/index/index.component";



@Injectable({
  providedIn: 'root',
})
export class CarService {
  get current_car(): Car {
    return this._current_car;
  }

  set current_car(value: Car) {
    this._current_car = value;
  }


  private apiURL = "http://localhost:8080"
  private _current_car: Car = {} as Car;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  /**
   * Http methods below
   *
   * @getAll() ->
   * @return response()
   */
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/cars').pipe(catchError(this.errorHandler))
  }

  createCarElement(car: Car) {
    console.log(car)
    this.httpClient.post(this.apiURL + '/cars', car).pipe(catchError(this.errorHandler))
  }

  delete_without_toast(car_to_delete: Car){
    console.log(this.apiURL + '/cars/' + car_to_delete.id)
    this.httpClient.delete(this.apiURL + '/cars/' + car_to_delete.id)

  }

  changePage(url: any, carToPersist?: Car){
    this.current_car = carToPersist ? carToPersist : {} as Car
    this.router.navigate([url]).then(r => {});
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    return throwError(() => `Error Code: ${error.status}\nMessage: ${error.message}`);
  }

}
