import Navigation from "./customer/components/navigation/Navigation.jsx";
import Product from "./customer/components/product/Product.jsx";
import Home from "./customer/pages/Home";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <Product />

        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
