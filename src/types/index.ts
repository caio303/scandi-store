export type PriceType = {
    currency: {
        label: string,
        symbol: string
    },
    amount: number
}

export type ProductType = {
    attributes: AttributeSetType[],
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

export type CurrencyType = {
    label: string,
    symbol: string
}

export type AttributeType = {
    displayValue: String,
    value: String,
    id: String
}

export type AttributeSetType = {
    name: String,
    type: String,
    items: AttributeType[]
}

export type InCartProductType = {
    product: ProductType,
    quantity: number
}