import { render, screen } from "@testing-library/react";
import ImageInput from "./ImageInput";

describe("ImageInput component", () => {
  test("check if component was rendered", () => {
    render(<ImageInput />);
    const textInputElement = screen.getByPlaceholderText("_____");
    expect(textInputElement).toBeInTheDocument();
  });

  test("check if placeholder works correctly", () => {
    render(<ImageInput placeholder="placeholder" />);
    const textInputElement = screen.getByPlaceholderText("placeholder");
    expect(textInputElement).toBeInTheDocument();
  });
});
