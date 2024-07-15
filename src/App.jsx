
import './App.css'
import Navbar from './Components/NavBar/Navbar.jsx'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from './Pages/Shop.jsx';
import Product from './Pages/Product.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx'
import Footer from './Components/Footer/Footer.jsx';
import men_banner from "./Components/assets/banner_mens.png";
import women_banner from "./Components/assets/banner_women.png";
import kids_banner from "./Components/assets/banner_kids.png";

// The Router acts as a switch, i.e., it defines the path ex:"/men" to go to ShopCategory
// So whenever a <Link to="/men" /> is clicked, it directs to ShopCategory
// Here we are defining all the routes in the app.jsx. These can be used by <Link to={} />

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
