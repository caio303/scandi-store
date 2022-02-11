import { Header } from "../components/Header"
import { useParams } from "react-router"
import { useState,useEffect,Dispatch,SetStateAction } from "react"
import { CurrencyType,DataType,InCartProductType} from '../types/index'
import { consumeApi } from "../utils/consumeApi"
import { ProductDescription } from "../components/ProductDescription"

type ProductDescriptionPageProps = {
    currentCurrency: number,
    handleCurrencyChange: Dispatch<SetStateAction<number>>,
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[] | []>>,
    isCartModalOpen: boolean,
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
    cartTotalAmount: number,
}

export const ProductDescriptionPage = (props:ProductDescriptionPageProps) => {
    
    const [data,setData] = useState<DataType>()

    const [isLoading,setIsLoading] = useState<boolean>(false)

    const query = `query {
        category(input:{title:"all"}) {
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

    useEffect(()=> {
      setIsLoading(true)
        try {
            consumeApi("http://localhost:4000",query).then(
                (data) => setData(data.data)
            )
          }catch(e) {
            console.warn(e)
          }
        setIsLoading(false)
    },[])

    let currencies: CurrencyType[] | undefined

    currencies = data?.category.products[0].prices.map((item,index) => {
      return item.currency
    })    

    const params = useParams()

    const currentItem = data?.category.products.find(item => item.id === params.id)

    return (
        <>
            <Header 
              currentCategory={"all"} 
              allCurrencies={currencies}
              currentCurrency={props.currentCurrency}
              handleCurrencyChange={props.handleCurrencyChange}
              myCart={props.myCart}
              setMyCart={props.setMyCart}
              isCartModalOpen={props.isCartModalOpen}
              setIsCartModalOpen={props.setIsCartModalOpen}
              cartTotalAmount={props.cartTotalAmount}
              />
            <ProductDescription 
              currentItem={currentItem}
              currentCurrency={props.currentCurrency}
              isCartModalOpen={props.isCartModalOpen}
              myCart={props.myCart}
              setMyCart={props.setMyCart}
              />
        </>
    )
}