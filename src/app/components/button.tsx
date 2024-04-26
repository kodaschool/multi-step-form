import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}
const Button = ({ className = "", children, type, onClick }: Props) => {
  return (
    <button
      className={`py-1 px-3 rounded-sm text-white bg-slate-700 text-center ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
