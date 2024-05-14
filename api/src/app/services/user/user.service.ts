import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user!: any;
  constructor(private http: HttpClient) { }
  baseUrl = "https://vps-65482c69.vps.ovh.net/app/dist/php/users";

  get UserGet(): any {
    return this._user;
  }


  set userSet(user: any) {
    this._user = user;
  }

  insertUser(user: any) {
    return this.http.post(`${this.baseUrl}/insertUser.php`, user);
  }

  getUser(user: any) {
    const userReturn = this.http.post(`${this.baseUrl}/getUser.php`, JSON.stringify(user));
    return userReturn;
  };


  updateUser(user: any) {
    console.log(user);
    const update = this.http.post(`${this.baseUrl}/updateUser.php`, JSON.stringify(user));
    return update;
  }


  sendNewPass(email: any) {
    const update = this.http.post(`${this.baseUrl}/sendMail.php`, email);
    return update;
  }
}