import { useEffect } from "react";
import MenuItem from "../components/MenuItem";

const MenuContent = ({ menuItems, setData }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data: " + error);
        setData("error");
      }
    }

    fetchData();
  }, []);

  if (!menuItems) return <div>Loading...</div>
  
  if (menuItems === "error") return <div>Error</div>

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {menuItems?.map(item => <MenuItem key={item.id} item={item} />)}
    </div>
  )
}

export default MenuContent