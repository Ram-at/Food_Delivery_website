import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

export const RestuarantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const restaurantInfo = resInfo.cards.find(
    (card) =>
      card.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )?.card?.card?.info;

  const { name, city, cloudinaryImageId, costForTwoMessage, cuisines } =
    restaurantInfo || {};

  const menuCards = resInfo.cards.find((card) => card.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards;

  const categories =
    menuCards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-xl">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};
