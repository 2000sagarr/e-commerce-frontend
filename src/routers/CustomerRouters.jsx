import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import Home from "../customer/pages/Home";
import Footer from "../customer/components/footer/Footer.jsx";
import Navigation from "../customer/components/navigation/Navigation.jsx";
import Product from "../customer/components/product/Product.jsx";
import ProductDetails from "../customer/components/productDetails/ProductDetails.jsx";
import Cart from "../customer/components/cart/Cart.jsx";
import Checkout from "../customer/components/checkout/Checkout.jsx";
import Order from "../customer/components/order/Order.jsx";
import OrderDetails from "../customer/components/order/OrderDetails.jsx";

const CustomerRoutes = () => {
  const location = useLocation();

  // Only show Navigation component when not on the NotFound page
  const showNavigation = location.pathname !== "*";

  return (
    <div>
      {/* <ThemeProvider theme={customerTheme}> */}
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>

        {/* <Route path="/login" element={<Homepage />}></Route> */}
        {/* <Route path="/register" element={<Homepage />}></Route> */}
        {/* <Route path="/products/search" element={<SearchProduct/>}></Route> */}
        {/* <Route path="/home" element={<Homepage />}></Route> */}
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route> */}
        {/* <Route path="/terms-condition" element={<TearmsCondition />}></Route> */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}
        {/* <Route path="/account/rate/:productId" element={<RateProduct />}></Route> */}
        {/* <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default CustomerRoutes;
