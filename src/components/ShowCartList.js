import { CDN_URL } from "../utils/constant.js";

export const ShowCartList = ({ item }) => {
  // Group items by ID and count quantity
  const groupedItems = item.reduce((acc, curr) => {
    const id = curr.card.info.id;
    if (!acc[id]) {
      acc[id] = { ...curr, quantity: 1 };
    } else {
      acc[id].quantity += 1;
    }
    return acc;
  }, {});

  const uniqueItems = Object.values(groupedItems);

  return (
    <div className="space-y-4">
      {uniqueItems.map((item, index) => {
        const info = item.card.info;
        const quantity = item.quantity;
        const pricePerItem = info.price / 100 || info.defaultPrice / 100;
        const totalPrice = pricePerItem * quantity;

        const imageUrl = info.imageId
          ? CDN_URL + info.imageId
          : "https://tse4.mm.bing.net/th/id/OIP.d12NjZNPV8a-M9de9YK6wAHaE8?pid=Api&P=0&h=220";

        return (
          <div
            key={info.id + index}
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
                  {info.name}{" "}
                  <span className="text-sm text-gray-500">× {quantity}</span>
                </span>
                <span className="text-gray-600 text-sm">
                  ₹{totalPrice.toFixed(2)}{" "}
                  <span className="text-gray-400">(₹{pricePerItem}/item)</span>
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {info.description || "No description available."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
