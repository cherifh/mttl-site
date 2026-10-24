import type { Metadata } from "next";
import Link from "next/link";
import ShippingRoute from "@/components/ShippingRoute";
import Reveal from "@/components/Reveal";
import { AnchorIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Consignation",
  description:
    "MTTL assure la consignation et la représentation d'armateurs (vessel husbandry) dans le port de Conakry, Guinée.",
};

export default function ConsignationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-16 text-sand">
        <div className="absolute inset-0 animate-gradient-pan bg-port-gradient [background-size:160%_160%]" />
        <ShippingRoute />
        <div className="container-page relative">
          <Reveal>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mustard-gradient text-sand shadow-glow-mustard">
              <AnchorIcon className="h-6 w-6" />
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold text-sand">
              Consignation et représentation d&apos;armateurs
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-prose text-sand/80">
              Nous représentons les armateurs à quai et coordonnons chaque
              escale : formalités portuaires, relations avec les autorités,
              suivi des opérations d&apos;escale (vessel husbandry).
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16">
        <Reveal>
          <div className="max-w-prose rounded-2xl border border-navy/5 bg-white/60 p-6">
            <p className="text-ink/85">
              Notre équipe assure l&apos;interface entre l&apos;armateur, les
              autorités portuaires guinéennes et les opérateurs locaux, pour
              garantir une escale fluide et conforme aux réglementations en
              vigueur.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-mustard-gradient px-6 py-3 font-medium text-sand shadow-glow-mustard transition-transform hover:scale-105"
            >
              Discuter d&apos;une escale à venir
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
