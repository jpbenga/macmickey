import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Order } from './order';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderUrl = 'https://macmickey.azurewebsites.net/Order'

  constructor(private apiService: ApiService) { }

  getOrder(): Observable<Order[]>{
    return this.apiService.get<Order[]>(this.orderUrl)
  }

  getOrderActive() : Observable<Order[]>{
    const url = `${this.orderUrl}/active`
    return this.apiService.get<Order[]>(url)
  }

  getOrderById(orderId: number): Observable<Order>{
    const url = `${this.orderUrl}/${orderId}`
    return this.apiService.get<Order>(url)
  }

}
