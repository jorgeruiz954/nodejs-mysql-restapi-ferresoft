import {Router} from "express";
import {getProducts, createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/products.controller.js'



const router = Router()

router.get('/products', getProducts )

router.get('/products/:id', getProduct )

router.post('/products', createProduct)

router.patch('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct )



export default router