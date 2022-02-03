import { useState,useEffect,Dispatch,SetStateAction } from "react"
import { CurrencyType,ProductType } from "../../types"
import { CurrencyModal } from "../CurrencyModal"
import { Container } from "./styles"

type HeaderProps = {
    allCurrencies: CurrencyType[] | undefined,
    currentCategory: string,
    currentCurrency: number,
    handleCurrencyChange: Dispatch<SetStateAction<number>>,
    myCart: ProductType[] | [],
    setMyCart: Dispatch<SetStateAction<ProductType[] | []>>
}

export const Header = (props:HeaderProps) => {

    var [all,setAll] = useState('')
    var [tech,setTech] = useState('')
    var [clothes,setClothes] = useState('')

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

    const toggleCurrencyModal = () => {
        setIsCurrModalOpen(!isCurrModalOpen)
    }

    const symbol = props.allCurrencies? props.allCurrencies[props.currentCurrency].symbol : "$"

    return (
        <>
            <Container>
                <nav>        
                    <div className={all}><a href="/products/all">ALL</a></div>
                    <div className={tech}><a href="/products/tech">TECH</a></div>
                    <div className={clothes}><a href="/products/clothes">CLOTHES</a></div>
                </nav>
                <nav id="currency-cart">
                    <div 
                        onClick={toggleCurrencyModal}
                    >
                        {symbol}<i className={`fas fa-angle-down ${isCurrModalOpen? "spin":''}`}></i>
                        {isCurrModalOpen &&
                            <CurrencyModal 
                                allCurrencies={props.allCurrencies}
                                handleCurrentCurrencyChange={props.handleCurrencyChange}
                                />
                        }
                    </div>
                    <div onClick={()=>props.setMyCart([])}>
                        <img src="/cart-black.svg" width={24} alt="Your Cart"/>
                        <div id="counter" className={props.myCart.length > 0? "visible":""}>{props.myCart.length}</div>
                    </div>
                </nav>
            </Container>
        </>
    )
}