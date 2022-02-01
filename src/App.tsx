import { GlobalStyle } from './GlobalStyles';
import { Route, Routes,Navigate,useParams } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';

export function App() {

    return (
      <>
        <Routes>
            <Route path="/cart"/>
            <Route path="/" element={<Navigate to="/all"/>} />
            <Route path="/:slug" element={<CategoryPage/>}/>
            <Route path="*" element={<Navigate to="/all"/>}/>
        </Routes>
        <GlobalStyle />
      </>
    );
}