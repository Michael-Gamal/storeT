import React from "react";

type LabelProps = React.ComponentProps<"label">;

const Label = ({ className = "", ...props }: LabelProps) => {
  return (
    <label
      className={`block mb-1 text-sm font-medium ${className}`}
      {...props}
    />
  );
};

export default Label;