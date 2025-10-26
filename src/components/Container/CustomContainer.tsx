import React, { ReactNode } from "react";

interface CustomContainerProps {
    children: ReactNode;
    className?: string;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children, className = "" }) => (
    <div className={`overflow-hidden px-2 w-[95%] mx-auto md:px-7 box-border max-w-[1253px] ${className}`}>
        {children}
    </div>
);

export default CustomContainer;
