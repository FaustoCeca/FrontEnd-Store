import { products } from "../data/products";

export const getProducts = () => {
    return products.map(({id, title, price, description}) => {
        return {
            id, title, price, description
        }
    })
}