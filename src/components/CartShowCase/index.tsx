import { CartItem } from "../CartItem"
import { Dispatch, SetStateAction } from "react"
import { InCartProductType } from "../../types"
import styled from 'styled-components'
import { Container } from "./styles"
import { Link } from "react-router-dom"

type CartShowCaseProps = {
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
    currentCurrency: number,
    currencySymbol: string,
    isCartModalOpen: boolean,
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
    setIsCurrModalOpen: Dispatch<SetStateAction<boolean>>
}

export const CartShowCase = (props: CartShowCaseProps) => {

        if(props.myCart.length > 0) {

            return (
                <Container 
                    className={props.isCartModalOpen? "cartModal-open":""}
                    onClick={()=>{
                        props.setIsCartModalOpen(false)
                        props.setIsCurrModalOpen(false)
                    }}
                    >
                    <h1>CART</h1>
                    <ul>
                        {props.myCart.length > 0 && props.myCart.map((item,index)=> {
                                    
                                return <CartItem 
                                            key={index}
                                            liSize="lg"
                                            itemName={item.product.name}
                                            itemQuantity={item.quantity}
                                            currencyAmount={item.product.prices[props.currentCurrency].amount}
                                            currencySymbol={props.currencySymbol}
                                            itemAmount={item.product.prices[props.currentCurrency].amount}
                                            myCart={props.myCart}
                                            setMyCart={props.setMyCart}
                                            currentItem={item}
                                        />
                            })}
                    </ul>
                </Container>
            )
        }else {
            return (
                <Container className={props.isCartModalOpen? "cartModal-open":""}>
                    <h1>CART</h1>
                        <InnerContainer404>
                            <h1>Your Bag is <div style={{color: "var(--active-green)"}}>empty!</div></h1>
                            <h2><Link to="/products/all">Take a look at our products!</Link></h2>

                        </InnerContainer404>
                </Container>
            )
        }
    }

const InnerContainer404 = styled.div`
    h1 {
        text-align: center;
        padding: 3rem .5rem 3rem 0;

        div {
            color: var(--active-green);
        }
    }

    h2 {
        text-align: center;
        padding: .4rem .5rem 0 .2rem;
        text-decoration: underline;
    }
`