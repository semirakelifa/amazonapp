import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider";
import{ useNavigate} from "react-router-dom"

function Subtotal() {
     const [{ basket, user }, dispatch] = useStateValue();
     const navigate= useNavigate();
const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
   const checklogin = (e) => {
     e.preventDefault();
     if (!user) {
       navigate("/login");
     } else if (!basket.length) {
       navigate("/");
     } else {
       navigate("/payment");
     }
   };


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={checklogin}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal