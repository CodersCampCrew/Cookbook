import { render } from "@testing-library/react";
import HomePageDishLabel from "./HomePageDishLabels";

describe("HomePageDishLabel", () => {
  test("Check the HomePageDishLabel was rendered", () => {
    render(<HomePageDishLabel />);

    expect(true).toBeTruthy();
  });
});
