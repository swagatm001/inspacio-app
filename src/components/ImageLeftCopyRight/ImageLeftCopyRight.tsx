import React from "react";

interface I_ImageLeftCopyRight {
  leftTemplate: React.ReactNode;
  rightTemplate: React.ReactNode;
}

export const ImageLeftCopyRight: React.FC<I_ImageLeftCopyRight> = ({
  leftTemplate,
  rightTemplate,
}) => {
  return (
    <div className="w-full lg:flex">
      <div className="w-full lg:w-1/2">{leftTemplate}</div>
      <div className="w-full lg:w-1/2">{rightTemplate}</div>
    </div>
  );
};
