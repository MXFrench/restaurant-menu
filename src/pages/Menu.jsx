import crissxcross from "../assets/crissxcross.png";
import Header from "../components/Header";
import MenuFooter from "../components/MenuFooter";
import MenuContent from "./MenuContent";

const Menu = () => {

  return (
    <div className="h-screen bg-size-[12rem] grid grid-rows-[auto_1fr_auto]" style={{backgroundImage: `url(${crissxcross})`}}>
      <Header />
      <div className="overflow-y-auto">
        <div className="py-8 px-4 md:px-8 mx-auto w-[min(100rem,_100%)]">
          <div className="mb-6">Filter Buttons</div>
          <MenuContent />
        </div>

      </div>
      <MenuFooter />
    </div>
  )
}

export default Menu