import NextLink from "next/link";
import type React from "react";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children: React.ReactNode;
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}

export function Link({ to, children, ...rest }: Props) {
  const href = to?.trim() ? to : "#";

  if (isExternalHref(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
}

