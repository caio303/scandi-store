import { CartItem } from "../CartItem"
import { Dispatch, SetStateAction } from "react"
import { InCartProductType } from "../../types"
import { Container } from "./styles"
import { Link } from "react-router-dom"

type CartShowCaseProps = {
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
    currentCurrency: number,
    currencySymbol: string,
    isCartModalOpen: boolean,
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>
}

export const CartShowCase = (props: CartShowCaseProps) => {

    if(props.myCart.length > 0) {
        return (
            <Container className={props.isCartModalOpen? "cartModal-open":""}>
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
                                        itemImage={item.product.gallery[0]}
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
                    <h1 style={{textAlign:"center",padding:"3rem .5rem 3rem 0"}}>Your Bag is <div style={{color: "var(--active-green)"}}>empty!</div></h1>
                    <h2 style={{textAlign:"center",padding:".4rem .5rem 0 .2rem",textDecoration:"underline"}}><Link to="/products/all">Take a look at our products!</Link></h2>
            </Container>
        )
    }
}