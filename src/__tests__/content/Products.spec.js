import React from "react";
import { render, cleanup } from "@testing-library/react";
import Products from "../../components/content/Products";

beforeEach(cleanup);

describe("<Products />", () => {
  describe("Success", () => {
    it("renders the <Products />", () => {
      const { queryByTestId } = render(<Products />);
      expect(queryByTestId("products")).toBeTruthy();
    });
  });
});
