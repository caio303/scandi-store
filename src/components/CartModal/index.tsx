import { Dispatch, SetStateAction } from "react"
import { InCartProductType } from "../../types"
import { Container } from "./styles"

type CartModalProps = {
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>
}

export const CartModal = (props: CartModalProps) => {
    return (
        <Container>
            <h2>My Bag &nbsp;<span>X items</span></h2>
            <div id="cartModal-list">
                <ul>
                    {props.myCart.map((item,index) => {
                        return <li key={index}>{item.product.name} - {item.quantity}</li>
                    })}
                </ul>
                <div id="cartModal-total">
                    <span>Total</span>
                    <span>$100.00</span>
                </div>
            </div>

        </Container>
    )
}