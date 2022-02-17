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
    cartTotalAmount: number
}

export const Header = (props:HeaderProps) => {

    const [allCategories,setAllCategories] = useState<AllCategoriesNames|[]>([])

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

    const [isCurrModalOpen,setIsCurrModalOpen] = useState(false)

    const toggleModal = (isOpen:boolean,setIsOpen:Dispatch<SetStateAction<boolean>>) => {
        if(!isOpen && props.isCartModalOpen) props.setIsCartModalOpen(false)
        if(!isOpen && isCurrModalOpen) setIsCurrModalOpen(false)
        setIsOpen(!isOpen)
    }

    const allCurrencies = allCategories[props.currentCategory]?.products[0].prices

    const symbol = allCurrencies[props.currentCurrency].currency.symbol

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
                        onClick={()=>toggleModal(isCurrModalOpen,setIsCurrModalOpen)}
                    >
                        {symbol}<i className={`fas fa-angle-down ${isCurrModalOpen? "spin":''}`}></i>
                        {isCurrModalOpen &&
                            <CurrencyModal 
                                allCurrencies={allCurrencies}
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