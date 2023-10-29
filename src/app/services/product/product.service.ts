import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint = 'Product'

  constructor(private apiService: ApiService) { }

  getProducts(): Observable<Product[]>{
    return this.apiService.get<Product[]>(this.endPoint)
  }

  getProductByType(productType: string): Observable<Product[]>{
    const url = `${this.endPoint}/type/${productType}`
    return this.apiService.get<Product[]>(url)
  }

  getProductById(productId: number): Observable<Product>{
    const url = `${this.endPoint}/${productId}`
    return this.apiService.get<Product>(url)
  }
}
