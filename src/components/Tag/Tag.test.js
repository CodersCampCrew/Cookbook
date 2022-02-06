import { render } from "@testing-library/react";
import Tag from "./Tag"

describe("Tag", () => {
  test("Check the tag was render", () => {
    render(<Tag />);

    expect(true).toBeTruthy();
  });
});