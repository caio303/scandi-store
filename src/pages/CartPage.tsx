import { Dispatch,SetStateAction } from 'react'
import { InCartProductType } from '../types/index'
import { CartShowCase } from "../components/CartShowCase"
 

type CartPageProps = {
  currentCurrency: number,
  handleCurrencyChange: Dispatch<SetStateAction<number>>,
  myCart: InCartProductType[] | [],
  setMyCart: Dispatch<SetStateAction<InCartProductType[] | []>>,
  isCartModalOpen: boolean,
  setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
  cartTotalAmount: number
}

export const CartPage = (props: CartPageProps) => {

    let currencySymbol = "$"

    if (props.myCart.length > 0) currencySymbol = props.myCart[0].product.prices[props.currentCurrency].currency.symbol

    return (
        <>
            <CartShowCase 
              currencySymbol={currencySymbol}
              myCart={props.myCart}
              setMyCart={props.setMyCart}
              currentCurrency={props.currentCurrency}
              isCartModalOpen={props.isCartModalOpen}
              setIsCartModalOpen={props.setIsCartModalOpen}
              />
        </>
    )
}