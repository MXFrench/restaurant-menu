import { useOrder } from "../OrderContext";
import crissxcross from "../assets/crissxcross.png";
import Header from "../components/Header";
import MenuFooter from "../components/MenuFooter";

const Menu = () => {
  const order = useOrder();

  return (
    <div className="h-screen bg-size-[12rem] grid grid-rows-[auto_1fr_auto]" style={{backgroundImage: `url(${crissxcross})`}}>
      <Header />
      <div className="overflow-y-auto">
        {/* Fetch data and display here */}
        DATA
      </div>
      <MenuFooter />
    </div>
  )
}

export default Menu