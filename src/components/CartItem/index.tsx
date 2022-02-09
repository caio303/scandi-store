import { Container } from "./styles"
import { Dispatch,SetStateAction } from "react"
import { InCartProductType } from '../../types/index'


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

    const handleReduceQuantity = (cartItem: InCartProductType) => {
        
        const index = props.myCart.findIndex((item) => item === cartItem)
        
        if(cartItem.quantity -1 === 0){
            
            props.myCart.splice(index,1)
            
            const newCart = props.myCart.map(item => item)
            
            props.setMyCart(newCart)
            
            return
        }

        props.myCart[index].quantity -= 1

        const newCart = props.myCart.map(item => item)

        props.setMyCart(newCart)

        return
    }

    const handleIncreaseQuantity = (cartItem: InCartProductType) => {
        
        const index = props.myCart.findIndex((item) => item === cartItem)
        
        props.myCart[index].quantity += 1

        const newCart = props.myCart.map(item => item)

        props.setMyCart(newCart)

        return
    }

    const handleShowAttr = (cartItem: InCartProductType) => {
        console.log(cartItem.product.attributes)
    }

    return (
        <Container className={props.liSize === "lg"?"lg":""}>
            <div className="pLeft">
                <div className="pName">{props.itemName}</div>
                <div className="pAmount">{props.currencySymbol} {(props.currencyAmount * props.currentItem.quantity).toFixed(2)}</div>
                <div className="pAttr">
                    {props.currentItem.product.attributes.length > 0 &&
                        props.currentItem.product.attributes[0].items.map((item,index,arr) =>  {
                            
                            let isSelected = ""

                            if(arr.indexOf(item) === 0) isSelected = "selected"
                        
                            return <span className={isSelected} key={index}>{item.value}</span>
                    })
                    }
                    {}
                </div>
            </div>
            <div className="pRight">
                <div className="pQuantity">
                    <span onClick={()=>handleIncreaseQuantity(props.currentItem)}>+</span>
                    {props.itemQuantity}
                    <span onClick={()=>handleReduceQuantity(props.currentItem)}>-</span>
                </div>
                <div className="pImg"><img onClick={()=>handleShowAttr(props.currentItem)} alt={props.itemName} src={props.itemImage} height="100"/></div>
            </div>
        </Container>
    )
}