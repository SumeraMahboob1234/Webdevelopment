import React from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCatagory from './pages/ShopCatagory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop' ;
const App = () =>{
  return(
    <div>
      <BrowserRouter>
      <MainPage/>
    <Routes>
      <Route path='/'element = { <Shop/>}/>
      <Route path='/'element={<ShopCatagory catagory ="Women"/>} />
      <Route path='/'element={<ShopCatagory catagory ="Men"/>} />
      <Route path='/'element={<ShopCatagory catagory ="Children"/>} />
      <Route path='/'element={<ShopCatagory catagory ="Beauty"/>} />
      <Route path="/product" element={<product/>}>
        <Route path=':productId' element={<product/>}/>
      </Route>
      <Route path='/cart'element = {<Cart/>}/>
      <Route path='/login'element={<LoginSignup/>}/>
    </Routes>
      </BrowserRouter>
     

    </div>
  )
}
export default App