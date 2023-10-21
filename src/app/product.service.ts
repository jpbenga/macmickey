import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'https://macmickey.azurewebsites.net/Product'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http
    .get<Product[]>(this.productUrl)
  }
}
