import { Request, Response } from 'express'
import { ProductsServices } from './Products.service'
import { ZodError } from 'zod'
import productValidationSchema from './Products.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    const productsData = req.body
    const zodValidateData = productValidationSchema.parse(productsData)
    const result = await ProductsServices.createProduct(zodValidateData)

    res.status(200).json({
      success: true,
      message: 'product created successfully',
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

const getAllProductsFromDb = async (req: Request, res: Response) => {
  try {
    const result = await ProductsServices.getAllProducts()

    res.json({
      success: true,
      message: 'products retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const getSingleProductsFromDb = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductsServices.getSingleProduct(productId)
    res.json({
      success: true,
      message: 'product fetched successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const updateSingleProductFromDb = async (req:Request, res:Response)=>{
    try{
        const { productId } = req.params;
        const productsData = req.body;
        const zodValidateData = productValidationSchema.parse(productsData);
        const result = await ProductsServices.updateSingleProduct(productId, zodValidateData);

        res.json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
            
          })

    }catch(error){
        if (error instanceof ZodError) {
            const Errors = error.errors
      
            res.status(400).json({
              message: 'Validation failed',
              errors: Errors,
            })
          }
    }
}

const deleteSingleProductFromDb = async (req:Request, res:Response)=>{
    try{
         const {productId} = req.params
          await ProductsServices.deleteSingleProduct(productId)

         res.json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
            
          })


    }catch(err){
        console.log(err)
    }
}

const searchProductFromDb = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        message: 'Search term is required',
      });
    }
    
    const result = await ProductsServices.searchProduct(searchTerm as string);
    
    res.json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};




export const ProductsController = {
  createProduct,
  getAllProductsFromDb,
  getSingleProductsFromDb,
  updateSingleProductFromDb,
  deleteSingleProductFromDb,
  searchProductFromDb,
}


