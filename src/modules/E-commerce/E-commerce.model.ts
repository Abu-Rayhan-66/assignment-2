
import { Schema, model } from "mongoose";
import { TInventory, TProducts, TVariant } from "./E-commerce.interface";


const variantSchema = new Schema<TVariant>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const inventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    variants: {
        type: [variantSchema],
        required: true
    },
    inventory: {
        type: inventorySchema,
        required: true
    }
});

export const Products = model<TProducts>("Products", productsSchema)