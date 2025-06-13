import { useNavigate } from "react-router";
import { capitalize } from "../lib";
import { FaArrowRight } from "react-icons/fa";
import { useUpdateOrder } from "../OrderContext";


const OrderButton = ({ orderType }) => {
  const navigate = useNavigate();
  const updateOrder = useUpdateOrder();

  const openMenu = () => {
    updateOrder(prev => ({...prev, orderType: orderType}));
    navigate("/menu");
  }

  return (
    <div className="order-button group cursor-pointer bg-base border border-accent-2 shadow-main rounded-lg w-40 sm:w-60 px-4 py-3 pb-4 sm:px-8 sm:py-6 flex gap-8 items-center"
      onClick={openMenu}
    >
      <div className="grid gap-4">
        <p className="font-special sm:text-xl text-accent-2 leading-none">Order</p>
        <p className="text-xl sm:text-3xl leading-none">{capitalize(orderType)}</p>
      </div>
      <FaArrowRight className="text-2xl sm:text-4xl text-accent-1 translate-y-3 opacity-0 transition group-hover:opacity-100 group-hover:translate-y-0" />
    </div>
  )
}

export default OrderButton