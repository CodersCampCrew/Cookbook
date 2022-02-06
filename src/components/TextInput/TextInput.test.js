import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput component", () => {
  test("check if component was rendered", () => {
    render(<TextInput />);
    const textInputElement = screen.getByPlaceholderText("_____");
    expect(textInputElement).toBeInTheDocument();
  });

  test("check if placeholder works correctly", () => {
    render(<TextInput placeholder="placeholder" />);
    const textInputElement = screen.getByPlaceholderText("placeholder");
    expect(textInputElement).toBeInTheDocument();
  });
});
