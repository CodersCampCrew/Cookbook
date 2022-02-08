import { render } from "@testing-library/react";
import MenuList from "./MenuList";

describe("MenuList", () => {
  test("Check the MenuList was rendered", () => {
    render(<MenuList />);

    expect(true).toBeTruthy();
  });
});
