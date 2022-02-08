import { Container } from "./styles"
import { Dispatch,SetStateAction } from "react"
import { InCartProductType,ProductType } from '../../types/index'


type CartItemProps = {
    liSize: 'lg' | 'sm',
    itemName: string,
    itemQuantity: number,
    itemAmount: number,
    itemImage: string,
    currencySymbol: string,
    currencyAmount: number,
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
    currentItem: InCartProductType
}

export const CartItem = (props: CartItemProps) => {

    const handleRemoveProduct = (cartItem: InCartProductType) => {
        
        console.log(props.myCart.find((item) => item === cartItem))
    
        // localStorage.myCart = JSON.stringify(props.myCart)
    }

    return (
        <Container>
            <div className="pLeft">
                <div className="pName">{props.itemName}</div>
                <div className="pAmount">{props.currencySymbol} {props.currencyAmount}</div>
                <div className="pAttr"><span className="selected">S</span><span>M</span></div>
            </div>
            <div className="pRight">
                <div className="pQuantity">
                    <span>+</span>
                    {props.itemQuantity}
                    <span onClick={()=>handleRemoveProduct(props.currentItem)}>-</span>
                </div>
                <div className="pImg"><img alt={props.itemName} src={props.itemImage} height="100"/></div>
            </div>
        </Container>
    )
}