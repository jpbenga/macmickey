import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-commande-produits',
  templateUrl: './commande-produits.component.html',
  styleUrls: ['./commande-produits.component.css']
})
export class CommandeProduitsComponent implements OnInit{

  orderQuantity!: number
  product$!: Observable<Product>
  orderValidation = false

  constructor(
    private route: ActivatedRoute,
     private productService: ProductService)
     {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id')
        return this.productService.getProductById(parseInt(productId as string, 10))
      })
    )
  }

  orderValidationMessage(){
    this.orderValidation = true
  }
}
