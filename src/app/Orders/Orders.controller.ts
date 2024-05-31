import { Request, Response } from "express"
import ordersValidationSchema from "./Orders.validation"
import { OrdersServices } from "./Orders.service"
import { ZodError } from "zod"


const createOrders = async(req:Request, res:Response)=>{
    try {
      const ordersData = req.body
      const zodValidateData = ordersValidationSchema.parse(ordersData)
      const result = await OrdersServices.createOrder(zodValidateData)
  
      res.status(200).json({
        success: true,
        message: 'order created successfully',
        data: result,
      })
    } catch (error) {
      if (error instanceof ZodError) {
        const Errors = error.errors
  
        res.status(400).json({
          message: 'Validation failed',
          errors: Errors,
        })
      }
    }
  
  }

  const getAllOrdersFromDb = async (req:Request, res:Response)=>{
    try {
      const result = await OrdersServices.getAllOrders()
  
      res.json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      })
    } catch (err) {
      console.log(err)
    }
  }


  export const getOrdersByUserEmailFromDb = async (req: Request, res: Response) => {
    try {
        const userEmail = req.query.email as string;

        const orders = await OrdersServices.getOrdersByUserEmail(userEmail);
        res.json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: orders
        });
    } catch (error) {
        console.error('Error fetching orders by user email:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching orders by user email',
           
        });
    }
};




export const OrdersController = {
    createOrders,
    getAllOrdersFromDb,
    getOrdersByUserEmailFromDb
  }