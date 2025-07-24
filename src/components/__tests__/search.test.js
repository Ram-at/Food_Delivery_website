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


