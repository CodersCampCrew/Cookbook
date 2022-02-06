import { render } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  test("Check the HomePage was rendered", () => {
    render(<HomePage />);

    expect(true).toBeTruthy();
  });
});
