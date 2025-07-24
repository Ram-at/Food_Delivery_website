import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { isPromotedLabel } from "./RestaurantCard";
import useRestaurantData from "../utils/useRestaurantData";
import useDebouncedFilter from "../utils/useDebouncedFilter";
import Shimmer from "./Shimmer";
import { URL } from "../utils/constant";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { restaurants, loading } = useRestaurantData(URL);

  const [filteredRes, setFilteredRes] = useState([]);
  const debouncedFilteredRes = useDebouncedFilter(restaurants, searchText);

  //high order components
  const PromotedRestaurant = isPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredRes(debouncedFilteredRes);
  }, [debouncedFilteredRes]);

  if (loading) return <Shimmer />;

  return (
    <div className="p-4">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search restaurants..."
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <div className="flex gap-4">
          <button
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRes(filteredList);
            }}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Top Rated Restaurants
          </button>
          <button
            onClick={() => setFilteredRes(restaurants)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            Show All
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRes.length === 0
          ? Array(5)
              .fill(0)
              .map((_, index) => <Shimmer key={index} />)
          : // This is equivalent to this
            //             const shimmerCards = [];
            // for (let i = 0; i < 8; i++) {
            //   shimmerCards.push(<Shimmer key={i} />);
            // }
            // return <>{shimmerCards}</>;
            filteredRes.map((res) => (
              <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
                {res.info.isOpen ? (
                  <PromotedRestaurant resData={res} />
                ) : (
                  <RestaurantCard resData={res} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
