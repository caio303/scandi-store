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

export type CurrencyType = {
    label: string,
    symbol: string
}

export type CurrentCurrencyType = 0 | 1 | 2 | 3 | 4
/***
 * 0 --> USD
 * 1 --> GBP
 * 2 --> AUD
 * 3 --> JPY
 * 4 --> RUB
 */