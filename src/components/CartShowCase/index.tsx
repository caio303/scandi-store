import { CartItem } from "../CartItem"
import { Dispatch, SetStateAction } from "react"
import { InCartProductType } from "../../types"
import { Container } from "./styles"

type CartShowCaseProps = {
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
    currentCurrency: number,
    currencySymbol: string,
    isCartModalOpen: boolean,
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>
}

export const CartShowCase = (props: CartShowCaseProps) => {
    return (
        <Container>
            <h1 style={{padding: "3rem 0 1rem 1rem",marginBottom: "3rem"}}>CART</h1>
            {props.myCart.length > 0 && props.myCart.map((item,index)=> {
                    return <CartItem 
                                key={index}
                                liSize="lg"
                                itemName={item.product.name}
                                itemQuantity={item.quantity}
                                currencyAmount={item.product.prices[props.currentCurrency].amount}
                                currencySymbol={props.currencySymbol}
                                itemAmount={item.product.prices[props.currentCurrency].amount}
                                itemImage={item.product.gallery[0]}
                                myCart={props.myCart}
                                setMyCart={props.setMyCart}
                                currentItem={item}
                            />
                })}
        </Container>
    )
}