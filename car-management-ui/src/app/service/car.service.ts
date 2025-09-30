import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {v4 as uuidv4} from 'uuid';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Car } from '../model/car';
import {Router, RouterModule} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class CarService {

  private apiURL = "http://localhost:8080"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/cars').pipe(catchError(this.errorHandler))
  }

  createCarElement(car: Car) {
    console.log(car)
    this.httpClient.post<Car>(this.apiURL + `/cars`, car).pipe(catchError(this.errorHandler))
  }



  // Logic to change pages, put [] in order to recognize string
  changePage(url: any){
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
