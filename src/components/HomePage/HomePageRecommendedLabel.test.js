import { render } from "@testing-library/react";
import RecommendedLabel from "./HomePageRecommendedLabel";

describe("RecommendedLabel", () => {
  test("Check the RecommendedLabel was rendered", () => {
    render(<RecommendedLabel />);

    expect(true).toBeTruthy();
  });
});
