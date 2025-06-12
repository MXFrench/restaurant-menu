import { useNavigate } from 'react-router'

const CheckoutBtn = () => {
  const navigate = useNavigate();
  return (
    <button className="text-fg border-b-2 border-accent-2 shadow-main rounded-lg text-xl font-medium text-center p-3 cursor-pointer transition bg-accent-2 hover:bg-accent-1 leading-none"
      onClick={() => navigate("/order")}
    >Checkout</button>
  )
}

export default CheckoutBtn