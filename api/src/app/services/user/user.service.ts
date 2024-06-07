import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, tap } from 'rxjs';
import { environment } from '../../../../enviroment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user!: any;
  constructor(private http: HttpClient) { }

  baseUrl = environment.API_URL;

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
    const userEmail = user.email; 
    return this.http.post<any>(`${this.baseUrl}/getUser.php`, JSON.stringify(user))
      // .pipe(
      //   tap(response => {
      //     localStorage.setItem('email', response.email); 
      //   })
      // );
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
