import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import OrderProvider from "./OrderContext";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";

function App() {

  return (
    <OrderProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </OrderProvider>
  )
}

export default App
