import { GlobalStyle } from './GlobalStyles';
import { Route, Routes,Navigate } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';
import { Error404 } from './pages/Error404';
import { useState } from 'react';
import { CurrentCurrencyType } from './types';

export function App() {

    const [currentCurrency,setCurrentCurrency] = useState<CurrentCurrencyType>(0)

    return (
      <>
        <Routes>
            <Route path="/product/:id"/>
            <Route path="/cart"/>
            <Route path="/" element={<Navigate to="/products/all"/>} />
            <Route path="/products" element={<Navigate to="/products/all"/>} />
            <Route path="/products/:slug" element={<CategoryPage/>}/>
            <Route path="*" element={<Error404 />}/>
        </Routes>
        <GlobalStyle />
      </>
    );
}