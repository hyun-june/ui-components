import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Button from "./Button";

test("button 컴포넌트 테스트", () => {
  render(<Button />);

  const button = screen.getByText("버튼임");

  expect(button).toBeInTheDocument();
});
