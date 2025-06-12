import { useEffect, useState } from "react";


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
      }
    }

    fetchData();
  });

  if (!data) return <div>Loading...</div>

  return (
    <div className="overflow-y-auto">
      {data.menu.map(item => <p>{item.name}</p>)}
    </div>
  )
}

export default MenuContent