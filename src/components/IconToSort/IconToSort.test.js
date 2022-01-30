import { render } from "@testing-library/react";
import IconToSort from "./IconToSort";

describe("IconToSort", () => {
  test("Check the icon was render", () => {
    render(<IconToSort />);

    expect(true).toBeTruthy();
  });
});
