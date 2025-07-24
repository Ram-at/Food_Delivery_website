import { ItemList } from "./ItemList";

const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-6/12 my-4 bg-white rounded-2xl shadow-md border p-6">
        {/* Header */}
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-xl text-gray-800">
            {data.title}{" "}
            <span className="text-gray-500">({data.itemCards.length})</span>
          </span>
          <span className="text-lg transition-transform duration-200">
            {showItems ? "⬆️" : "⬇️"}
          </span>
        </div>

        {/* Collapsible Items List */}
        {showItems && (
          <div className="mt-4">
            <ItemList item={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
