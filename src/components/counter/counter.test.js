import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./counter";

describe("Testing Counter component with multiple test cases", () => {
  test("Component Rendered", () => {
    render(<Counter />);
  });

  test("Increment Button Clicked", () => {
    const { container } = render(<Counter />);
    const h2 = container.querySelector("h2");
    const initialCounterValue = h2.textContent;
    fireEvent.click(screen.getByText(/Increment/i));
    const incrementedValue = h2.textContent;
    expect(incrementedValue).toBe("1");
  });

  test("Decrement Button Clicked", () => {
    const { container } = render(<Counter />);
    const h2 = container.querySelector("h2");
    const initialCounterValue = h2.textContent;
    fireEvent.click(screen.getByText(/Decrement/i));
    const incrementedValue = h2.textContent;
    expect(incrementedValue).toBe("-1");
  });
});
