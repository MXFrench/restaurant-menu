import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useUpdateOrder, useOrder } from "../OrderContext";
import { updateCountOrder } from "../lib";

export const OrderCard = ({ item }) => {
  const { orderItems } = useOrder();
  const updateOrder = useUpdateOrder();
  const [itemCount, setItemCount] = useState(item.count);

  // useEffect(() => updateOrder(prev => ({...prev, orderItems: updateCountOrder(prev.orderItems)})));
  useEffect(() => {
    if (!orderItems || orderItems?.length === 0) return;
    const updatedOrderItems = updateCountOrder(orderItems, item.id, itemCount);
    updateOrder(prev => ({...prev, orderItems: updatedOrderItems}));
  }, [itemCount]);

  return (
    <div className="shadow-main rounded-lg border-2 border-accent-2 bg-base p-1">
      <div className="w-full h-full rounded-sm border-2 border-accent-1 p-4 flex justify-end">
        <div className="w-72">
          <h3 className="font-special leading-none text-accent-1 font-bold text-2xl">{item.name}</h3>
          <div className="flex gap-4 items-center mt-2">
            <p className="leading-none py-2 px-3 rounded bg-accent-1/15">${item.price}</p>
            <p className="">{item.calories} Cal.</p>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="grid grid-cols-3 border-2 rounded overflow-hidden border-accent-2">
              <button className="w-10 h-8 flex items-center justify-center bg-accent-2 cursor-pointer"
                onClick={() => setItemCount(prev => prev - 1)}
              ><FaMinus /></button>
              <input type="text"
                className="w-10 h-8 flex items-center justify-center text-center outline-0 focus-visible:bg-accent-2/15"
                value={itemCount}
                onChange={(e) => setItemCount(e.target.value)}
              />
              <button className="w-10 h-8 flex items-center justify-center bg-accent-2 cursor-pointer"
                onClick={() => setItemCount(prev => prev + 1)}
              ><FaPlus /></button>
            </div>

            <button>Remove</button>
          </div>

        </div>

      </div>
    </div>
  )
}
