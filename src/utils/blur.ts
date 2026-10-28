import "server-only";
import blurMap from "@/generated/blur-map.json";

const map = blurMap as Record<string, string>;

/** Tiny base64 preview for a local image path, or undefined for remote/unknown images. */
export const blurFor = (src?: string | null): string | undefined => (src ? map[src] : undefined);

/** Subset of the blur map for a list of image paths, safe to pass to client components. */
export const blurMapFor = (srcs: string[]): Record<string, string> =>
  Object.fromEntries(srcs.flatMap((src) => (map[src] ? [[src, map[src]]] : [])));
