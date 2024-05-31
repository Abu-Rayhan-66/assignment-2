import { Schema, model } from "mongoose"
import { TOrders } from "./Orders.interface"


const ordersSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  })
  
  export const Orders = model<TOrders>('Orders', ordersSchema)