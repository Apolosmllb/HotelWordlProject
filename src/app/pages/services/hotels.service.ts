import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Hotel} from "../model/hotel"
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  //hotels endpoint
  basePath = 'http://localhost:3000/hotels';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  // Get All Hotels
  getAll():Observable<Hotel>{
    return this.http.get<Hotel>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }


}
