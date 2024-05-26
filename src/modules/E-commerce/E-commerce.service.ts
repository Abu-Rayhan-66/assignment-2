import { TProducts } from "./E-commerce.interface"
import { Products } from "./E-commerce.model"

const createProduct = async (payload: TProducts)=>{
    const result = await Products.create(payload)
    return result
}

const getAllProducts = async ()=>{
    const result = await Products.find()
    return result
}

const getSingleProduct = async(_id:string)=>{
    const result = await Products.findOne({_id})
    return result
}

// const updateSingleProduct = async(_id:any)=>{
//     const result = await Products.updateOne({_id})
//     return result
// }
const updateSingleProduct = async (_id: string, productData: TProducts) => {
    const result = await Products.findByIdAndUpdate(_id, productData, );
    return result;
  };

  const deleteSingleProduct = async (_id:string)=>{
    const result = await Products.deleteOne({_id})
    return result
  }

export const ProductsServices = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}