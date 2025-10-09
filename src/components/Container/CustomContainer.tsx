import React, { ReactNode } from "react";

interface CustomContainerProps {
    children: ReactNode;
    className?: string;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children, className = "" }) => (
    <div className={`w-full mx-auto px-10 box-border max-w-[1280px] lg:max-w-full ${className}`}>
        {children}
    </div>
);

export default CustomContainer;
