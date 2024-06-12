import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { Category } from '../../interfaces/Category';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public insertAllCategory(): Observable<Category>{
    return this.http.get<Category>(`${environment.API_URL}/insertCategory.php`);
  }
}
