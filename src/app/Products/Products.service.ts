import {  TProducts } from './Products.interface'
import {  Products } from './Products.model'

const createProduct = async (payload: TProducts) => {
  const result = await Products.create(payload)
  return result
}

const getAllProducts = async () => {
  const result = await Products.find()
  return result
}

const getSingleProduct = async (_id: string) => {
  const result = await Products.findOne({ _id })
  return result
}


const updateSingleProduct = async (_id: string, productData: TProducts) => {
  const result = await Products.findByIdAndUpdate(_id, productData)
  return result
}

const deleteSingleProduct = async (_id: string) => {
  const result = await Products.deleteOne({ _id })
  return result
}

const searchProduct = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i')
  const result = await Products.find({
    $or: [{ name: regex }],
  })
  return result
}



export const ProductsServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchProduct,
}


