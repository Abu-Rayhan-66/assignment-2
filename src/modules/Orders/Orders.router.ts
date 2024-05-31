import express from 'express'
import { OrdersController } from './Orders.controller'


const router = express.Router()


router.get('/', (req, res) => {
    if (req.query.email) {
      return OrdersController.getOrdersByUserEmailFromDb(req, res)
    } else {
      return OrdersController.getAllOrdersFromDb(req, res)
    }
  })

router.post("/", OrdersController.createOrders)




export const OrdersRoutes = router