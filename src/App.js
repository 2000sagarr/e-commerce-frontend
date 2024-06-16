import Cart from "./customer/components/cart/Cart.jsx";
import Checkout from "./customer/components/checkout/Checkout.jsx";
import Footer from "./customer/components/footer/Footer.jsx";
import Navigation from "./customer/components/navigation/Navigation.jsx";
import Order from "./customer/components/order/Order.jsx";
import OrderDetails from "./customer/components/order/OrderDetails.jsx";
import Product from "./customer/components/product/Product.jsx";
import ProductDetails from "./customer/components/productDetails/ProductDetails.jsx";
import Home from "./customer/pages/Home";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Home /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        <OrderDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
