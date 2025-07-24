import { render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_FETCHDATA from "../mocks/mocksForFetch.json";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_FETCHDATA),
    })
  );
});

it("should render the Body component with search", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
});

// //   // Step 3: Simulate typing
// //   fireEvent.change(input, { target: { value: "pizza" } });
// // const cards  = screen.getAllByTestId("resCard");
// //   // Step 4: Assert value has changed
// //   expect(cards.length).toBe(2);
