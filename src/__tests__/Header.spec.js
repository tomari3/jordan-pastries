import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "../components/Header";

beforeEach(cleanup);

describe("<Header />", () => {
  describe("Success", () => {
    it("renders the <Header />", () => {
      const { queryByTestId } = render(<Header />);
      expect(queryByTestId("header")).toBeTruthy();
    });
  });
});
