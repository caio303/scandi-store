import { GlobalStyle } from './GlobalStyles';
import { Route, Routes,Navigate } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';
import { Error404 } from './pages/Error404';
import { useState,useEffect } from 'react';
import { InCartProductType } from './types';

export function App() {

    const [currentCurrency,setCurrentCurrency] = useState(0)

    const [cart,setCart] = useState<InCartProductType[]|[]>([])

    const [isCartModalOpen,setIsCartModalOpen] = useState(false)

    const [totalAmount,setTotalAmount] = useState(0)

    useEffect(()=>{
      if(localStorage.myCart !== null) {
        let localCart = JSON.parse(localStorage.myCart)
        setCart([...localCart])
      }else {
        localStorage.myCart = JSON.stringify(cart)
      }
    },[])

    useEffect(()=>{      
      if(cart !== []) localStorage.myCart = JSON.stringify(cart)
      
      let total = 0

      cart.forEach((item,index) => {
        total += item.product.prices[currentCurrency].amount * item.quantity
      })

      setTotalAmount(total)
    
    },[cart])

    return (
      <>
        <Routes>
            <Route path="/products/:slug" element={<CategoryPage 
                                                    currentCurrency={currentCurrency}
                                                    handleCurrencyChange={setCurrentCurrency}
                                                    myCart={cart}
                                                    setMyCart={setCart}
                                                    cartTotalAmount={totalAmount}
                                                    isCartModalOpen={isCartModalOpen}
                                                    setIsCartModalOpen={setIsCartModalOpen}
                                                    />}/>
            <Route path="/products" element={<Navigate to="/products/all"/>} />
            <Route path="/" element={<Navigate to="/products/all"/>} />
            <Route path="/product/:id"/>
            <Route path="/cart"/>
            <Route path="*" element={<Error404 />}/>
        </Routes>
        <GlobalStyle />
      </>
    );
}