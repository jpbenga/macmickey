import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  products$!: Observable<Product[]>

  constructor(private productService: ProductService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts()
  }
}
