import React from "react";
interface Props {
  error?: string;
}

const Error = ({ error }: Props) => {
  return <span className="block text-red-400 my-2">{error}</span>;
};

export default Error;
