import { render } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
  test("Check the label was render", () => {
    render(<Label />);

    expect(true).toBeTruthy();
  });
});
