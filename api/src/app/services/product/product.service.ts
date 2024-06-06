import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../enviroment';


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


 baseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getProducts(id_catego:number=1):Observable<any>{
    const products=  this.http.get(`${this.baseUrl}/getAllProducts.php?id_catego=${id_catego}`);
    return products;
  }

  insertAllProducts(){
    return this.http.get(`${this.baseUrl}/insertProduct.php`);
  }

  getProduct(id:number){
    return this.http.get<Product>(`${this.baseUrl}/getProduct.php?id=${id}`);
  }
}
