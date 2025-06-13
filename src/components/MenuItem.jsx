import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useUpdateOrder } from "../OrderContext";
import { formatPriceString, updateOrderData } from "../lib";
import { FaCheck } from "react-icons/fa";

const MenuItem = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alerting, setAlerting] = useState(false);
  const updateOrder = useUpdateOrder();

  const addItem = () => {
    if (alerting) return;
    setAlerting(true);
    updateOrder(prev => updateOrderData(prev, item));
    setTimeout(() => {
      setAlerting(false);
    }, 1000);
  }

  return (
    <div className="rounded-lg relative aspect-3/2 max-xs:aspect-4/3 bg-cover border-2 border-accent-2 shadow-main p-2 overflow-hidden"
      style={{backgroundImage: `url("${item.imgUrl}")`}}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      <div className={`bg-gradient-to-t from-base via-base via-5% ${isOpen && "bg-base/75"} transition-all w-full h-full absolute inset-0`}></div>

      <div className="rounded-sm border-2 border-accent-1 w-full h-full relative z-10 px-4">
        <div className="space-y-2 absolute py-4 bottom-0 transition">
          <h3 className="font-special font-bold text-2xl max-xs:text-xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-2xl text-accent-1 leading-none">{item.name}</h3>

          <div className="flex gap-4 items-center max-xs:text-sm max-xs:gap-2">
            <span className="px-2 py-1.5 bg-accent-1/15 leading-none rounded">${formatPriceString(item.price)}</span>
            <span>{item.calories} Cal.</span>
            <button className="text-fg/50 hover:text-fg/75 cursor-pointer transition"
              onClick={() => setIsOpen(prev => !prev)}
            >{isOpen ? "Read less" : "Read more..."}</button>
          </div>

          <p className={`opacity-0 transition-all max-xs:text-sm ${isOpen && "opacity-100 h-28 max-xs:h-22"} ${!isOpen && "h-0"}`}>{item.description}</p>
        </div>

        <button className="absolute m-4 bg-accent-2/85 text-xl active:ring-2 active:ring-accent-1/65 text-accent-1 hover:bg-accent-2 transition cursor-pointer rounded p-2 bottom-0 right-0 flex items-center justify-center"
          onClick={addItem}
        >{alerting ? <FaCheck className="animate-ping" /> : <FaPlus />}</button>
      </div>
    </div>
  )
}

export default MenuItem