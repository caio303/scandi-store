import { Dispatch,SetStateAction } from "react"
import { InCartProductType, ProductType } from "../../types"
import { useState } from "react"
import { Container } from "./styles"
import { useNavigate } from "react-router"
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

export const CategoryShowCaseItem = (props:CategoryItemProps) => {
    
    const [cartIcon,setCartIcon] = useState(false)
    
    // Verify if the product alredy exists in the Cart
    // If so, it changes the quantity only
    // If not, it adds the product
    const handleAddProduct = (item: ProductType) => {
        if(!item.inStock) return
        
        if(props.myCart.length === 0) {
            props.setMyCart([...props.myCart,{product:item,quantity:1}])
            return
        }

        const inCart = props.myCart.some((item2,index) => {
            return item2.product.id === item.id
        })

        if(inCart) {
            props.myCart.forEach((item3,index) => {
                if(item3.product.id === item.id) {
                    item3.quantity += 1 
                }
            })
            
            props.setMyCart([...props.myCart])

            localStorage.myCart = JSON.stringify(props.myCart)
            
            return
        }

        props.setMyCart([...props.myCart,{product:item,quantity:1}])
        
        localStorage.myCart = JSON.stringify(props.myCart)
    }

    return (
        <Container 
            onMouseEnter={()=>setCartIcon(true)}
            onMouseLeave={()=>setCartIcon(false)}
            >
            <Link to={`/product/${props.productId}`} className="image-wrapper">
                <img src={props.imageSrc} 
                    alt={`${props.productId}`}
                    />
                
                {!props.productInStock && 
                    <div className="stock">OUT OF STOCK</div>
                }
            </Link>
            {cartIcon && 
                    <div 
                        className="cart-icon"
                        onClick={()=>handleAddProduct(props.currentProduct)}
                    >
                        <img src="../cart-white.svg" alt="Cart"/>
                    </div>
                }
            <Link to={`/product/${props.productId}`}>
                <h2>{props.productName}</h2>
                <h3>{props.currencySymbol} {props.currencyAmount}</h3>
            </Link>
        </Container>
    )
}