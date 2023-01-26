import { TestComponent } from "./TestComponent";
import { screen, render } from "../../test-utils";

describe("TestComponent unit tests", () => {
  it("Should render TestComponent", () => {
    render(<TestComponent />);
    expect(screen.getByText("TestComponent")).toBeInTheDocument();
  });
});
