import { useNavigate } from "react-router";
import { capitalize } from "../lib";
import { FaArrowRight } from "react-icons/fa";


const OrderButton = ({ orderType }) => {
  const navigate = useNavigate();

  const openMenu = () => {
    // Set context hook for order type to orderType
    navigate("/menu");
  }

  return (
    <div className="group cursor-pointer bg-base border border-accent-2 shadow-main rounded-lg w-60 px-8 py-6 flex gap-8 items-center"
      onClick={openMenu}
    >
      <div className="grid gap-4">
        <p className="font-special text-xl text-accent-2 leading-none">Order</p>
        <p className="text-3xl leading-none">{capitalize(orderType)}</p>
      </div>
      <FaArrowRight className="text-4xl text-accent-1 translate-y-3 opacity-0 transition group-hover:opacity-100 group-hover:translate-y-0" />
    </div>
  )
}

export default OrderButton