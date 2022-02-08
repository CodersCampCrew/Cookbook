import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  test("Check the modal was rendered", () => {
    render(<Modal />);

    expect(true).toBeTruthy();
  });
});
