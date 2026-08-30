"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type ToastType = "success" | "error" | "warning" | "info";

type Toast = {
  id: number;
  title?: string;
  description?: string;
  type: ToastType;
};

type ToastOptions = {
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
};

type ToastContextType = {
  toasts: Toast[];
  toast: (options: ToastOptions) => void;
  removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = (id: number) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.id !== id)
    );
  };

  const toast = ({
    title,
    description,
    type = "success",
    duration = 3000,
  }: ToastOptions) => {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      {
        id,
        title,
        description,
        type,
      },
    ]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        toast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider"
    );
  }

  return context;
}