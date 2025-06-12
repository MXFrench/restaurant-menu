import crissxcross from "../assets/crissxcross.png";
import Header from "../components/Header";
import MenuFooter from "../components/MenuFooter";
import MenuContent from "./MenuContent";

const Menu = () => {

  return (
    <div className="h-screen bg-size-[12rem] grid grid-rows-[auto_1fr_auto]" style={{backgroundImage: `url(${crissxcross})`}}>
      <Header />
      <MenuContent />
      <MenuFooter />
    </div>
  )
}

export default Menu