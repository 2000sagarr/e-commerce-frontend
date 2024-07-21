import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import Cart from "../customer/Components/Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import SearchProduct from "../customer/Components/Product/Product/SearchProduct";

const isAuthenticated = () => {
  const jwt = localStorage.getItem("jwt");
  return jwt !== null;
};

const ProtectedRoute = ({ element }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

const CustomerRoutes = () => {
  const location = useLocation();
  
  // Only show Navigation component when not on the NotFound page
  const showNavigation = location.pathname !== "*";

  return (
    <div>
      <ThemeProvider theme={customerTheme}>
        {showNavigation && <Navigation />}
        <Routes>
          <Route path="/login" element={<Homepage />} />
          <Route path="/register" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products/search" element={<SearchProduct />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TearmsCondition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<ProtectedRoute element={<Product />} />} />
          <Route path="/product/:productId" element={<ProtectedRoute element={<ProductDetails />} />} />
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="/account/order" element={<ProtectedRoute element={<Order />} />} />
          <Route path="/account/order/:orderId" element={<ProtectedRoute element={<OrderDetails />} />} />
          <Route path="/account/rate/:productId" element={<ProtectedRoute element={<RateProduct />} />} />
          <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
          <Route path="/payment/:orderId" element={<ProtectedRoute element={<PaymentSuccess />} />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default CustomerRoutes;
