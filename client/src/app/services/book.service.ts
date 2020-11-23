import { Book } from "./../models/Book";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BookService {
  baseURL = "http://localhost:1234/book";

  constructor(private http: HttpClient) {}

  list(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseURL + "/register", book);
  }

  getById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseURL}` + `/${id}`);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(this.baseURL + "/update", book);
  }

  delete(id: string): Observable<Book[]> {
    return this.http.delete<Book[]>(`${this.baseURL}` + "/delete/" + `${id}`);
  }
}
