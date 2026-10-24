import Image from "next/image";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-mint/10 bg-navy text-sand/80">
      <div
        className="h-px w-full bg-coral-gradient opacity-60"
        aria-hidden="true"
      />
      <div className="container-page grid gap-10 py-14 text-sm md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-wordmark.png"
            alt="Mohzain — Transit Transport & Logistics"
            width={1100}
            height={255}
            className="h-8 w-auto rounded-lg bg-sand px-2 py-1"
          />
          <p className="mt-3 max-w-prose text-sand/70">
            Consignation - dédouanement - transport — votre chaîne
            logistique maîtrisée à Conakry.
          </p>
        </div>

        <div>
          <p className="font-medium text-sand">Adresse</p>
          <p className="mt-3 flex gap-3 text-sand/70">
            <MapPinIcon className="h-5 w-5 shrink-0 text-mint" />
            <span>
              Immeuble Hafia
              <br />
              Avenue du 3 Avril 1984
              <br />
              Conakry, Guinée
            </span>
          </p>
        </div>

        <div>
          <p className="font-medium text-sand">Contact</p>
          <div className="mt-3 space-y-2 text-sand/70">
            <a
              href="mailto:Ahmed@mohzain.com"
              className="flex items-center gap-3 hover:text-mint"
            >
              <MailIcon className="h-5 w-5 shrink-0 text-mint" />
              Ahmed@mohzain.com
            </a>
            <a
              href="tel:+224628350231"
              className="flex items-center gap-3 hover:text-mint"
            >
              <PhoneIcon className="h-5 w-5 shrink-0 text-mint" />
              +224 628 35 02 31
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-sand/40">
        © {new Date().getFullYear()} mohzain.com
      </div>
    </footer>
  );
}
