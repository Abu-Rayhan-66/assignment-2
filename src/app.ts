import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductsRoutes } from './modules/E-commerce/E-commerce.route'
const app: Application = express()

// parser
app.use(express.json())


app.use("/api/products", ProductsRoutes)

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

console.log()

export default app
