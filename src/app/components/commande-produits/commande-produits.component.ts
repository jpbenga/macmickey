import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product, ProductCart } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-commande-produits',
  templateUrl: './commande-produits.component.html',
  styleUrls: ['./commande-produits.component.css']
})
export class CommandeProduitsComponent implements OnInit{

  orderQuantity: number = 1
  product$!: Observable<Product>
  productCart: Array<ProductCart> = []
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

  addToCart() {
  if (this.orderQuantity > 0) {
    this.product$.subscribe((product) => {
      const cartItem: ProductCart = {
        product: product.name,
        quantity: this.orderQuantity
      }
      this.productCart.push(cartItem)
      console.table(this.productCart)
    })

    this.orderQuantity = 0;
  }
}
}
