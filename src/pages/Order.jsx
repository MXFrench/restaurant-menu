import { useOrder } from "../OrderContext";

const Order = () => {
  const order = useOrder();

  return (
    <div><pre>{JSON.stringify(order, null, 2)}</pre></div>
  )
}

export default Order