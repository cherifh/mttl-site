"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/MobileNav";
import { AnchorIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/consignation", label: "Consignation" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-mint/10 bg-navy/90 backdrop-blur-md">
      <div className="container-page relative flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral-gradient text-sand transition-transform group-hover:scale-105">
            <AnchorIcon className="h-[18px] w-[18px]" />
          </span>
          <span className="font-display text-lg font-bold text-sand">
            MTTL
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-1 text-sm text-sand/90">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-lg px-3 py-2 transition-colors ${
                      active ? "text-mint" : "hover:text-mint"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-3 -bottom-px h-px bg-mint transition-opacity ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-coral-gradient px-5 py-2 text-sm font-medium text-sand shadow-glow-coral transition-transform hover:scale-105 md:inline-block"
        >
          Nous contacter
        </Link>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
