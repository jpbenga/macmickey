export interface Product{
  productId: number
  name: string
  productType: ProductType
  unitPrice: number
  description: string
  stockpiled: number
}

export enum ProductType{
  burger = 'burger',
  side = 'side',
  beverage = 'beverage',
  dessert = 'dessert'
}
