import { act, render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";

import { toast } from "../../utils/toast";
import RadixToast from "./RadixToast";

describe("Toast UI 테스트", () => {
  describe("Toast Message 화면에 올바르게 나타나는지 테스트", () => {
    test("Toast Message가 화면에 나타단다.", async () => {
      render(<RadixToast />);

      toast("테스트 메시지");
      const toastItem = await screen.findByText("테스트 메시지");
      expect(toastItem).toBeInTheDocument();
    });
  });

  describe("Toast dot variant에 따른 색 테스트", () => {
    test("Toast의 variants가 default일 경우 class에 bg-zinc-400을 포함하는지 테스트", async () => {
      render(<RadixToast />);
      toast("toast default", { variant: "default" });
      const dotSpan = await screen.findByTestId("toast-dot");
      expect(dotSpan).toHaveClass("bg-zinc-400");
    });

    test("Toast의 variants가 success일 경우 class에 bg-green-500을 포함하는지 테스트", async () => {
      render(<RadixToast />);
      toast("toast success", { variant: "success" });
      const dotSpan = await screen.findByTestId("toast-dot");
      expect(dotSpan).toHaveClass("bg-green-500");
    });
    test("Toast의 variants가 error 경우 class에 bg-red-500을 포함하는지 테스트", async () => {
      render(<RadixToast />);
      toast("toast error", { variant: "error" });
      const dotSpan = await screen.findByTestId("toast-dot");
      expect(dotSpan).toHaveClass("bg-red-500");
    });
  });

  describe("Toast Message가 duration 후에 사라지는지 테스트", () => {
    test("Toast message가 default인 2초 뒤에 사라지는지 테스트", async () => {
      vi.useFakeTimers();
      render(<RadixToast />);

      act(() => {
        toast("toast duration default test");
      });

      const viewItem = screen.getByText("toast duration default test");
      expect(viewItem).toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(2000);
      });

      const notViewItem = screen.queryByText("toast duration default test");
      expect(notViewItem).not.toBeInTheDocument();

      vi.useRealTimers();
    });

    test("Toast message가 duration만큼 뒤에 사라지는지 테스트", async () => {
      vi.useFakeTimers();
      render(<RadixToast />);

      act(() => {
        toast("toast duration 5000 test");
      });

      const viewItem = screen.getByText("toast duration 5000 test");
      expect(viewItem).toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(5000);
      });

      const notViewItem = screen.queryByText("toast duration 5000 test");
      expect(notViewItem).not.toBeInTheDocument();

      vi.useRealTimers();
    });
  });
});
