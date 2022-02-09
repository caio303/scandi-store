import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { InCartProductType } from "../../types"
import { CartItem } from "../CartItem"
import { Container } from "./styles"

type CartModalProps = {
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
    currentCurrency: number,
    cartTotalAmount: number,
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>
}

export const CartModal = (props: CartModalProps) => {

    if(props.myCart.length > 0) {
        
        const currencySymbol = props.myCart[0].product.prices[props.currentCurrency].currency.symbol
        
        const closeCartModal = () => {
            props.setIsCartModalOpen(false)
        }

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
                    <div className="cartModal-footer">
                        <Link onClick={closeCartModal} to="/cart">VIEW BAG</Link>
                        <Link to="/check-out">CHECK OUT</Link>
                    </div>
                </div>
    
            </Container>
        )
    }else {
        return(
            <Container>
                <h2>My Bag,&nbsp;<span>0 items :(</span></h2>
                <div id="cartModal-list">
                    <h1 style={{textAlign:"center",padding:"3.9rem 0 3rem 0"}}>Your Bag is <div style={{color: "var(--active-green)"}}>empty!</div></h1>
                    <h3 style={{textAlign:"center",paddingBottom:".6rem"}}>Take a look at our products!</h3>
                </div>
            </Container>
        )
    }

    
}