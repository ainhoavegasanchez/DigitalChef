import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../enviroment';
import { User } from '../../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user!: User;
  baseUrl = environment.API_URL;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this._user = JSON.parse(storedUser);
    }
  }

  public get(): User {
    return this._user;
  }

  public set(user: User) {
    this._user = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public insertUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/insertUser.php`, user);
  }

  public getUser(user: Partial<User>): Observable<User> {
    this.logout();
    const currentUser = this.http.post<User>(`${this.baseUrl}/getUser.php`, JSON.stringify(user))
      .pipe(
        tap(response => {
          if (response.token) {
            this.set(response);
          }
        })
      );
    return currentUser;
  }

  public updateUser(user: Partial<User>): Observable<User> {
    const updateUser = this.http.post<User>(`${this.baseUrl}/updateUser.php`, JSON.stringify(user));
    return updateUser;
  }

  public sendNewPass(email: string) {
    const update = this.http.post(`${this.baseUrl}/sendMail.php`, JSON.stringify(email));
    return update;
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
  }
}

