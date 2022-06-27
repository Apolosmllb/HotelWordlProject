import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ProductDataService} from "../../../services/product-data.service";
import {Product} from "../product-list/product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    style: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    clearance: new FormControl(false),
    image: new FormControl('assets/beer.png'),
    quantity: new FormControl(0),

  });
  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.productDataService.create(this.productForm.value);
  }


}
