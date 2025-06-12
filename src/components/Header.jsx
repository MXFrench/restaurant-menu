import { useNavigate } from "react-router";
import menuLogo from "../assets/logo-menu.svg";
import OrderDisplay from "./OrderDisplay.jsx";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-base border-b-2 border-b-accent-1 shadow-main p-4 flex justify-between items-center">
      <img className="h-8 lg:h-10 cursor-pointer"
      src={menuLogo} alt="menu-logo"
      onClick={() => navigate("/")} />

      <OrderDisplay />
    </header>
  )
}

export default Header