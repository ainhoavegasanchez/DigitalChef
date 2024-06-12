import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _product!: Product;
  baseUrl = environment.API_URL;
 
  public get(): Product {
    return this._product;
  }

  public set(product: Product) {
    this._product = product;
  }
  constructor(private http: HttpClient) { }

  public getProducts(id_catego:number=1):Observable<Product[]>{
    const products=  this.http.get<Product[]>(`${this.baseUrl}/getAllProducts.php?id_catego=${id_catego}`);
    return products;
  }

  public insertAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/insertProduct.php`);
  }

  public getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/getProduct.php?id=${id}`);
  }
}
