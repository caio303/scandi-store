import { Dispatch,SetStateAction } from "react"
import { ProductType } from "../../types"
import { useState } from "react"
import { Container } from "./styles"

type CategoryItemProps = {
    imageSrc: string,
    productName: string,
    productId: string,
    productInStock: boolean,
    currencySymbol: string,
    currencyAmount: number,
    myCart: ProductType[] | [],
    setMyCart: Dispatch<SetStateAction<ProductType[]|[]>>,
    currentProduct: ProductType
}

export const CategoryShowCaseItem = (props:CategoryItemProps) => {
    
    const [cartIcon,setCartIcon] = useState(false)
    
    const handleAddProduct = (item: ProductType) => {
        if(item.inStock)
        props.setMyCart([...props.myCart,item])
    }

    return (
        <Container 
            onMouseEnter={()=>setCartIcon(true)}
            onMouseLeave={()=>setCartIcon(false)}
            >
            <div className="image-wrapper">
                <img src={props.imageSrc} alt={`${props.productId}'s Image`}/>
                {!props.productInStock && 
                    <div className="stock">OUT OF STOCK</div>
                }
            </div>
            {cartIcon && 
                    <div 
                        className="cart-icon"
                        onClick={()=>handleAddProduct(props.currentProduct)}
                    >
                        <img src="../cart-white.svg"/>
                    </div>
                }
            <div>
                <h2>{props.productName}</h2>
                <h3>{props.currencySymbol} {props.currencyAmount}</h3>
            </div>
        </Container>
    )
}