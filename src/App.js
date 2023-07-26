import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import { Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';

 const promise=loadStripe('pk_test_51NIzC0EF8HqAkUiVZungbtmQFsZoBsnl3JGRl7L5ksTZtGZE5T6Cg6yP3UyTOVJnPa9xv0HAPDBhlVDUzKPZ7jxu00WtSCLvJV' 
 );


function App() {
    const [{ user }, dispatch] = useStateValue();
 useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          //the user is logged in.....

          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          //the user is logged out....
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
 }, []);
      
   
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={ <>
                <Header /><Orders /></>} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
