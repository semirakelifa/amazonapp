import React from 'react'
import "./Home.css";
import Products from './Products';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg"
          alt=""
        />
        <div className="home__row">
          <Products
            id="12321341"
            title="GLAMOUR BOUTIQUE 16-Piece Forever Flowers Heart Shape Box - Preserved Roses, Immortal Roses That Last A Year - Eternal Rose Preserved Flowers for Delivery Prime Mothers Day & Valentines Day - Red"
            price={64.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81+4KJxRDjL._AC_SY450_.jpg"
          />

          <Products
            id="24256978"
            title="HOLZKERN Chicago Men’s Watch 42mm Real Gray Marble Dial Brushed Stainless Steel & Walnut Wood Wristband Strap Unique Japanese Automatic Wooden Watch for Men with Sapphire Crystal Glass"
            price={449.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81thtYa5iZL._AC_UX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Products
            id="3254354345"
            title="Amazon Echo (3rd generation)| Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Products
            id="90829332"
            title="New Apple ipad Prp(12.9-inch, Wi-Fi, 128GB) -silver(4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="90829332"
            title=" Samsung LC49RG90SSUXEN 49'Curved LED Gaming Monitor -Super Ultra Wide Dula WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Products
            id="49538094"
            title="Kenwood 0W20011139 kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81rgIlDm6wL._AC_SY355_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="46897"
            title="SAMSUNG Galaxy Tab S8 11” 128GB WiFi 6E Android Tablet, Large LCD Screen, S Pen Included, Ultra Wide Camera, Long Lasting Battery, US Version, 2022, Pink Gold"
            price={599.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/818zWwTXYsL._AC_SX425_.jpg"
          />
          <Products
            id="202034568"
            title="HP Pavilion x360 2 in 1 Laptop, 14 Full HD Touchscreen, Intel Core i5-1235U(Beat i7-1165G7), 8GB RAM - 512GB PCIe SSD, Stylus, Backlit Keyboard, Fingerprint, WiFi 6, Alexa, Windows 11 Home, Silver"
            price={654.99}
            rating={4}
            image="	https://m.media-amazon.com/images/I/61Vt5Pq9XML._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="3850"
            title="SOLE Fitness F63, F65, F80, TT8, S77 Pro Treadmill with Incline, Foldable Treadmill Option, Treadmills for Home Workout Machine, Work from Home Fitness, Running and Walking Treadmill, Cardio Machine"
            price={999.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71d0LnXee5L._AC_UY218_.jpg"
          />
          <Products
            id="74501"
            title="Gifts for Men Dad, Kollea 17.6 Oz Whiskey Decanter Set with 3 Oz Detachable Liquor Dispenser 6.75 Oz Glasses, Unique Mens Birthday Gift Ideas from Daughter, Funny Military Retirement Present"
            price={85.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/817KrVWEBkL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg
