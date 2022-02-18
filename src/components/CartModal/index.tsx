import React, { Dispatch, SetStateAction } from "react"
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

export class CartModal extends React.Component<CartModalProps> {

    render() {
        if(this.props.myCart.length > 0) {
            
            const currencySymbol = this.props.myCart[0].product.prices[this.props.currentCurrency].currency.symbol
            
            const closeCartModal = () => {
                this.props.setIsCartModalOpen(false)
            }
    
            return (
                <Container>
                    
                    <h2>My Bag,&nbsp;<span>{this.props.myCart.length} items</span></h2>
                    
                    <div id="cartModal-list">
                        <ul>
                            {this.props.myCart.map((item,index) => {
                                return <CartItem
                                            key={index}
                                            liSize="sm"
                                            itemName={item.product.name}
                                            itemQuantity={item.quantity}
                                            currencyAmount={item.product.prices[this.props.currentCurrency].amount}
                                            currencySymbol={currencySymbol}
                                            itemAmount={item.product.prices[this.props.currentCurrency].amount}
                                            myCart={this.props.myCart}
                                            setMyCart={this.props.setMyCart}
                                            currentItem={item}
                                        />
                            })}
                        </ul>
                        <div id="cartModal-total">
                            <span>Total</span>
                            <span>{currencySymbol} {this.props.cartTotalAmount.toFixed(2)}</span>
                        </div>
                        <div id="cartModal-footer">
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
                        <h1>Your Bag is <div>empty!</div></h1>
                        <h3>Take a look at our products!</h3>
                    </div>
                </Container>
            )
        }
    }
}