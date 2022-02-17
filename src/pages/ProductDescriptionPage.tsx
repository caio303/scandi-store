import { useParams } from "react-router"
import { useState,useEffect,Dispatch,SetStateAction } from "react"
import { DataType,InCartProductType} from '../types/index'
import { consumeApi } from "../utils/consumeApi"
import { ProductDescription } from "../components/ProductDescription"
import { CategoryQuery } from "../gqlQueries"

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

    useEffect(()=> {
        try {
          consumeApi(CategoryQuery("all")).then(
              (data) => setData(data.data)
          )
        }catch(e) {
          console.warn(e)
        }
    },[])

    const params = useParams()

    const currentItem = data?.category.products.find(item => item.id === params.id)

    return (
        <>
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