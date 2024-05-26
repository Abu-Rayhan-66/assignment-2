import  express, { Request, Response }  from "express"
import { Products } from "./E-commerce.model"
import { ProductsController } from "./E-commerce.controller"

const router  = express.Router()

router.post("/", ProductsController.createProduct)
router.get("/", ProductsController.getAllProductsFromDb)
router.get("/:productId", ProductsController.getSingleProductsFromDb)
router.put("/:productId", ProductsController.updateSingleProductFromDb)
router.delete("/:productId", ProductsController.deleteSingleProductFromDb)

export const  ProductsRoutes = router 