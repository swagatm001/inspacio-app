import clsx from "clsx";
import React from "react";

interface I_ImageLeftCopyRight {
  leftTemplate: React.ReactNode;
  rightTemplate: React.ReactNode;
  wrapperClassName?: string;
}

export const ImageLeftCopyRight: React.FC<I_ImageLeftCopyRight> = ({
  leftTemplate,
  rightTemplate,
  wrapperClassName,
}) => {
  return (
    <div className={clsx("w-full lg:flex", wrapperClassName)}>
      <div className="w-full lg:w-1/2">{leftTemplate}</div>
      <div className="w-full lg:w-1/2">{rightTemplate}</div>
    </div>
  );
};
