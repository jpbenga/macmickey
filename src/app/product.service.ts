import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'https://macmickey.azurewebsites.net/Product'

  constructor(private apiService: ApiService) { }

  getProducts(): Observable<Product[]>{
    return this.apiService.get<Product[]>(this.productUrl)
  }

  getProductByType(productType: string): Observable<Product[]>{
    const url = `${this.productUrl}/type/${productType}`
    return this.apiService.get<Product[]>(url)
  }

  getProductById(productId: number): Observable<Product>{
    const url = `${this.productUrl}/${productId}`
    return this.apiService.get<Product>(url)
  }
}
