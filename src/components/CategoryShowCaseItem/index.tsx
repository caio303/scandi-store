import { useState } from "react"
import { Container } from "./styles"

type CategoryItemProps = {
    imageSrc: string,
    productName: string,
    currencySymbol: string,
    currencyAmount: number
}

export const CategoryShowCaseItem = (props:CategoryItemProps) => {
    
    const [cartIcon,setCartIcon] = useState(false)
    
    return (
        <Container 
            onMouseEnter={()=>setCartIcon(true)}
            onMouseLeave={()=>setCartIcon(false)}
            >
            <div className="image-wrapper">
                <img src={props.imageSrc}/>
                {cartIcon && 
                    <div id="cart-icon"><img src="../cart-white.svg"/></div>
                }
            </div>
            <div>
                <h2>{props.productName}</h2>
                <h3>{props.currencySymbol} {props.currencyAmount}</h3>
            </div>
        </Container>
    )
}