export type PriceType = {
    currency: {
        label: string,
        symbol: string
    },
    amount: number
}

export type ProductType = {
    attributes: Object[],
    brand: string,
    description: string,
    gallery: string[],
    id: string,
    inStock: boolean,
    name: string,
    prices: PriceType[]
}

export type DataType = {
    category: {
        name: string,
        products: ProductType[]
    }
}