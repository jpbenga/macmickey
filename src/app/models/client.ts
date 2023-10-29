import { Address } from "./address"
import { Order } from "../models/order"

export interface Client{
  clientID: string
  email: string
  orders: Order[]
  addresses: Address[]
}
