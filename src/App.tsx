import { GlobalStyle } from './GlobalStyles';
import { Route, Routes,Navigate } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';
import { Error404 } from './pages/Error404';

export function App() {

    return (
      <>
        <Routes>
            <Route path="/product"/>
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