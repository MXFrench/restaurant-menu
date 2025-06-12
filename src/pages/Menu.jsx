import { useOrder } from "../OrderContext";
import crissxcross from "../assets/crissxcross.png";
import Header from "../components/Header";
import MenuFooter from "../components/MenuFooter";

const Menu = () => {
  const order = useOrder();

  return (
    <div className="min-h-screen bg-size-[12rem]" style={{backgroundImage: `url(${crissxcross})`}}>
      <Header />
      {/* Fetch data and display here */}
      <MenuFooter />
    </div>
  )
}

export default Menu