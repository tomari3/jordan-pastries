import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

beforeEach(cleanup);

describe("<Header />", () => {
  describe("Success", () => {
    it("renders the header component", () => {
      const { queryByTestId } = render(<Header />, { wrapper: BrowserRouter });
      expect(queryByTestId("header")).toBeTruthy();
    });
  });
});
