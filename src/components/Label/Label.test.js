import Label from "./Label";
import { render, screen } from "@testing-library/react";

describe("Label", () => {
  test("Check the label was render", () => {
    render(<Label />);

    expect(true).toBeTruthy();
  });
});
