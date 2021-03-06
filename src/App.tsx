import { GlobalStyle } from './GlobalStyles';
import { Route, Routes,Navigate } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';
import { Error404 } from './pages/Error404';
import { useState,useEffect } from 'react';
import { InCartProductType } from './types';
import { CartPage } from './pages/CartPage';
import { ProductDescriptionPage } from './pages/ProductDescriptionPage';
import { Header } from './components/Header';

export function App() {

    const [currentCurrency,setCurrentCurrency] = useState(0)

    const [cart,setCart] = useState<InCartProductType[]|[]>([])

    const [isCartModalOpen,setIsCartModalOpen] = useState(false)

    const [totalAmount,setTotalAmount] = useState(0)

    const [currentCategory, setCurrentCategory] = useState(0)

    const [isCurrModalOpen,setIsCurrModalOpen] = useState(false)

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

      cart.forEach((item) => {
        total += item.product.prices[currentCurrency].amount * item.quantity
      })

      setTotalAmount(total)
    
    },[cart,currentCurrency])

    return (
      <>
        <Header
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            currentCurrency={currentCurrency}
            cartTotalAmount={totalAmount}
            handleCurrencyChange={setCurrentCurrency}
            myCart={cart}
            setMyCart={setCart}
            setIsCartModalOpen={setIsCartModalOpen}
            isCartModalOpen={isCartModalOpen}
            isCurrModalOpen={isCurrModalOpen}
            setIsCurrModalOpen={setIsCurrModalOpen}
          />
        <Routes>
            <Route path="/products/:slug" element={<CategoryPage 
                                                    currentCurrency={currentCurrency}
                                                    handleCurrencyChange={setCurrentCurrency}
                                                    myCart={cart}
                                                    setMyCart={setCart}
                                                    cartTotalAmount={totalAmount}
                                                    isCartModalOpen={isCartModalOpen}
                                                    setIsCartModalOpen={setIsCartModalOpen}
                                                    setIsCurrModalOpen={setIsCurrModalOpen}
                                                    />}/>
            <Route path="/products" element={<Navigate to="/products/all"/>} />
            <Route path="/" element={<Navigate to="/products/all"/>} />
            <Route path="/product/:id" element={<ProductDescriptionPage 
                                                  cartTotalAmount={totalAmount}
                                                  currentCurrency={currentCurrency}
                                                  handleCurrencyChange={setCurrentCurrency}
                                                  isCartModalOpen={isCartModalOpen}
                                                  setIsCartModalOpen={setIsCartModalOpen}
                                                  myCart={cart}
                                                  setMyCart={setCart}
                                                  setIsCurrModalOpen={setIsCurrModalOpen}
                                                  />}/>
            <Route path="/cart" element={<CartPage 
                                          currentCurrency={currentCurrency}
                                          handleCurrencyChange={setCurrentCurrency}
                                          myCart={cart}
                                          setMyCart={setCart}
                                          cartTotalAmount={totalAmount}
                                          isCartModalOpen={isCartModalOpen}
                                          setIsCartModalOpen={setIsCartModalOpen}
                                          setIsCurrModalOpen={setIsCurrModalOpen}
                                          />}/>
            <Route path="*" element={<Error404 />} />
        </Routes>
        <GlobalStyle />
      </>
    );
}