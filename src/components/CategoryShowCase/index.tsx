import { DataType } from '../../types/'
import { CategoryShowCaseItem } from '../CategoryShowCaseItem'
import { Container } from './styles'

type ShowCaseProps = {
    currentCategory: string,
    currentCurrency: 0 | 1 | 2 | 3 | 4,
    data: DataType | undefined
}

export const CategoryShowCase = (props: ShowCaseProps) => {  

    return (
        <Container>
            <h2>{props.currentCategory.charAt(0).toUpperCase()+props.currentCategory.replace(/^./,'')}</h2>
            <div id='products-list'>
                {props.data != undefined && props.data?.category.products.map((item,index) => {
                    return (
                        <CategoryShowCaseItem 
                            imageSrc={item.gallery[0]}
                            productName={item.name}
                            currencySymbol={item.prices[props.currentCurrency].currency.symbol}
                            currencyAmount={item.prices[props.currentCurrency].amount}
                            key={index}
                        />
                    )
                })}
            </div>
        </Container>
    )
}