import { Route, Routes } from "react-router-dom";
import Navigation from "./customer/components/navigation/Navigation.jsx";
import CustomerRoutes from "./routers/CustomerRouters.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
