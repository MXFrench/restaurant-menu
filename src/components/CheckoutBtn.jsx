import { useNavigate } from 'react-router'

const CheckoutBtn = () => {
  const navigate = useNavigate();
  return (
    <button className="text-fg border-2 border-accent-2 shadow-main-sm rounded-lg text-xl font-medium text-center p-3 cursor-pointer transition bg-accent-2/80 hover:bg-accent-2 leading-none"
      onClick={() => navigate("/checkout")}
    >Checkout</button>
  )
}

export default CheckoutBtn