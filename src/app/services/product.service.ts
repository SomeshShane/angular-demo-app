import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from '../config/api';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // products:Product[]=[
  //   new Product(1,'Product 1','This is the product 1 decription. The product is really cool',100),
  //   new Product(2,'Product 2','This is the product 2 decription. The product is really cool',200),
  //   new Product(3,'Product 3','This is the product 3 decription. The product is really cool',300),
  //   new Product(4,'Product 4','This is the product 4 decription. The product is really cool',400),
  //   new Product(5,'Product 5','This is the product 5 decription. The product is really cool',500),
  //   new Product(6,'Product 6','This is the product 6 decription. The product is really cool',600),
  // ]
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    //todo:populate products from an API and return an observable
    return this.http.get<Product[]>(productsUrl);
  }
}
