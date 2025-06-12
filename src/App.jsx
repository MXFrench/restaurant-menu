import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import OrderProvider from "./OrderContext";
import Menu from "./pages/Menu";

function App() {

  return (
    <OrderProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<div>Order</div>} />
        <Route path="checkout" element={<div>Checkout</div>} />
      </Routes>
    </OrderProvider>
  )
}

export default App
