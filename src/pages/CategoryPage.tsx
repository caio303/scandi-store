import { consumeApi } from '../utils/consumeApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router'
import { Header } from '../components/Header'
import { DataType } from '../types'
import { CategoryShowCase } from '../components/CategoryShowCase'

export const CategoryPage = () => {

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
      if(params.slug != "all" && params.slug != "tech" && params.slug != "clothes"){
        setError(true)
      }
      try {
        consumeApi("http://localhost:4000",query).then(
            (data) => {setData(data.data)}
        )
      }catch(e) {
        console.warn(e)
      }
      setLoading(false)
    },[])

    if(error === true) return <Navigate to="/"/>
    else{
      return (
          <>
            <Header 
              currentCategory={params.slug??"all"} 
              currentCurrency={0}
              />
            <CategoryShowCase 
              currentCategory={params.slug??"all"} 
              currentCurrency={0} 
              data={data}
              isLoading={loading}
              />
          </>
      )

    }

}