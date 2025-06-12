import { useState } from "react"
import { capitalize, filterByCategory } from "../lib"

const FilterBtns = ({ data, setMenuItems }) => {
  const [current, setCurrent] = useState("all");

  const filterData = (category) => {
    setCurrent(category);
    if (category === "all") {
      setMenuItems(data.menu);
    } else {
      setMenuItems(filterByCategory(data.menu, category));
    }
  }

  return (
    <div className="flex gap-3 overflow-x-auto chips py-2">
      <button className={`leading-none py-2 px-4 border-2 border-accent-2 rounded-full transition text-accent-1 ${current === "all" ? "bg-accent-2 text-fg" : "hover:bg-accent-2/15"} cursor-pointer`}
          onClick={() => filterData("all")}
        >All</button>

      {data?.categories?.map(category => (
        <button key={category}
          className={`leading-none py-2 px-4 border-2 border-accent-2 rounded-full transition text-accent-1 ${current === category ? "bg-accent-2 text-fg" : "hover:bg-accent-2/15"} cursor-pointer`}
          onClick={() => filterData(category)}
        >{capitalize(category)}</button>
      ))}
    </div>
  )
}

export default FilterBtns