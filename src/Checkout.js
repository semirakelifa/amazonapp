import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  // Destructure the basket from the state
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <h3>Hello</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>

        {/* Map through items in the basket */}
        {basket.map((item) => (
          // Add error handling for cases where item is not properly formed
          item.id ? (
            <CheckoutProduct
              key={item.id} // Add a unique key prop for each CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ) : (
            <div key={Math.random()}>Invalid item data</div> // Handle invalid item data
          )
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
