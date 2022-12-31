import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2WYg9xfiOOFpZrWrAkOqgAlHl2WNo8NQ",
  authDomain: "asi3-e8e07.firebaseapp.com",
  projectId: "asi3-e8e07",
  storageBucket: "asi3-e8e07.appspot.com",
  messagingSenderId: "468421121207",
  appId: "1:468421121207:web:af97647a0cf6fa59ede932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div id="app-root" className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shoppage" element={<ShopPage />} />
        <Route path="/detail/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/cart/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
