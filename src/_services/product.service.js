// Import des modules nécessaires
import Axios from './caller.service'

let getAllProducts = () => {
    return Axios.get('/products')
}

let getProduct = (pid) => {
    return Axios.get('/products/'+pid)
}

let updateProduct = (product) => {
    return Axios.patch('/products/'+product.id, product)
}

let createProduct = (product) => {
    return Axios.put('/products', product)
}

let deleteProduct = (pid) => {
    return Axios.delete('/products/'+pid)
}

export const productService = {
    getAllProducts,
    getProduct,
    updateProduct,
    createProduct,
    deleteProduct,
}