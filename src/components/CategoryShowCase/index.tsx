import { Dispatch,SetStateAction } from 'react'
import { DataType,ProductType } from '../../types/'
import { CategoryShowCaseItem } from '../CategoryShowCaseItem'
import { Container } from './styles'

type ShowCaseProps = {
    currentCategory: string,
    currentCurrency: number,
    data: DataType | undefined,
    isLoading: boolean,
    myCart: ProductType[] | [],
    setMyCart: Dispatch<SetStateAction<ProductType[]|[]>>
}

export const CategoryShowCase = (props: ShowCaseProps) => {  

    let title = props.currentCategory.charAt(0).toUpperCase()+props.currentCategory.replace(/^./,'') 

    if(title.match(/All/)) title = "All Products"
    if(title.match(/Tech/)) title = "Tech Devices"
    if(title.match(/Clothes/)) title = "Clothing Articles"

    return (
        <Container>
            <h2>{title}</h2>
            {props.isLoading?
                <div><i className="fas fa-circle-notch fa-spin"></i></div>
                :
                <div id='products-list'>
                    {props.data != undefined && props.data?.category.products.map((item,index) => {
                        return (
                            <CategoryShowCaseItem 
                                imageSrc={item.gallery[0]}
                                productName={item.name}
                                productId={item.id}
                                productInStock={item.inStock}
                                currencySymbol={item.prices[props.currentCurrency].currency.symbol}
                                currencyAmount={item.prices[props.currentCurrency].amount}
                                myCart={props.myCart}
                                setMyCart={props.setMyCart}
                                currentProduct={item}
                                key={index}
                            />
                        )
                    })}
                </div>
            }
        </Container>
    )
}