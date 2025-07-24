import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    sla,
  } = resData.info;

  return (
    <div className="w-72 rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 relative">
      <img
        className="w-full h-44 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        <p className="text-sm text-gray-500 mb-1 truncate">
          {cuisines?.join(", ")}
        </p>

        <p className="text-sm text-gray-600">{areaName}</p>

        <div className="flex gap-2 text-sm text-gray-700 mt-2 font-medium">
          <span className="text-green-600">⭐ {avgRating}</span>
          <span>• {costForTwo}</span>
          <span>• {sla?.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};
export const isPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span
          role=""
          className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full z-10 shadow-md"
        >
          Opened
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
