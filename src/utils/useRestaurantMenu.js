import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(MENU_API + resId + "&submitAction=ENTER");
        const json = await response.json();
        setResInfo(json?.data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenu();
  }, [resId]); // <- dependency array

  return resInfo;
};

export default useRestaurantMenu;

/* 
React hooks cannot be async functions. They must return synchronously (not a Promise).
whether custom or prebuilt hook

*/
