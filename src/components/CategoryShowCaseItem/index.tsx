import React, { Dispatch,SetStateAction } from "react"
import { InCartProductType, ProductType } from "../../types"
import { Container } from "./styles"
import { Link } from "react-router-dom"

type CategoryItemProps = {
    imageSrc: string,
    productName: string,
    productId: string,
    productInStock: boolean,
    currencySymbol: string,
    currencyAmount: number,
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
    currentProduct: ProductType
}

export class CategoryShowCaseItem extends React.Component<CategoryItemProps> {
    
    state = {
        cartIcon: false
    }

    // Verify if the product alredy exists in the Cart
    // If so, it changes the quantity only
    // If not, it adds the product
    handleAddProduct = (item: ProductType) => {
        if(!item.inStock) return
        
        const selectedAttrByDefault = item.attributes.map(() => {
            return 0
        }) 

        if(this.props.myCart.length === 0) {
            this.props.setMyCart([...this.props.myCart,{product:item,quantity:1,selectedAttributes:selectedAttrByDefault}])
            return
        }

        const inCart = this.props.myCart.some((item2,index) => {
            return item2.product.id === item.id
        })

        if(inCart) {
            this.props.myCart.forEach((item3,index) => {
                if(item3.product.id === item.id) {
                    item3.quantity += 1 
                }
            })
            
            this.props.setMyCart([...this.props.myCart])

            localStorage.myCart = JSON.stringify(this.props.myCart)
            
            return
        }

        this.props.setMyCart([...this.props.myCart,{product:item,quantity:1,selectedAttributes: selectedAttrByDefault}])
        
        localStorage.myCart = JSON.stringify(this.props.myCart)
    }

    render() {
        return (
            <Container 
                onMouseEnter={()=>this.setState({cartIcon:true})}
                onMouseLeave={()=>this.setState({cartIcon:false})}
                >
                <Link to={`/product/${this.props.productId}`} className="image-wrapper">
                    <img src={this.props.imageSrc} 
                        alt={`${this.props.productId}`}
                        />
                    
                    {!this.props.productInStock && 
                        <div className="stock">OUT OF STOCK</div>
                    }
                </Link>
                {this.state.cartIcon && 
                        <div 
                            className="cart-icon"
                            onClick={()=>this.handleAddProduct(this.props.currentProduct)}
                        >
                            <img src="../cart-white.svg" alt="Cart"/>
                        </div>
                    }
                <Link to={`/product/${this.props.productId}`}>
                    <h2>{this.props.productName}</h2>
                    <h3>{this.props.currencySymbol} {this.props.currencyAmount}</h3>
                </Link>
            </Container>
        )
    }
}