import { TOrders } from "./Orders.interface"
import { Orders } from "./Orders.model"


const createOrder = async (payload: TOrders) => {
    const result = await Orders.create(payload)
    return result
  }

  const getAllOrders = async () => {
    const result = await Orders.find()
    return result
  }


 const getOrdersByUserEmail = async (email: string) => {
        const result = await Orders.find({ email: email });
        return result 
    }


  export const OrdersServices = {
    createOrder,
    getAllOrders,
    getOrdersByUserEmail
  }