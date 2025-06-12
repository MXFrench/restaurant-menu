import React from 'react'
import { useOrder } from "../OrderContext";

const Menu = () => {
  const order = useOrder();

  return (
    <div>Menu: {order.orderType}</div>
  )
}

export default Menu