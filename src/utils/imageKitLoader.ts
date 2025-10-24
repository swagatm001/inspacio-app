"use client"

import { ImageLoaderProps } from "next/image";

const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if(src.startsWith("/images")) return src;
  if(src.includes("googleusercontent")) return src;
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  const imageKitId = "0icmp9gly"
  var urlEndpoint = `https://ik.imagekit.io/${imageKitId}`;
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

export default imageKitLoader

//https://ik.imagekit.io/yc3qb8x6t/kds/antology/1689260576477.jpg?updatedAt=1711899798605