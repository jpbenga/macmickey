import { Address } from "./address"
import { Order } from "./order"

export interface Client{
  clientID: string
  email: string
  orders: Order[]
  adresses: Address[]
}
