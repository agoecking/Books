import { User } from "./../models/User";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  baseURL = "http://localhost:1234/user";

  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL + "/register", user);
  }
  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}` + `/${id}`);
  }
  update(user: User): Observable<User> {
    return this.http.put<User>(this.baseURL + "/update", user);
  }

  delete(id: string): Observable<User[]> {
    return this.http.delete<User[]>(`${this.baseURL}` + "/delete/" + `${id}`);
  }
}
