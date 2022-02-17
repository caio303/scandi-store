import { Container } from "./styles"
import React, { Dispatch,SetStateAction } from "react"
import { InCartProductType } from '../../types/index'
import { Link } from "react-router-dom"


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

export class CartItem extends React.Component<CartItemProps> {

    handleReduceQuantity = (cartItem: InCartProductType) => {
        
        const index = this.props.myCart.findIndex((item) => item === cartItem)
        
        if(cartItem.quantity -1 === 0){
            
            this.props.myCart.splice(index,1)
            
            const newCart = this.props.myCart.map(item => item)
            
            this.props.setMyCart(newCart)
            
            return
        }

        this.props.myCart[index].quantity -= 1

        const newCart = this.props.myCart.map(item => item)

        this.props.setMyCart(newCart)

        return
    }

    handleIncreaseQuantity = (cartItem: InCartProductType) => {
        
        const index = this.props.myCart.findIndex((item) => item === cartItem)
        
        this.props.myCart[index].quantity += 1

        const newCart = this.props.myCart.map(item => item)

        this.props.setMyCart(newCart)

        return
    }

    handleChangeAttributeOption = (attrIndex: number,optionIndex: number, cartItem: InCartProductType) => {
        
        const index = this.props.myCart.findIndex((item) => item === cartItem)

        this.props.myCart[index].selectedAttributes[attrIndex] = optionIndex
        
        const newCart = this.props.myCart.map(item => item)

        this.props.setMyCart(newCart)

    }

    render() {
        return (
            <Container className={this.props.liSize === "lg"?"lg":""}>
                <div className="pLeft">
                    <div className="pName">{this.props.itemName}</div>
                    <div className="pAmount">{this.props.currencySymbol} 
                            {this.props.liSize === "lg"? 
                                (this.props.currencyAmount * this.props.currentItem.quantity).toFixed(2)
                                :
                                (this.props.currencyAmount.toFixed(2))
                            }</div>
                    <div className="pAttr">
                        {this.props.liSize === "lg" &&
                            <div className="attr-name">
                                {this.props.currentItem.product.attributes[0].name}
                            </div>
                        }
                        {this.props.currentItem.product.attributes.length > 0 &&
                            this.props.currentItem.product.attributes[0].items.map((item,index,arr) =>  {

                                let isSelected = ""
    
                                if(arr.indexOf(item) === this.props.currentItem.selectedAttributes[0]) {
                                    isSelected = "selected"
                                }
                            
                                return <span 
                                            className={isSelected} 
                                            key={index}
                                            onClick={()=>this.handleChangeAttributeOption(0,index,this.props.currentItem)}
                                            >
                                        
                                                {item.value}
                                        </span>
                            })
                        }
                    </div>
                </div>
                <div className="pRight">
                    <div className="pQuantity">

                        <span onClick={()=>this.handleIncreaseQuantity(this.props.currentItem)}>+</span>

                        {this.props.itemQuantity}

                        <span onClick={()=>this.handleReduceQuantity(this.props.currentItem)}>-</span>

                    </div>
                    <div className="pImg">
                        <Link to={`/product/${this.props.currentItem.product.id}`}>

                            <img alt={this.props.itemName} src={this.props.itemImage} height="100"/>
                        
                        </Link>
                    </div>
                </div>
            </Container>
        )
    }
}