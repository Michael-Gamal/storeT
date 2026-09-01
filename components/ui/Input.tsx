import React from "react";

type InputProps = React.ComponentProps<"input">;

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 ${className}`}
      {...props}
    />
  );
};

export default Input;