import { getByRole, render, getByText, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mocksRestaurantData.json";
import { isPromotedLabel } from "../RestaurantCard";

it("should render with the data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("The Belgian Waffle Co.");
  expect(name).toBeInTheDocument();
});
const PromotedRestaurant = isPromotedLabel(RestaurantCard);
it("should render with the opened tag or not", () => {
  render(<PromotedRestaurant resData={MOCK_DATA} />);
  const openTag = screen.getByText("Opened");
  expect(openTag).toBeInTheDocument();
});
