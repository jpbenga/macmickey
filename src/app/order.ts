export interface Order{
  orderID: number
  orderDetails: OrderDetails
  orderState: string
  creationDateTime: Date
  lastModifiedDateTime: Date
  clientID: string
}

interface OrderDetails{
  orderDetailID: number
  quantity: number
  unitPrice: number
  productID: number
  orderID: number
}
