import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("TextInput component", () => {
  test("check if component was rendered", () => {
    render(<Navbar />);
    expect(screen.getByText("The CookBook")).toBeInTheDocument();
  });
});
