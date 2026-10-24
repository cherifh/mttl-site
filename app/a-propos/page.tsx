import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "MTTL, entreprise de transit, transport et logistique basée à Conakry — équipe, valeurs et savoir-faire au service de vos opérations import-export.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-16 text-sand">
        <div className="absolute inset-0 animate-gradient-pan bg-port-gradient [background-size:160%_160%]" />
        <div className="container-page relative">
          <Reveal>
            <h1 className="max-w-2xl font-display text-4xl font-bold text-sand">
              À propos de MTTL
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl text-navy">
              Le mot du fondateur
            </h2>
            <blockquote className="relative mt-4 max-w-prose rounded-2xl border border-navy/5 bg-white p-6 text-ink/85 shadow-sm">
              <span
                className="absolute left-0 top-6 h-10 w-1 rounded-full bg-coral-gradient"
                aria-hidden="true"
              />
              <p>
                « Le travail d&apos;équipe et la satisfaction client sont
                notre devise. Notre objectif est de développer notre
                activité, mais nous resterons sélectifs dans notre approche
                commerciale : croissance et capacité doivent rester liées
                pour préserver un bon niveau de qualité de service.
              </p>
              <p className="mt-4">
                Avec nous, vous êtes assurés de bénéficier d&apos;une équipe
                dédiée qui vous propose un service sur mesure — pour vous
                permettre de vous concentrer sur votre cœur de métier. »
              </p>
              <footer className="mt-4 text-sm text-steel">
                Ahmed Cherif — Fondateur &amp; Directeur Général
              </footer>
            </blockquote>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-navy/5 bg-white/60 p-6">
                <h2 className="font-display text-2xl text-navy">
                  Un savoir-faire
                </h2>
                <p className="mt-3 max-w-prose text-ink/80">
                  Une couverture nationale et internationale, des réseaux de
                  partenaires présents dans le monde entier, et la maîtrise
                  des réglementations propres à chaque pays.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="rounded-2xl border border-navy/5 bg-white/60 p-6">
                <h2 className="font-display text-2xl text-navy">
                  Un savoir-être
                </h2>
                <p className="mt-3 max-w-prose text-ink/80">
                  Une gestion personnalisée de vos dossiers, un interlocuteur
                  dédié, et la mobilisation d&apos;équipes expertes à chaque
                  étape.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
