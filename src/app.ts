import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductsRoutes } from './modules/Products/Products.route'
import { OrdersRoutes } from './modules/Orders/Orders.router'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

app.use('/api/products', ProductsRoutes)
app.use('/api/orders', OrdersRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

console.log()

export default app
