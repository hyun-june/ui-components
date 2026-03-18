import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Button from "./Button";

describe("Button onClick Test", () => {
  test("Button onClick 제대로 동작하는지 test", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Button</Button>);

    const button = screen.getByText("Button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
