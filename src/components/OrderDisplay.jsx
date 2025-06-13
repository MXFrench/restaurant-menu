import { capitalize, countOrders } from '../lib';
import { useOrder } from '../OrderContext';
import { useState } from 'react';
import OrderTypeMenu from './OrderTypeMenu';

const OrderDisplay = () => {
  const {orderType, orderItems} = useOrder();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border sm:border-2 border-accent-2 p-2 sm:p-3 flex gap-3 sm:gap-4 items-center relative">
      <div className="min-[25rem]:space-y-2 cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p className="leading-none text-xs text-accent-1">My Order</p>
        <button className="leading-none text-lg sm:text-xl font-medium cursor-pointer">
          {orderType ? capitalize(orderType) : <span className="opacity-25 hover:opacity-50">Order Type</span>}
        </button>
      </div>

      {isOpen && (
        <OrderTypeMenu setIsOpen={setIsOpen} />
      )}

      <div className="bg-accent-2 size-8 sm:size-10 sm:text-lg rounded-full flex items-center justify-center">
        {countOrders(orderItems)}
      </div>
    </div>
  )
}

export default OrderDisplay