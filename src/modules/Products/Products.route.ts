import express from 'express'
import { ProductsController } from './Products.controller'

const router = express.Router()

router.get('/', (req, res) => {
  if (req.query.searchTerm) {
    return ProductsController.searchProductFromDb(req, res)
  } else {
    return ProductsController.getAllProductsFromDb(req, res)
  }
})

router.post('/', ProductsController.createProduct)
router.get('/:productId', ProductsController.getSingleProductsFromDb)
router.put('/:productId', ProductsController.updateSingleProductFromDb)
router.delete('/:productId', ProductsController.deleteSingleProductFromDb)


export const ProductsRoutes = router
