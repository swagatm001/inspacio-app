import "server-only";
import blurMap from "@/generated/blur-map.json";
import imageMeta from "@/generated/image-meta.json";

const map = blurMap as Record<string, string>;
const meta = imageMeta as Record<string, { w: number; h: number }>;

/** Tiny base64 preview for a local image path, or undefined for remote/unknown images. */
export const blurFor = (src?: string | null): string | undefined => (src ? map[src] : undefined);

/** Subset of the blur map for a list of image paths, safe to pass to client components. */
export const blurMapFor = (srcs: string[]): Record<string, string> =>
  Object.fromEntries(srcs.flatMap((src) => (map[src] ? [[src, map[src]]] : [])));

export type ImageDims = { w: number; h: number };

/** Pixel dimensions for local image paths, keyed by path. Unknown paths are left out. */
export const dimsMapFor = (srcs: string[]): Record<string, ImageDims> =>
  Object.fromEntries(srcs.flatMap((src) => (meta[src] ? [[src, meta[src]]] : [])));
