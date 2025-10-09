"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

// HandleBar component
const HandleBar = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="absolute top-0 left-0 h-full w-[5px] bg-white/50 border border-white rounded-sm">
      <div
        ref={ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px] w-[50px] bg-white/90 border border-white rounded-full cursor-pointer shadow-md"
      ></div>
    </div>
  );
});
HandleBar.displayName = "HandleBar";

// Layer component
const Layer = ({
  handleBar,
  src,
  offset = 0,
}: {
  handleBar?: React.ReactNode;
  src: string;
  offset?: number;
}) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{ transform: `translateX(${offset}px)` }}
    >
      <img
        src={src}
        alt="comparison layer"
        className="object-cover"
      />
      {handleBar}
    </div>
  );
};

// Hook for dragging logic
const useImageComparatorHandle = (start = 0, end = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(start);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as Node)) {
      setIsMouseDown(true);
    }
  }, []);

  const handleMouseUp = useCallback(() => setIsMouseDown(false), []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMouseDown && e.x > start && e.x < end) setX(e.x);
    },
    [isMouseDown, start, end]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return [ref, x] as const;
};

// Main ImageComparator
export const ImageComparator = () => {
  const [image2Ref, x2] = useImageComparatorHandle(50, 500);

  return (
    <div className="w-full h-full relative">
      <Layer src="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?auto=format&fit=crop&w=2071&q=80" />
      <Layer
        offset={x2}
        handleBar={<HandleBar ref={image2Ref} />}
        src="https://images.unsplash.com/photo-1665502252515-8380abd497fe?auto=format&fit=crop&w=2428&q=80"
      />
    
    </div>
  );
};
