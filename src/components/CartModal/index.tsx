import { Dispatch, SetStateAction } from "react"
import { InCartProductType } from "../../types"
import { CartItem } from "../CartItem"
import { Container } from "./styles"

type CartModalProps = {
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
    currentCurrency: number,
    cartTotalAmount: number
}

export const CartModal = (props: CartModalProps) => {

    const currencySymbol = props.myCart[0].product.prices[props.currentCurrency].currency.symbol

    return (
        <Container>
            <h2>My Bag,&nbsp;<span>{props.myCart.length} items</span></h2>
            <div id="cartModal-list">
                <ul>
                    {props.myCart.map((item,index) => {
                        return <CartItem
                                    key={index}
                                    liSize="sm"
                                    itemName={item.product.name}
                                    itemQuantity={item.quantity}
                                    currencyAmount={item.product.prices[props.currentCurrency].amount}
                                    currencySymbol={currencySymbol}
                                    itemAmount={item.product.prices[props.currentCurrency].amount}
                                    itemImage={item.product.gallery[0]}
                                    myCart={props.myCart}
                                    setMyCart={props.setMyCart}
                                    currentItem={item}
                                />
                    })}
                </ul>
                <div id="cartModal-total">
                    <span>Total</span>
                    <span>{currencySymbol} {props.cartTotalAmount.toFixed(2)}</span>
                </div>
            </div>

        </Container>
    )
}