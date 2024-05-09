import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://vps-65482c69.vps.ovh.net/php/category";

  insertAllCategory(){
    return this.http.get(`${this.baseUrl}/insertCategory.php`);
  }
}
