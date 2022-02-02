import { render } from "@testing-library/react";
import HomePageDishPhotos from "./HomePageDishPhotos";

describe("HomePageDishLabel", () => {
  test("Check the HomePageDishPhotos was rendered", () => {
    render(<HomePageDishPhotos />);

    expect(true).toBeTruthy();
  });
});
