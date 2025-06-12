
import { AiOutlineCarryOut } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import { MdOutlineTableRestaurant } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { useUpdateOrder } from '../OrderContext'

const OrderTypeMenu = ({ setIsOpen }) => {
  const updateOrder = useUpdateOrder();

  const setOrderType = (newType) => {
    setIsOpen(false);
    updateOrder(prev => ({...prev, orderType: newType}));
  }

  return (
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
  )
}

export default OrderTypeMenu