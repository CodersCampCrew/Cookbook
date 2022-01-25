import { render } from "@testing-library/react";
import SubpageTitle from "./SubpageTitle";

describe("SubpageTitle", () => {
  test("Check the subpageTitle was render", () => {
    render(<SubpageTitle />);

    expect(true).toBeTruthy();
  });
});
