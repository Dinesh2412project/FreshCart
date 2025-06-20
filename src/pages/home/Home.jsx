import Head from "../../Components/head/Head.jsx";
import Categories from "../../Components/categories/Categories.jsx";
import Products from "../../Components/products/Products.jsx";
import Fotter from "../../Components/footer/Footer.jsx";
import Banner from "../../Components/PromoteBanner/Banner.jsx";
import Features from "../../Components/features/Features.jsx";
import Sells from "../../Components/sells/Sells.jsx";

const Home = () => {
  return (
    <div>
      <Head />
      <Categories />
      <Banner />
      <Products />
      <Sells/>
      <Features />
      <Fotter />
    </div>
  );
};

export default Home;
