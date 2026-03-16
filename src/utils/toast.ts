import type { Dispatch, ReactNode, SetStateAction } from "react";

type ToastVariant = "default" | "success" | "error";

export interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
  duration: number;
  icon?: React.ReactNode;
}

interface ToastOptions {
  variant?: ToastVariant;
  duration?: number;
  icon?: ReactNode;
}

let setToastFn: Dispatch<SetStateAction<ToastItem[]>> | null = null;
let id = 0;
const TOAST_DEFAULT_DURATION = 2000;

export const registerToast = (fn: Dispatch<SetStateAction<ToastItem[]>>) => {
  setToastFn = fn;
};
export const unregisterToast = () => {
  setToastFn = null;
};

export const toast = (message: string, options: ToastOptions = {}) => {
  if (!setToastFn) {
    console.warn("[Toast] ToastContainer가 마운트되지 않았습니다.");
    return;
  }

  const variant = options.variant ?? "default";
  const duration = options.duration ?? TOAST_DEFAULT_DURATION;
  const toastId = ++id;
  const icon = options.icon;

  const newToast: ToastItem = {
    id: toastId,
    message,
    variant,
    duration,
    icon,
  };

  setToastFn((prev) => [...prev, newToast]);

  setTimeout(() => {
    setToastFn?.((prev) => prev.filter((item) => item.id !== toastId));
  }, duration);
};
