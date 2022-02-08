import { render, screen } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea component", () => {
  test("check if component was rendered", () => {
    render(<TextArea />);
    const textAreaElement = screen.getByPlaceholderText("_____");
    expect(textAreaElement).toBeInTheDocument();
  });

  test("check if placeholder works correctly", () => {
    render(<TextArea placeholder="placeholder" />);
    const textAreaElement = screen.getByPlaceholderText("placeholder");
    expect(textAreaElement).toBeInTheDocument();
  });
});
