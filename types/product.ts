export interface ProductType {
    image: string,
    name: string,
    brand: string,
    price: number,
    hasDiscount?: boolean,
    discount: number,
    newPrice: number,
    rating: number
}