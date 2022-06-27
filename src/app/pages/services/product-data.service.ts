import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Product} from "../components/items/product-list/product";
import {environment} from "../../../environments/environment";

const URL = environment.apiUrl + 'product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private _products : Product[] = [];
  private _productsSubjects : BehaviorSubject<Product[]> = new BehaviorSubject(this._products);
  public beers : Observable<Product[]> = this._productsSubjects.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Product[]>(URL).subscribe(data => {
      this._products.push(...data);
    });
  }

  create(product: Product): void{
    this.http.post<Product>(URL, product).subscribe({
      error: error => {
        console.error('There was an error!', error);
      },
      next: data => {
        this._products.push(data)
      }
    });
  }
}
