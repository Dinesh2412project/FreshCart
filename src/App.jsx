
import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Home from './pages/home/Home.jsx';
import Shop from './pages/shop/Shop.jsx';
import Store from './pages/stores/Store.jsx';
import Page from './pages/page/Page.jsx';
import MegaMenu from './pages/megaMenu/MegaMenu.jsx';
import Account from './pages/account/Account.jsx'
import Navbar from '../src/Components/navbar/Navbar.jsx';
import Hero from '../src/Components/hero/Hero.jsx';


function App() {
  

  return (
    <> 
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/Shop" element ={<Shop/>} />
      <Route path="/Store" element ={<Store/>} />
      <Route path="/Page" element ={<Page/>} />
      <Route path="/megaMenu" element ={<megaMenu/>} />
      <Route path="/Account" element ={<Account/>} />
      
          </Routes>
    </BrowserRouter>
      {/*
      <Hero/>
      <Head/>
      <Categories/>
      <Products/>
      <Sells/>
      <Fotter/>...*/}

    </>
  )
}

export default App
