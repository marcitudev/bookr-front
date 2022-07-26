import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient,
              private _snack: MatSnackBar) { }

  findAllByCategory(id: String): Observable<Book[]>{
    const url = `${this.baseUrl}book?category_id=${id}`;
    return this.http.get<Book[]>(url);
  }

  findById(id: String): Observable<Book>{
    const url = `${this.baseUrl}book/${id}`;
    return this.http.get<Book>(url);
  }

  create(book: Book, category_id: String): Observable<Book>{
    const url = `${this.baseUrl}book?category_id=${category_id}`;
    return this.http.post<Book>(url, book);
  }

  update(book: Book, id: String): Observable<Book>{
    const url = `${this.baseUrl}book/${id}`;
    return this.http.put<Book>(url, book);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}book/${id}`;
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
