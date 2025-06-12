import { useEffect, useRef, useState } from "react"
import { IoFilter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { filterBySearch } from "../lib";

const SearchBar = ({ setSearchMode, data, setMenuItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus(), []);

  useEffect(() => setMenuItems(filterBySearch(data?.menu, searchTerm)), [searchTerm]);

  return (
    <div className="flex gap-4 items-center py-2">
      <div className="relative items-center flex w-full">
        <input type="text"
          className="w-full flex-1 rounded-full border-2 border-accent-2 placeholder:text-accent-2 py-2 px-4 pr-8 bg-base outline-0 focus-visible:border-accent-1 transition"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          ref={inputRef}
        />
        {searchTerm.length > 0 && (
          <button className="absolute right-4 text-accent-2 hover:text-accent-1 cursor-pointer transition"
            onClick={() => {
              setSearchTerm("");
              inputRef.current.focus();
            }}
          ><IoClose /></button>
        )}
      </div>
      <button className="p-3 cursor-pointer rounded-full aspect-square bg-accent-2 transition hover:bg-accent-1/75 active:ring-2 active:ring-accent-1/50"
        onClick={() => setSearchMode(false)}
      ><IoFilter /></button>
    </div>
  )
}

export default SearchBar