import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Hotelguest} from "../model/hotelguest";

@Injectable({
  providedIn: 'root'
})

export class HotelguestService {
  //hotelguest endpoint
  basePath= 'http://localhost:3000/api/v1/Hotelguest';

  CurrentHotelGuest: Hotelguest;
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) {
    this.CurrentHotelGuest={} as Hotelguest;
  }
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


  create(item:any):Observable<Hotelguest>{
    return this.http.post<Hotelguest>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  getById(id:any):Observable<Hotelguest>{
    return this.http.get<Hotelguest>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Hotelguest>{
    return this.http.get<Hotelguest>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Hotelguest>{
    return this.http.put<Hotelguest>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Hotelguest>{
    return this.http.delete<Hotelguest>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

}
