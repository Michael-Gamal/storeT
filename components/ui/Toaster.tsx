"use client";

import { useToast } from "./ToastContext";

const typeStyles = {
  success: "border-green-500",
  error: "border-red-500",
  warning: "border-yellow-500",
  info: "border-blue-500",
};

export default function Toaster() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed right-5 top-5 z-50 flex w-80 flex-col gap-3">
      {toasts.map((item) => (
        <div
          key={item.id}
          className={`
            flex items-start justify-between gap-4
            rounded-lg border-l-4
            bg-white p-4
            shadow-lg
            ${typeStyles[item.type]}
          `}
        >
          <div className="flex-1">
            {item.title && (
              <h3 className="font-semibold text-gray-900">
                {item.title}
              </h3>
            )}

            {item.description && (
              <p className="mt-1 text-sm text-gray-500">
                {item.description}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => removeToast(item.id)}
            className="text-xl leading-none text-gray-400 transition hover:text-gray-700"
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}