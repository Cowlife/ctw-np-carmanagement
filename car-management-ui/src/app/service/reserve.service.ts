import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {Car} from "../model/car";
import {Reserve} from "../model/reserve";

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private httpClient: HttpClient) { }

  getReserveElements(apiUrl: string, licensePlate: string): boolean{
    this.httpClient.get(apiUrl + '/reserves?car_license_plate=' + licensePlate).pipe(catchError(this.errorHandler))
      .subscribe({
        next: (response: any) => {
          let rev_list = response as Reserve[]
          return rev_list.length > 0;
        },
        error: error => console.log(error)
      })
    return false;
  }

  reserveCarElement(apiUrl: string, reserve: Reserve) {
    this.httpClient.post(apiUrl + '/reserves', reserve).pipe(catchError(this.errorHandler))
      .subscribe({
        next: response => {
          setTimeout(() => {alert("Reserved done successfully")}, 500)
        },
        error: error => setTimeout(() => {alert("Error could not insert element. Please insert elements correctly.")}, 500),
      })

    return false;
  }

  errorHandler(error:any) {
    return throwError(() => `Error Code: ${error.status}\nMessage: ${error.message}`);
  }

}
