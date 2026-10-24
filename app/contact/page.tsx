import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez MTTL à Conakry pour vos besoins de dédouanement, transport ou consignation. Adresse, téléphone, email et formulaire de contact.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-16 text-sand">
        <div className="absolute inset-0 animate-gradient-pan bg-port-gradient [background-size:160%_160%]" />
        <div className="container-page relative">
          <Reveal>
            <h1 className="max-w-2xl font-display text-4xl font-bold text-sand">
              Parlons de votre prochaine opération
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-xl text-navy">Coordonnées</h2>
          <div className="mt-4 space-y-4 text-ink/85">
            <p className="flex gap-3">
              <MapPinIcon className="h-5 w-5 shrink-0 text-mustard" />
              <span>
                Immeuble Hafia
                <br />
                Avenue du 3 Avril 1984
                <br />
                Conakry, Guinée
              </span>
            </p>
            <a
              href="mailto:Ahmed@mohzain.com"
              className="flex items-center gap-3 hover:text-mustard"
            >
              <MailIcon className="h-5 w-5 shrink-0 text-mustard" />
              Ahmed@mohzain.com
            </a>
            <a
              href="tel:+224628350231"
              className="flex items-center gap-3 hover:text-mustard"
            >
              <PhoneIcon className="h-5 w-5 shrink-0 text-mustard" />
              +224 628 35 02 31
            </a>
          </div>
        </Reveal>

        {/* Formulaire statique : à connecter à un service d'envoi
            (ex. Resend, Formspree, ou une route API Next.js) lors de
            la mise en production. */}
        <Reveal delay={100}>
          <form
            className="space-y-4 rounded-2xl border border-navy/5 bg-white p-6 shadow-sm"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink"
              >
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-steel/30 bg-sand/40 px-3 py-2 text-ink transition-colors focus:border-mustard focus:outline-none focus:ring-2 focus:ring-mustard/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-steel/30 bg-sand/40 px-3 py-2 text-ink transition-colors focus:border-mustard focus:outline-none focus:ring-2 focus:ring-mustard/20"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-steel/30 bg-sand/40 px-3 py-2 text-ink transition-colors focus:border-mustard focus:outline-none focus:ring-2 focus:ring-mustard/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-mustard-gradient px-6 py-3 font-medium text-sand shadow-glow-mustard transition-transform hover:scale-[1.02] sm:w-auto"
            >
              Envoyer le message
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
