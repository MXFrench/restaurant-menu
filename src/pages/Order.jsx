import { useNavigate } from "react-router";
import { useOrder } from "../OrderContext";
import crissxcross from "../assets/crissxcross.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { capitalize, countOrders, sumPrice } from "../lib";
import { OrderCard } from "../components/OrderCard";
import CheckoutBtn from "../components/CheckoutBtn";
import OrderTypeMenu from "../components/OrderTypeMenu";
import { useState } from "react";

const Order = () => {
  const navigate = useNavigate();
  const {orderType, orderItems} = useOrder();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-size-[12rem] grid grid-rows-[1fr_auto]" style={{backgroundImage: `url(${crissxcross})`}}>
      <div className="flex flex-col gap-8 w-[min(100%,_100rem)] py-8 px-4 mx-auto overflow-y-auto">
        <button className="leading-none flex items-center gap-2 cursor-pointer text-accent-2 hover:text-accent-1 transition"
          onClick={() => navigate("/menu")}
        >
          <FaLongArrowAltLeft />
          Back to menu
        </button>

        <div className="flex gap-4 items-center *:leading-none">
          <h1 className="text-2xl sm:text-4xl font-semibold">Order Type: </h1>
          <div className="relative">
            <button className="md:text-2xl py-2 px-4 border-2 border-accent-2 text-accent-1 rounded-full cursor-pointer"
              onClick={() => setIsOpen(prev => !prev)}
            >{orderType ? capitalize(orderType) : <span className="opacity-25 hover:opacity-50 transition">Order Type</span>}</button>
            {isOpen && <OrderTypeMenu setIsOpen={setIsOpen} />}
          </div>
        </div>

        <div className="relative">
          <div className="absolute h-[1px] w-full bg-accent-1 top-[50%]"></div>
          <div className="relative flex justify-end items-center gap-8 px-4 font-thin md:text-xl">
            <p className="bg-base px-2">{countOrders(orderItems)} Items</p>
            <p className="bg-base px-2">Total: ${sumPrice(orderItems)}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {orderItems.map(item => <OrderCard key={item.id} item={item} />)}
        </div>
      </div>

      <footer className="p-4 border-t-2 border-accent-1 shadow-main bg-base">
        <div className="grid grid-cols-[min(100%,_20rem)] justify-center">
          <CheckoutBtn />
        </div>
      </footer>
    </div>
  )
}

export default Order