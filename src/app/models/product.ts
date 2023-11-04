export interface Product{
  productID: number
  name: string
  productType: ProductType
  unitPrice: number
  description: string
  stockpiled: number
}

export interface ProductCart {
  product: string;
  quantity: number;
}

export enum ProductType{
  burger = 'burger',
  side = 'side',
  beverage = 'beverage',
  dessert = 'dessert'
}
