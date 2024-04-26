import React from "react";
import Stepper from "./stepper";
interface Props {
  children: React.ReactNode;
}
const FormLayout = ({ children }: Props) => {
  return (
    <div className="w-[40%] bg-white rounded-md shadow-md ">
      <div className="text-center rounded-md  py-3 bg-green-100 text-slate-700 w-full ">
        <p className="text-2xl">Your delivery details</p>
      </div>
      <div className="w-full px-12 py-3">
        <Stepper />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
