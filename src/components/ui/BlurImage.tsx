"use client";

import Image, { ImageProps } from "next/image";
import clsx from "clsx";
import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";

type BlurImageProps = Omit<ImageProps, "placeholder" | "blurDataURL" | "onLoad"> & {
  /** Tiny base64 preview from the blur map. Omit for remote images; the image still fades in. */
  blurDataURL?: string;
};

/**
 * next/image that shows a blurred preview, then fades the real image in.
 * Meant for `fill` images inside a relative, overflow-hidden container.
 */
export const BlurImage = forwardRef<HTMLImageElement, BlurImageProps>(({ blurDataURL, className, alt, ...props }, ref) => {
  const [loaded, setLoaded] = useState(false);
  const innerRef = useRef<HTMLImageElement | null>(null);

  const setRefs = useCallback(
    (node: HTMLImageElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref]
  );

  // Images served from cache can finish before hydration, so check once on mount.
  useEffect(() => {
    const img = innerRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <>
      {blurDataURL && (
        <span
          aria-hidden="true"
          className={clsx(
            "absolute inset-0 bg-cover bg-center scale-110 blur-xl transition-opacity duration-700",
            loaded ? "opacity-0" : "opacity-100"
          )}
          style={{ backgroundImage: `url(${blurDataURL})` }}
        />
      )}
      <Image
        ref={setRefs}
        alt={alt}
        {...props}
        className={clsx(className, "transition-opacity duration-700 ease-out", loaded ? "opacity-100" : "opacity-0")}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
});
BlurImage.displayName = "BlurImage";

export default BlurImage;
