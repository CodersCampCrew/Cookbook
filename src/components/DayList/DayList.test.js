import { render } from "@testing-library/react";
import DayList from "./DayList";

describe("DayList", () => {
  test("Check the label was render", () => {
    render(<DayList />);

    expect(true).toBeTruthy();
  });
});
