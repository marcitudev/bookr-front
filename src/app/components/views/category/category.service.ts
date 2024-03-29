import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient,
              private _snack: MatSnackBar) { 

  }

  findAll(): Observable<Category[]>{
    const url = `${this.baseUrl}category`;
    return this.http.get<Category[]>(url);
  }

  findById(id: String): Observable<Category>{
    const url = `${this.baseUrl}category/${id}`;
    return this.http.get<Category>(url);
  }

  create(category: Category): Observable<Category>{
    const url = `${this.baseUrl}category`;
    return this.http.post<Category>(url, category);
  }

  update(category: Category): Observable<Category>{
    const url = `${this.baseUrl}category/${category.id}`;
    return this.http.put<Category>(url, category);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}category/${id}`;
    return this.http.delete<void>(url);
  }

  message(string: String): void{
    this._snack.open(`${string}`, 'OK', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
