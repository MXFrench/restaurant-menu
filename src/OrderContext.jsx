import { createContext, useContext, useState } from "react";

const OrderContext = createContext();
const UpdateOrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function useUpdateOrder() {
  return useContext(UpdateOrderContext);
}

export default function OrderProvider({ children }) {
  const [order, setOrder] = useState({
    orderType: "",
    orderItems: [],
  });

  return (
    <OrderContext.Provider value={order}>
      <UpdateOrderContext.Provider value={setOrder}>
        { children }
      </UpdateOrderContext.Provider>
    </OrderContext.Provider>
  )
}