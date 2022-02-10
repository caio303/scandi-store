import { consumeApi } from '../utils/consumeApi'
import { useEffect, useState } from 'react'
import { Dispatch,SetStateAction } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router'
import { Header } from '../components/Header'
import { CurrencyType, DataType, InCartProductType } from '../types'
import { CategoryShowCase } from '../components/CategoryShowCase'

type CategoryPageProps = {
  currentCurrency: number,
  handleCurrencyChange: Dispatch<SetStateAction<number>>,
  myCart: InCartProductType[] | [],
  setMyCart: Dispatch<SetStateAction<InCartProductType[] | []>>,
  isCartModalOpen: boolean,
  setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
  cartTotalAmount: number
}

export const CategoryPage = (props:CategoryPageProps) => {

    const [data,setData] = useState<DataType>()
    const [loading,setLoading] = useState(false)

    const params = useParams()

    const category = (params.slug === "")? "all":`${params.slug}`

    const query = `query {
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

    const [error,setError] = useState(false)

    useEffect(()=>{
      setLoading(true)
      if(params.slug !== "all" && params.slug !== "tech" && params.slug !== "clothes"){
        setError(true)
      }
      try {
        consumeApi("http://localhost:4000",query).then(
            (data) => setData(data.data)
        )
      }catch(e) {
        console.warn(e)
      }
      setTimeout(()=> setLoading(false) ,50)
    },[])

    let currencies: CurrencyType[] | undefined

    currencies = data?.category.products[0].prices.map((item,index) => {
      return item.currency
    })

    if(error === true) return <Navigate to="/"/>
    else{
      return (
          <>
            <Header 
              currentCategory={params.slug??"all"} 
              allCurrencies={currencies}
              currentCurrency={props.currentCurrency}
              handleCurrencyChange={props.handleCurrencyChange}
              myCart={props.myCart}
              setMyCart={props.setMyCart}
              isCartModalOpen={props.isCartModalOpen}
              setIsCartModalOpen={props.setIsCartModalOpen}
              cartTotalAmount={props.cartTotalAmount}
              />
            <CategoryShowCase 
              currentCategory={params.slug??"all"} 
              currentCurrency={props.currentCurrency} 
              data={data}
              isLoading={loading}
              myCart={props.myCart}
              setMyCart={props.setMyCart}
              isCartModalOpen={props.isCartModalOpen}
              />
          </>
      )

    }

}