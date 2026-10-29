import React from "react";
import { instagram } from "@/constants/instagram";
import { blurFor } from "@/utils/blur";
import { BlurImage } from "../ui/BlurImage";
import { InstagramIcon } from "../ui/Icons";

export const InstagramStrip: React.FC = () => {
  if (!instagram.posts.length) return null;
  return (
    <section className="bg-brand-cream pt-16 pb-12" aria-labelledby="instagram-heading">
      <div className="max-w-[1253px] mx-auto px-4 md:px-7 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <div>
          <p className="font-body text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-brand-tan mb-2">Follow along</p>
          <h2 id="instagram-heading" className="font-heading text-2xl md:text-3xl font-medium text-brand-ink">
            Latest from the studio
          </h2>
        </div>
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center gap-2 text-brand-brown font-medium underline-offset-4 hover:underline"
        >
          <InstagramIcon className="w-6 h-6" />
          {instagram.handle}
        </a>
      </div>
      <ul className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 px-3 md:px-5">
        {instagram.posts.slice(0, 6).map((post, i) => (
          <li key={`${post.image}-${i}`}>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.alt} (opens Instagram)`}
              className="group relative block aspect-square overflow-hidden rounded-2xl bg-brand-wash transition-all duration-500 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <BlurImage src={post.image} blurDataURL={blurFor(post.image)} alt="" fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" />
              </div>
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition duration-300 group-hover:bg-black/35 group-hover:opacity-100">
                <InstagramIcon className="w-9 h-9 drop-shadow" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InstagramStrip;
