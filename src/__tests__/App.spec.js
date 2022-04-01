import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom";
import App from "../App";

test.skip("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const user = userEvent.setup();
  expect(screen.getByText(/home comp/i));

  await user.click(screen.getByText(/products/i));

  expect(screen.getByText(/products comp/i));
});
