import {Product} from './../models/Product'
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  baseURL = 'http://localhost:1234/product';

  constructor(private http: HttpClient) {}

  list(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL+'/1');
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL+'/registerBook', product);
  }
}
