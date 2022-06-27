import { Component, OnInit } from '@angular/core';
import {ProductCartService} from "../../../services/product-cart.service"
import {ProductDataService} from "../../../services/product-data.service";
import {Product} from "./product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[]  = [];

  constructor(private productDataService: ProductDataService, private productCartService: ProductCartService) { }

  ngOnInit(): void {
    this.productCartService.products.subscribe( products => this.products = products);
  }

  upQuantity(product : Product): void{
    if(product.stock > product.quantity) {
      product.quantity ++;
      this.productCartService.addToCart(product);
    }
  }

  downQuantity(product : Product): void{
    if(product.quantity > 0) {
      product.quantity --;
      this.productCartService.addToCart(product);
    }
  }

  verifyBeerQuantity(product : Product): void {
    if(product.stock < product.quantity) {
      alert("No se pueden pedir más de las products que hay en stock");
      product.quantity = product.stock;
    }

    if(product.quantity < 0) {
      alert("No se pueden pedir menos que 0 cervezas");
      product.quantity = 0;
    }
  }

}
