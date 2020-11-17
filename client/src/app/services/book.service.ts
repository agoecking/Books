import { Book } from "./../models/Book";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class BookService{
    baseURL = "http://localhost:1234";

    constructor(private http: HttpClient) {}

    list(): Observable<Book[]>{
        return this.http.get<Book[]>(this.baseURL+'/book');
    }

    create (book: Book): Observable<Book>{
        return this.http.post<Book>(this.baseURL+'/book/register', book);
    }

    getByGenre (genre: string): Observable<Book>{
        return this.http.get<Book>(`${this.baseURL, genre}`)
    }

    update(book: Book): Observable<Book>{
        return this.http.put<Book>(this.baseURL, book)
    }    
}