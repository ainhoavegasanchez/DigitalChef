import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ValorationService {

    constructor(
      private http: HttpClient,
      private userService: UserService,
      private productService: ProductService
    ) { }
    baseUrl = "https://vps-65482c69.vps.ovh.net/app/dist/php/valoration";
  
    /*insertValoration() {
      const user = this.userService.UserGet;
      const product = this.productService.productGet;
      const valoration = this.http.post(`${this.baseUrl}/insertValoration.php`, { product, user });
      return valoration;
    }*/
  
  
    getValorationProduct(id_producto:number) {
      const valoration = this.http.get(`${this.baseUrl}/getValoration.php?id_producto=${id_producto}`);
      return valoration;
    };

    insertValoration(valor: number, id_producto: number) {
      const user = this.userService.UserGet;
      const detail = this.http.post(`${this.baseUrl}/insertValoration.php`, { valor: valor, id_producto: id_producto, user: user });
      return detail;
    }

    getValorations() {
      const id_usuario= this.userService.UserGet.id;
      console.log(id_usuario);
      const valoration = this.http.get(`${this.baseUrl}/getAllValoration.php?id_usuario=${id_usuario}`);
      return valoration;
    };
}
