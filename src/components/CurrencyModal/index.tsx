import React, { Dispatch, SetStateAction } from "react"
import { CurrencyType } from "../../types"
import { Container } from "./styles"

type CurrencyModalProps = {
    allCurrencies: CurrencyType[] | undefined,
    handleCurrentCurrencyChange: Dispatch<SetStateAction<number>>
}

export class CurrencyModal extends React.Component<CurrencyModalProps> {

    render() {
        return (
            <Container id="currency-modal">
                <ul>
                    {
                        this.props.allCurrencies !== undefined &&
                        this.props.allCurrencies.map((item,index)=>{
                            return  <li 
                                        key={index}
                                        onClick={()=>this.props.handleCurrentCurrencyChange(index)}
                                        >
                                        {item.symbol} {item.label}
                                    </li>
                        })
                    }
                </ul>
            </Container>        
        )
    }
}