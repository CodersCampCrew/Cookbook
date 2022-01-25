import SubpageTitle from "./SubpageTitle";
import { render, screem } from "@testing-library/react";

describe("SubpageTitle", () => {
  test("Check the subpageTitle was render", () => {
    render(<SubpageTitle />);

    expect(true).toBeTruthy();
  });
});
