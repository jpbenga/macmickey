import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Order } from '../../models/order';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  endPoint = 'Order'

  constructor(private apiService: ApiService) { }

  getOrder(): Observable<Order[]>{
    return this.apiService.get<Order[]>(this.endPoint)
  }

  getOrderActive() : Observable<Order[]>{
    const url = `${this.endPoint}/active`
    return this.apiService.get<Order[]>(url)
  }

  getOrderById(orderId: number): Observable<Order>{
    const url = `${this.endPoint}/${orderId}`
    return this.apiService.get<Order>(url)
  }

}
