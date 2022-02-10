import { Header } from "../components/Header"
import { consumeApi } from "../utils/consumeApi"
import { Dispatch,SetStateAction,useEffect,useState } from 'react'
import { InCartProductType,CurrencyType,DataType } from '../types/index'
import { CartShowCase } from "../components/CartShowCase"
 

type CartPageProps = {
  currentCurrency: number,
  handleCurrencyChange: Dispatch<SetStateAction<number>>,
  myCart: InCartProductType[] | [],
  setMyCart: Dispatch<SetStateAction<InCartProductType[] | []>>,
  isCartModalOpen: boolean,
  setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
  cartTotalAmount: number
}

export const CartPage = (props: CartPageProps) => {
    
    const [data,setData] = useState<DataType>()

    const query = `query {
        category(input:{title:"all"}) {
          name,
          products {
            prices {
              currency {
                label,
                symbol
              }
            }
          }
        }
      }`

    useEffect(()=> {
        try {
            consumeApi("http://localhost:4000",query).then(
                (data) => setData(data.data)
            )
          }catch(e) {
            console.warn(e)
          }
    },[])

    let currencies: CurrencyType[] | undefined

    currencies = data?.category.products[0].prices.map((item,index) => {
      return item.currency
    })

    let currencySymbol = "$"

    if (props.myCart.length > 0) currencySymbol = props.myCart[0].product.prices[props.currentCurrency].currency.symbol

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
              <CartShowCase 
                currencySymbol={currencySymbol}
                myCart={props.myCart}
                setMyCart={props.setMyCart}
                currentCurrency={props.currentCurrency}
                isCartModalOpen={props.isCartModalOpen}
                setIsCartModalOpen={props.setIsCartModalOpen}
                />
        </>
    )
}