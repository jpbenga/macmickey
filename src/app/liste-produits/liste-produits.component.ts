import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  products$!: Observable<Product[]>

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    console.log(this.products$)
    this.products$ = this.productService.getProducts()
  }

}
