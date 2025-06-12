import { capitalize } from '../lib';
import { useOrder, useUpdateOrder } from '../OrderContext';
import { useState } from 'react';
import { AiOutlineCarryOut } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const OrderDisplay = () => {
  const {orderType, orderItems} = useOrder();
  const updateOrder = useUpdateOrder();
  const [isOpen, setIsOpen] = useState(false);

  const setOrderType = (newType) => {
    setIsOpen(false);
    updateOrder(prev => ({...prev, orderType: newType}));
  }

  return (
    <div className="rounded-lg border sm:border-2 border-accent-2 p-2 sm:p-3 flex gap-3 sm:gap-4 items-center relative">
      <div className="space-y-2 cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p className="leading-none text-xs text-accent-1">My Order</p>
        <button className="leading-none text-lg sm:text-xl font-medium cursor-pointer">
          {orderType ? capitalize(orderType) : <span className="opacity-25 hover:opacity-50">Order Type</span>}
        </button>
      </div>

      {isOpen && (
        <div className="absolute -bottom-0 translate-y-[calc(100%_+_1rem)] z-20 border border-accent-1/25 rounded bg-base shadow-main-sm">
          <ul className="divide-y divide-accent-1/25 *:leading-none *:p-3 *:cursor-pointer *:hover:bg-accent-2/15">
            <li onClick={() => setOrderType("takeout")}>
              <button className="flex items-center gap-2 cursor-pointer">
                <AiOutlineCarryOut />
                Takeout
              </button>
            </li>

            <li onClick={() => setOrderType("dine-in")}>
              <button className="flex items-center gap-2 cursor-pointer">
                <MdOutlineTableRestaurant />
                Dine-In
              </button>
            </li>

            <li onClick={() => setOrderType("delivery")}>
              <button className="flex items-center gap-2 cursor-pointer">
                <TbTruckDelivery />
                Delivery
              </button>
            </li>

            <li onClick={() => setIsOpen(false)}>
              <button className="flex items-center gap-2 cursor-pointer text-accent-1">
                <IoCloseOutline />
                Close
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className="bg-accent-2 size-8 sm:size-10 sm:text-lg rounded-full flex items-center justify-center">
        {orderItems.length}
      </div>
    </div>
  )
}

export default OrderDisplay