import { Dispatch, SetStateAction } from "react"
import { CurrencyType } from "../../types"
import { Container } from "./styles"

type CurrencyModalProps = {
    allCurrencies: CurrencyType[] | undefined,
    handleCurrentCurrencyChange: Dispatch<SetStateAction<number>>
}

export const CurrencyModal = (props: CurrencyModalProps) => {

    return (
        <Container id="currency-modal">
            <ul>
                {
                    props.allCurrencies !== undefined &&
                    props.allCurrencies.map((item,index)=>{
                        return  <li 
                                    key={index}
                                    onClick={()=>props.handleCurrentCurrencyChange(index)}
                                    >
                                    {item.symbol} {item.label}
                                </li>
                    })
                }
            </ul>
        </Container>        
    )
}