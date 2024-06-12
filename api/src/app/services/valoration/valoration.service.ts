import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { environment } from '../../../../environment';
import { Valoration } from '../../interfaces/Valoration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorationService {

    constructor(
      private http: HttpClient,
      private userService: UserService,
    ) { }
  
    baseUrl = environment.API_URL;
   
    public getValorationProduct(id_producto:number):Observable<Valoration> {
      const valoration = this.http.get<Valoration>(`${this.baseUrl}/getValoration.php?id_producto=${id_producto}`);
      return valoration;
    };

    public insertValoration(valor: number, id_producto: number):Observable<Valoration> {
      const user = this.userService.get();
      const detail = this.http.post<Valoration>(`${this.baseUrl}/insertValoration.php`, { valor: valor, id_producto: id_producto, user: user });
      return detail;
    }

    public getValorations() :Observable<Valoration[]>{
      const id_usuario= this.userService.get()!.id;
      console.log(id_usuario);
      const valoration = this.http.get<Valoration[]>(`${this.baseUrl}/getAllValoration.php?id_usuario=${id_usuario}`);
      return valoration;
    };
}
