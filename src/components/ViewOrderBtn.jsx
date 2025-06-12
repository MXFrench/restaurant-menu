import { useNavigate } from 'react-router'

const ViewOrderBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="box-border border-2 border-accent-2 text-accent-1 shadow-main-sm rounded-lg text-xl font-medium text-center p-3 cursor-pointer transition hover:bg-accent-1/5 leading-none"
      onClick={() => navigate("/order")}
    >View Order</button>
  )
}

export default ViewOrderBtn