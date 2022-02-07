import { useState,useEffect,Dispatch,SetStateAction } from "react"
import { CurrencyType,InCartProductType } from "../../types"
import { CartModal } from "../CartModal"
import { CurrencyModal } from "../CurrencyModal"
import { Container } from "./styles"

type HeaderProps = {
    allCurrencies: CurrencyType[] | undefined,
    currentCategory: string,
    currentCurrency: number,
    handleCurrencyChange: Dispatch<SetStateAction<number>>,
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[] | []>>,
    isCartModalOpen: boolean,
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
    cartTotalAmount: number
}

export const Header = (props:HeaderProps) => {

    const [all,setAll] = useState('')
    const [tech,setTech] = useState('')
    const [clothes,setClothes] = useState('')

    useEffect(()=>{
        switch (props.currentCategory) {
            case "all":
                setAll("active")
                break;
            case "tech":
                setTech("active")
                break;
            case "clothes":
                setClothes("active")
                break;
        }
    },[])

    const [isCurrModalOpen,setIsCurrModalOpen] = useState(false)

    const toggleModal = (isOpen:boolean,setIsOpen:Dispatch<SetStateAction<boolean>>) => {
        if(!isOpen && props.isCartModalOpen) props.setIsCartModalOpen(false)
        if(!isOpen && isCurrModalOpen) setIsCurrModalOpen(false)
        setIsOpen(!isOpen)
    }

    const symbol = props.allCurrencies? props.allCurrencies[props.currentCurrency].symbol : "$"

    return (
            <Container>
                <nav>        
                    <div className={all}><a href="/products/all">ALL</a></div>
                    <div className={tech}><a href="/products/tech">TECH</a></div>
                    <div className={clothes}><a href="/products/clothes">CLOTHES</a></div>
                </nav>
                <nav id="currency-cart">
                    <div 
                        onClick={()=>toggleModal(isCurrModalOpen,setIsCurrModalOpen)}
                    >
                        {symbol}<i className={`fas fa-angle-down ${isCurrModalOpen? "spin":''}`}></i>
                        {isCurrModalOpen &&
                            <CurrencyModal 
                                allCurrencies={props.allCurrencies}
                                handleCurrentCurrencyChange={props.handleCurrencyChange}
                                />
                        }
                    </div>
                    <div>
                        <img 
                            src="/cart-black.svg" 
                            width={24} 
                            alt="Your Cart"
                            onClick={()=>toggleModal(props.isCartModalOpen,props.setIsCartModalOpen)}
                            />
                        <div id="counter" className={props.myCart.length > 0? "visible":""}>{props.myCart.length}</div>
                        {props.isCartModalOpen &&
                            <CartModal 
                                myCart={props.myCart}
                                setMyCart={props.setMyCart}
                                currentCurrencySymbol={symbol}
                                cartTotalAmount={props.cartTotalAmount}
                                />
                        }
                    </div>
                </nav>
            </Container>
    )
}