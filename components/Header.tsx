"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/MobileNav";

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
        <Link
          href="/"
          className="flex items-center rounded-lg bg-sand px-3 py-1.5 transition-transform hover:scale-105"
        >
          <Image
            src="/images/logo-wordmark.png"
            alt="Mohzain — Transit Transport & Logistics"
            width={1100}
            height={255}
            priority
            className="h-7 w-auto"
          />
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
          className="hidden rounded-full bg-mustard-gradient px-5 py-2 text-sm font-medium text-sand shadow-glow-mustard transition-transform hover:scale-105 md:inline-block"
        >
          Nous contacter
        </Link>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
