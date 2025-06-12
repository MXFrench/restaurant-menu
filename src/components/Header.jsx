import menuLogo from "../assets/logo-menu.svg";
import { useOrder } from "../OrderContext";
import { capitalize } from "../lib.js";

const Header = () => {
  const {orderType, orderItems} = useOrder();

  return (
    <header className="bg-base border-b-2 border-b-accent-1 shadow-main p-4 flex justify-between items-center">
      <img className="h-12"
      src={menuLogo} alt="menu-logo" />

      <div className="rounded-lg border-2 border-accent-2 px-4 py-3 flex gap-6 items-center">
        <div className="space-y-2">
          <p className="leading-none text-sm text-accent-1">My Order</p>
          <p className="leading-none text-2xl font-medium">{capitalize(orderType)}</p>
        </div>

        <div className="bg-accent-2 size-10 text-lg rounded-full flex items-center justify-center">
          {orderItems.length}
        </div>
      </div>
    </header>
  )
}

export default Header