import { Route, Routes } from "react-router";

function App() {

  return (
    <Routes>
      <Route index element={<div>Home</div>} />
      <Route path="menu" element={<div>Menu</div>} />
      <Route path="order" element={<div>Order</div>} />
      <Route path="checkout" element={<div>Checkout</div>} />
    </Routes>
  )
}

export default App
