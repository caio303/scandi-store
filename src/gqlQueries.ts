export const CategoriesAndCurrenciesQuery = `
    query {
        categories {
            name,
            products {
                prices{
                    currency {
                        label,
                        symbol
                    }
                }
            }
        }
    }
`

export const CategoryQuery = (category: string = "all") => {
    return `query {
        category(input:{title:"${category}"}) {
          name,
          products {
            id,
            name,
            inStock,
            gallery,
            description,
            category,
            attributes {
              name,
              type,
              items {
                displayValue,
                value,
                id
              }
            }
            prices {
              currency {
                label,
                symbol
              },
              amount
            },
            brand
          }
        }
      }`
}