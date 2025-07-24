import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

test("loaded in the screen or not", () => {
  render(<Contact />);
  const Heading = screen.getByRole("heading");
  expect(Heading).toBeInTheDocument();
});
test("button in the screen or not", () => {
  render(<Contact />);
  const button = screen.getByRole("button", { name: "Send Message" });
  expect(button).toBeInTheDocument();
});
