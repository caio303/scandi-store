import { consumeApi } from '../utils/consumeApi'
import { useEffect, useState } from 'react'
import { Dispatch,SetStateAction } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router'
import { DataType, InCartProductType } from '../types'
import { CategoryShowCase } from '../components/CategoryShowCase'
import { CategoryQuery } from '../gqlQueries'

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

    const [error,setError] = useState(false)

    useEffect(()=>{
      setLoading(true)
      if(params.slug !== "all" && params.slug !== "tech" && params.slug !== "clothes"){
        setError(true)
      }
      try {
        consumeApi(CategoryQuery(category)).then(
            (data) => setData(data.data)
        )
      }catch(e) {
        console.warn(e)
      }
      setTimeout(()=> setLoading(false) ,50)
    },[params.slug])

    if(error === true) return <Navigate to="/"/>
    else{
      return (
          <>
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