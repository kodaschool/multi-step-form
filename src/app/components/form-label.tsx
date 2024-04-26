import React from "react";
interface LabelProps {
  htmlFor?: string;
  children: string;
  className?: string;
}
const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
