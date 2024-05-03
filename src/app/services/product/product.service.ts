import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _product!: any;
 
  get productGet(): any {
    return this._product;
  }


  set productSet(product: any) {
    this._product = product;
  }

  baseUrl = "http://vps-65482c69.vps.ovh.net/php/products";

  constructor(private http: HttpClient) { }

  getProducts():any{
    return this.http.get(`${this.baseUrl}/getAllProducts.php`);
  }

  insertAllProducts(){
    return this.http.get(`${this.baseUrl}/insertProduct.php`);
  }

  getProduct(id:number){
    return this.http.get<Product>(`${this.baseUrl}/getProduct.php?id=${id}`);
  }
}
