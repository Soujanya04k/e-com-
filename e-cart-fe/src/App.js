
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import { LoginPage } from './Pages/LoginPage';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
      <Route path='/Home' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
     
    </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
