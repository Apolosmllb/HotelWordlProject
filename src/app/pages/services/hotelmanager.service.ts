import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Hotelmanager} from "../model/hotelmanager";

@Injectable({
  providedIn: 'root'
})
export class HotelmanagerService {

  basePath='http://localhost:3000/api/v1/HotelManager'

  CurrentdataManager:Hotelmanager;
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) {
    this.CurrentdataManager={} as Hotelmanager;
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

  create(item:any):Observable<Hotelmanager>{
    return this.http.post<Hotelmanager>(this.basePath,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));

  }

  getById(id:any):Observable<Hotelmanager>{
    return this.http.get<Hotelmanager>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  getAll():Observable<Hotelmanager>{
    return this.http.get<Hotelmanager>(this.basePath,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

  update(id:any, item: any): Observable<Hotelmanager>{
    return this.http.put<Hotelmanager>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  delete(id:any): Observable<Hotelmanager>{
    return this.http.delete<Hotelmanager>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }

}
