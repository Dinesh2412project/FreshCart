import Hero from '../../Components/hero/Hero.jsx';
import Head from '../../Components/head/Head.jsx';
import Categories from '../../Components/categories/Categories.jsx';
import Products from '../../Components/products/Products.jsx';
import Sells from '../../Components/sells/Sells.jsx';
import Fotter from '../../Components/fotter/Fotter.jsx';
import Banner from '../../Components/PromoteBanner/Banner.jsx';
import Features from '../../Components/features/Features.jsx';

const Home = () => {
  return (
    <div>
       <Hero/>
        <Head/>
      <Categories/>
      <Banner/>
    <Products/>
      <Sells/>
      <Features/>
      <Fotter/>
    </div>
  )
}

export default Home