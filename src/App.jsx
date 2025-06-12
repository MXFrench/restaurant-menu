import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="menu" element={<div>Menu</div>} />
      <Route path="order" element={<div>Order</div>} />
      <Route path="checkout" element={<div>Checkout</div>} />
    </Routes>
  )
}

export default App
