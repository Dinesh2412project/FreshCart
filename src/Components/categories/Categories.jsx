import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './categories.css';
import icons from '../../assets/Datas.js';
import CategoriesCard from './CategoriesCard.jsx';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Categories = () => {
  return (

<div className='category-section'>
      <Carousel responsive={responsive}>
        {icons.map((icon, index) => (
          <CategoriesCard key={index} image={icon.image} label={icon.label} />
        ))}
      </Carousel>

      
    </div>


 )



    {/*<div className='category-section'>
   <Carousel responsive={responsive}>
  <div className='category-card'>
    <img src="https://www.kindpng.com/picc/m/326-3264655_transparent-lays-potato-chips-png-lays-indias-magic.png" alt="img" />
    <p>snack $ munchies</p>
  </div>

  <div className='category-card'>
    <img src="https://png.pngitem.com/pimgs/s/333-3334322_dark-fantasy-biscuit-cake-hd-png-download.png" alt="img" />
    <p>instant food</p>
  </div>

  <div className='category-card'>
    <img src="https://5.imimg.com/data5/ECOM/Default/2023/7/325113297/VS/LK/CH/192884303/1689261044000-sku-1457-0-500x500.png" alt="img" />
    <p>chicken,meat</p>
  </div>

  <div className='category-card'>
    <img src="https://5.imimg.com/data5/JG/HK/OV/SELLER-99340006/adult-diapers-xl.jpg" alt="img" />
    <p>baby care</p>
  </div>

  <div className='category-card'>
    <img src="https://incellagrotech.com/wp-content/uploads/2024/06/wayanadan-tea-powder.png" alt="img" />
    <p>tea,coffee,drinks</p>
  </div>
  <div className='category-card'>
    <img src="https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/1cee103c-5d25-4104-87ab-f6729f0786dd/Popular-Essentials-Moong-Dal-Un-Polished.jpeg" alt="img" />
    <p>ata ,rice ,dal</p>
  </div>
  <div className='category-card'>
    <img src="https://drools.com/wp-content/uploads/2024/12/image-348.png" alt="img" />
    <p>pet care</p>
  </div>

  <div className='category-card'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnQgCaeOtfA_YuDXuYvC-UUN-m4STDUkbfw&s" alt="img" />
    <p>cleaning care</p>
  </div>
  
  
</Carousel>
                                








        </div>....*/}


       
 
}

export default Categories