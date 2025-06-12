import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";

const MenuContent = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState(null);

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

  if (!data) return <div>Loading...</div>
  
  if (data === "error") return <div>Error</div>

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {data.menu.map(item => <MenuItem key={item.id} item={item} />)}
    </div>
  )
}

export default MenuContent