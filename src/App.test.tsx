import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import App from "./App";

const mocks = vi.hoisted(() => {
  return {
    getInitials: vi.fn(),
  };
});

vi.mock("./helpers", () => ({
  getInitials: mocks.getInitials,
}));

describe("App", () => {
  test("Should render the app component", () => {
    mocks.getInitials.mockReturnValue("J");

    const { getByTestId } = render(<App />);

    const element = screen.getByText("Hello Juan!");
    expect(element).toBeDefined();

    const initials = getByTestId("initials");
    expect(initials).toBeDefined();
    expect(initials.textContent).toBe("J");
  });
});
