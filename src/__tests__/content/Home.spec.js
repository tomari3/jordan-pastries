import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "../../components/content/Home";

beforeEach(cleanup);

describe("<Home />", () => {
  describe("Success", () => {
    it("renders the <Home />", () => {
      const { queryByTestId } = render(<Home />);
      expect(queryByTestId("home")).toBeTruthy();
    });
  });
});
