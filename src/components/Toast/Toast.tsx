"use client";

import { useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import cn from "../../utils/cn";
import {
  registerToast,
  unregisterToast,
  type ToastItem,
} from "../../utils/toast";

const toastVariants = cva(
  "flex items-center gap-3 w-full px-4 py-3 rounded-[10px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-sm text-zinc-800 dark:text-zinc-100 animate-toast-in",
  {
    variants: {
      variant: {
        default: "",
        success: "",
        error: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const dotVariants = cva("w-[6px] h-[6px] rounded-full flex-shrink-0", {
  variants: {
    variant: {
      default: "bg-zinc-400",
      success: "bg-green-500",
      error: "bg-red-500",
    },
  },
  defaultVariants: { variant: "default" },
});

export default function ToastContainer() {
  const [toastList, setToastList] = useState<ToastItem[]>([]);

  useEffect(() => {
    registerToast(setToastList);
    return () => unregisterToast();
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50 flex max-w-90 min-w-70 flex-col items-end gap-2">
      {toastList.map((item) => (
        <div
          key={item.id}
          className={cn(toastVariants({ variant: item.variant }))}
        >
          <span
            className={cn(dotVariants({ variant: item.variant }))}
            data-testId="toast-dot"
          />
          {item.icon && (
            <span className="shrink-0 text-base leading-none">{item.icon}</span>
          )}
          <span className="flex-1">{item.message}</span>
        </div>
      ))}
    </div>
  );
}
