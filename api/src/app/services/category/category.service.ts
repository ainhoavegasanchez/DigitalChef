import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  insertAllCategory(){
    return this.http.get(`${environment.API_URL}/insertCategory.php`);
  }
}
