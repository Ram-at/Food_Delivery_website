import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant.js";
import { addItem } from "../utils/cartSlice.js";

export const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = (i) => {
    dispatch(addItem(i));
  };
  return (
    <div className="space-y-4">
      {item.map((item) => {
        const i = item;
        const info = item.card.info;
        const imageUrl = info.imageId
          ? CDN_URL + info.imageId
          : "https://tse4.mm.bing.net/th/id/OIP.d12NjZNPV8a-M9de9YK6wAHaE8?pid=Api&P=0&h=220";

        return (
          <div
            key={info.id}
            className="flex items-start gap-4 border-b border-gray-200 pb-4"
          >
            {/* Image */}
            <img
              src={imageUrl}
              alt={info.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            {/* Info */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-gray-800">
                  {info.name}
                </span>
                <span className="text-gray-600 text-sm">
                  ₹{info.price / 100 || info.defaultPrice / 100}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {info.description || "No description available."}
              </p>
            </div>
            <button
              onClick={() => handleClick(i)}
              className="mt-2 w-fit px-3 py-1 text-sm text-white bg-green-600 hover:bg-green-700 rounded"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
