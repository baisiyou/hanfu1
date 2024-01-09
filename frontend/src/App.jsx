import "./App.css";
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./components/Footer";
import About from "./Pages/About";
import CheckoutPage from "./Pages/CheckoutPage";
import Products from "./Pages/Products";
import SingleProductPage from "./Pages/SingleProductPage";
import PageLoader from "./components/PageLoader";
import CartPage from "./Pages/CartPage";
import ReqireAuth from "./components/ReqireAuth";
import styled from 'styled-components';
import BackgroundImage from "./assets/backgroundImage.png"
function App() {
  return (
    <BrowserRouter>
      <BackgroundContainer> 
      <Navbar />
      <Routes>
        <Route
          index
          path="/"
          element={<Home />}
          loader={<PageLoader />}
        />
        <Route 
          path="about"
          element={<About />}
          loader={<PageLoader />}
        />
        <Route 
          path="products"
          element={<Products />}
          loader={<PageLoader />}
        />
        <Route 
        path="/products/:id"
          element={<SingleProductPage />}
          loader={<PageLoader />}
        />
        
        <Route element={<ReqireAuth />}>
        <Route
          path="/checkout"
          element={<CheckoutPage />}
          loader={<PageLoader />}
          />
          </Route>
        <Route
          path="cart"
          element={<CartPage />}
          loader={<PageLoader />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
      <Footer />
      </BackgroundContainer>  
    </BrowserRouter>
  );
}

const BackgroundContainer = styled.div`
  background-image: url(${BackgroundImage});
  width: 100%;
  height: 100%;
  background-size: fit;
  background-position: center;
  
  min-height: 100vh;
`;
//background-repeat: no-repeat;
export default App;
