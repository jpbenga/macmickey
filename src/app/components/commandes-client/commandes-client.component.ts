import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-commandes-client',
  templateUrl: './commandes-client.component.html',
  styleUrls: ['./commandes-client.component.css']
})
export class CommandesClientComponent implements OnInit {

  orders$!: Observable<Order[]>

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrder()
    this.orders$.subscribe((orderData) => {
      console.log(orderData)
    })
  }
}
