import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders bye there text", () => {
  render(<App />);
  const linkElement = screen.getByText(/bye there/i);
  expect(linkElement).toBeInTheDocument();
});
