import { GlobalStyle } from './GlobalStyles';
import { Route, Routes,Navigate } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';
import { Error404 } from './pages/Error404';
import { useEffect, useState } from 'react';
import { ProductType } from './types';

export function App() {

    const [currentCurrency,setCurrentCurrency] = useState(0)

    const [cart,setCart] = useState<ProductType[]|[]>([])

    useEffect(()=>{
      if(localStorage.myCart != null) {
        let localCart = JSON.parse(localStorage.myCart)
        setCart([...localCart])
      }
    },[])

    useEffect(()=>{
      if(cart != []){
        localStorage.myCart = JSON.stringify(cart)
      }
    },[cart])

    return (
      <>
        <Routes>
            <Route path="/products/:slug" element={<CategoryPage 
                                                    currentCurrency={currentCurrency}
                                                    handleCurrencyChange={setCurrentCurrency}
                                                    myCart={cart}
                                                    setMyCart={setCart}
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