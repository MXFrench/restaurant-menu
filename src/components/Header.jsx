import { useNavigate } from "react-router";
import menuLogo from "../assets/logo-menu.svg";
import OrderDisplay from "./OrderDisplay.jsx";
import { CiSearch } from "react-icons/ci";

const Header = ({ searchMode, setSearchMode }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-base border-b-2 border-b-accent-1 shadow-main p-4 flex justify-between items-center">
      <img className="h-10 lg:h-12 cursor-pointer"
      src={menuLogo} alt="menu-logo"
      onClick={() => navigate("/")} />

      <div className="flex gap-4 items-center">
        {!searchMode && (
          <button className="text-accent-1 text-2xl cursor-pointer"
            onClick={() => setSearchMode(true)}
          ><CiSearch /></button>
        )}
        <OrderDisplay />
      </div>
    </header>
  )
}

export default Header