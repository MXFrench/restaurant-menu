import { useEffect, useState } from "react";
import crissxcross from "../assets/crissxcross.png";
import FilterBtns from "../components/FilterBtns";
import Header from "../components/Header";
import MenuFooter from "../components/MenuFooter";
import MenuContent from "../components/MenuContent";
import SearchBar from "../components/SearchBar";

const Menu = () => {
  const [data, setData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => setMenuItems(data?.menu), [data, searchMode]);

  return (
    <div className="h-screen bg-size-[12rem] grid grid-rows-[auto_1fr_auto]" style={{backgroundImage: `url(${crissxcross})`}}>
      <Header searchMode={searchMode} setSearchMode={setSearchMode} />
      <div className="overflow-y-auto">
        <div className="py-8 px-4 md:px-8 mx-auto w-[min(100rem,_100%)] space-y-6">
          {searchMode ? (
            <SearchBar setSearchMode={setSearchMode} data={data} setMenuItems={setMenuItems} />
          ) : (
            <FilterBtns data={data} setMenuItems={setMenuItems} />
          )}
          <MenuContent menuItems={menuItems} setData={setData} />
        </div>
      </div>
      <MenuFooter />
    </div>
  )
}

export default Menu