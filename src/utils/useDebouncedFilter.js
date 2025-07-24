import { useEffect, useState } from "react";

const useDebouncedFilter = (list, searchText, delay = 300) => {
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.trim() === "") {
        setFilteredList(list);
      } else {
        const result = list.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredList(result);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [searchText, list, delay]);

  return filteredList;
};

export default useDebouncedFilter;
