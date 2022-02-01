import { DataType } from '../../types/'
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
                        <div key={index}>
                            <img height="100" src={item.gallery[0]}/>
                            <div>
                                <h2>{item.name}</h2>
                                <h3>{item.prices[props.currentCurrency].currency.symbol} {item.prices[props.currentCurrency].amount}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}