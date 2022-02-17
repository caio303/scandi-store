import { useState,useEffect,Dispatch,SetStateAction } from "react"
import { AllCategoriesNames,InCartProductType } from "../../types"
import { CategoriesAndCurrenciesQuery } from "../../gqlQueries"
import { consumeApi } from "../../utils/consumeApi"
import { CartModal } from "../CartModal"
import { CurrencyModal } from "../CurrencyModal"
import { Container } from "./styles"
import { Link } from "react-router-dom"

type HeaderProps = {
    currentCategory: number,
    setCurrentCategory: Dispatch<SetStateAction<number>>
    currentCurrency: number,
    handleCurrencyChange: Dispatch<SetStateAction<number>>,
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[] | []>>,
    isCartModalOpen: boolean,
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
    isCurrModalOpen: boolean,
    setIsCurrModalOpen: Dispatch<SetStateAction<boolean>>
    cartTotalAmount: number
}

export const Header = (props:HeaderProps) => {

    const [allCategories,setAllCategories] = useState<AllCategoriesNames|[]>([])

    const [currentSymbol,setCurrentSymbol] = useState("$")

    useEffect(() => {
        try {
            consumeApi(CategoriesAndCurrenciesQuery)
                .then(
                    (data) => setAllCategories(data.data.categories)
                )
        }catch(e) {
            console.error(e)
        }
    },[])

    const toggleModal = (isOpen:boolean,setIsOpen:Dispatch<SetStateAction<boolean>>) => {
        if(!isOpen && props.isCartModalOpen) props.setIsCartModalOpen(false)
        if(!isOpen && props.isCurrModalOpen) props.setIsCurrModalOpen(false)
        setIsOpen(!isOpen)
    }

    const allCurrencies = allCategories[props.currentCategory]?.products[0].prices

    return (
            <Container>
                <nav>
                    {allCategories && allCategories.map((item,index)=> {
                        return <div 
                                className={props.currentCategory === index? "active" : ""}
                                key={index}>
                            <Link
                                    onClick={()=>props.setCurrentCategory(index)}
                                    to={`/products/${item.name}`}>
                                {item.name.toUpperCase()}
                            </Link>
                        </div>
                    })}
                </nav>
                <nav id="currency-cart">
                    <div 
                        onClick={()=>toggleModal(props.isCurrModalOpen,props.setIsCurrModalOpen)}
                    >
                        {currentSymbol}
                        <i className={`fas fa-angle-down ${props.isCurrModalOpen? "spin":''}`}></i>
                        {props.isCurrModalOpen &&
                            <CurrencyModal 
                                allCurrencies={allCurrencies}
                                handleCurrentCurrencyChange={props.handleCurrencyChange}
                                setCurrentSymbol={setCurrentSymbol}
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
                                currentCurrency={props.currentCurrency}
                                cartTotalAmount={props.cartTotalAmount}
                                setIsCartModalOpen={props.setIsCartModalOpen}
                                />
                        }
                    </div>
                </nav>
            </Container>
    )
}