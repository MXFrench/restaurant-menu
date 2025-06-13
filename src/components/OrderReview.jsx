import { formatPriceString, sumPrice } from "../lib";
import { useOrder } from "../OrderContext"

const OrderReview = () => {
  const { orderItems } = useOrder();
  
  return (
    <table className="grid gap-2 overflow-x-auto max-[25rem]:text-sm">
      <thead>
        <tr className="grid grid-cols-[1fr_4rem_1rem_4rem] gap-2 *:font-medium justify-items-center">
          <th className="justify-self-start">Item</th>
          <th>Price</th>
          <th>#</th>
          <th className="justify-self-end">Total</th>
        </tr>
      </thead>
      <tbody>
        {orderItems?.map(({ id, name, price, count}) => (
          <tr key={id} className="grid grid-cols-[1fr_4rem_1rem_4rem] gap-2 *:font-thin justify-items-center">
            <td className="justify-self-start truncate w-full">{name}</td>
            <td>${formatPriceString(price)}</td>
            <td>{count}</td>
            <td className="justify-self-end">${formatPriceString(price * count)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="grid grid-cols-[1fr_auto] gap-2 *:font-bold justify-items-center">
          <td className="justify-self-start">Total</td>
          <td>${formatPriceString(sumPrice(orderItems))}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default OrderReview