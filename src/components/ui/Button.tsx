import Link from "next/link";
import clsx from "clsx";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "inverse" | "link";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "font-body inline-flex items-center justify-center gap-2.5 font-medium uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-brown/50 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "rounded-sm bg-brand-orange text-white hover:bg-brand-orange-dark",
  secondary: "rounded-sm border border-brand-ink/35 bg-transparent text-brand-ink hover:border-brand-ink hover:bg-brand-ink hover:text-white",
  inverse: "rounded-sm bg-white text-brand-ink hover:bg-brand-cream",
  link: "rounded-sm normal-case tracking-normal text-brand-brown underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-5 text-[11px]",
  md: "h-12 px-7 text-xs",
  lg: "h-14 px-8 text-[13px]",
};

const linkSizes: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const ArrowRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={clsx("w-5 h-5", className)} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Appends a right arrow after the label. */
  arrow?: boolean;
  /** Icon rendered before the label. */
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = AnchorProps | NativeButtonProps;

const classesFor = (variant: ButtonVariant, size: ButtonSize, className?: string) =>
  clsx(base, variants[variant], variant === "link" ? linkSizes[size] : sizes[size], className);

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary", size = "md", arrow = false, icon, className, children } = props;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && <ArrowRight className={variant === "link" ? "w-4 h-4" : undefined} />}
    </>
  );

  if (props.href !== undefined) {
    const { variant: _v, size: _s, arrow: _a, icon: _i, className: _c, children: _ch, href, ...rest } = props;
    const external = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
    if (external) {
      return (
        <a href={href} className={classesFor(variant, size, className)} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classesFor(variant, size, className)} {...rest}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, arrow: _a, icon: _i, className: _c, children: _ch, type, ...rest } = props;
  return (
    <button type={type ?? "button"} className={classesFor(variant, size, className)} {...rest}>
      {content}
    </button>
  );
};

export default Button;
