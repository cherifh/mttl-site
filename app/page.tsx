import Link from "next/link";
import ShippingRoute from "@/components/ShippingRoute";
import PortBadge from "@/components/PortBadge";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Gallery, { type GalleryPhoto } from "@/components/Gallery";
import {
  FileCheckIcon,
  TruckIcon,
  AnchorIcon,
  BoxesIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/icons";

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/dedouanement.jpg",
    alt: "Véhicules importés alignés avant dédouanement",
    caption: "Véhicules importés, prêts pour dédouanement",
    wide: true,
  },
  {
    src: "/images/operations-port.jpg",
    alt: "Tracteur de terminal lors d'opérations portuaires",
    caption: "Opérations au port de Conakry",
  },
  {
    src: "/images/transport-1.jpg",
    alt: "Semi-remorque chargée de caisses métalliques pour le transport",
    caption: "Transport de matériel lourd — chargement",
  },
  {
    src: "/images/transport-2.jpg",
    alt: "Structure métallique chargée sur une semi-remorque",
    caption: "Transport de structures métalliques",
  },
  {
    src: "/images/fret-aerien-1.jpg",
    alt: "Caisse en bois étiquetée prête pour l'expédition en fret aérien",
    caption: "Colisage fournisseur avant expédition — fret aérien",
  },
  {
    src: "/images/fret-aerien-2.jpg",
    alt: "Caisses et palettes préparées pour le chargement",
    caption: "Préparation d'un envoi pour expédition",
  },
];

const SERVICES_OVERVIEW = [
  {
    title: "Dédouanement",
    description:
      "Import/export en fret aérien, maritime et terrestre, géré de bout en bout.",
    icon: FileCheckIcon,
  },
  {
    title: "Transport",
    description:
      "Livraisons portuaires, aéroportuaires et distribution locale adaptée à votre marchandise.",
    icon: TruckIcon,
  },
  {
    title: "Consignation",
    description:
      "Représentation d'armateurs et coordination des escales (vessel husbandry).",
    icon: AnchorIcon,
  },
  {
    title: "Services à valeur ajoutée",
    description:
      "Entreposage, stockage temporaire, dédouanement accéléré, conseil réglementaire.",
    icon: BoxesIcon,
  },
];

const STATS: Array<{ value: number; prefix?: string; label: string }> = [
  { value: 100, prefix: "+", label: "Camions gérés" },
  { value: 30, prefix: "+", label: "Collaborateurs" },
  { value: 25292, label: "Dossiers traités dans les normes" },
];

const REASSURANCE_POINTS = [
  "Une équipe dédiée à chaque dossier, pas un standard générique",
  "0 pénalité douanière enregistrée à ce jour",
  "Partenaire reconnu des douanes guinéennes",
  "Une croissance volontairement sélective pour préserver la qualité de service",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-sand">
        <div className="absolute inset-0 animate-gradient-pan bg-port-gradient [background-size:160%_160%]" />
        <ShippingRoute />
        <PortBadge className="absolute right-6 top-10 hidden animate-float sm:block" />

        <div className="container-page relative flex flex-col gap-6 py-20 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-mint">
              Transit &amp; logistique · Conakry, Guinée
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-sand md:text-6xl">
              Votre chaîne logistique{" "}
              <span className="text-shimmer">maîtrisée</span> à Conakry
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-prose text-lg text-sand/80">
              Consignation - dédouanement - transport : MTTL prend en charge
              l&apos;intégralité de vos opérations import-export en Guinée,
              avec une équipe dédiée à chaque dossier.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-mustard-gradient px-6 py-3 font-medium text-sand shadow-glow-mustard transition-transform hover:scale-105"
              >
                Nos services
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-sand/30 px-6 py-3 font-medium text-sand transition-colors hover:border-mint hover:text-mint"
              >
                Nous contacter
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="rounded-2xl border border-navy/5 bg-white/60 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-glow">
                <p className="font-display text-3xl text-navy">
                  <Counter value={stat.value} prefix={stat.prefix} />
                </p>
                <p className="mt-1 text-steel">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-steel/10 bg-gradient-to-b from-white to-sand py-16">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl text-navy">
              Ce que nous prenons en charge
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {SERVICES_OVERVIEW.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={i * 90}>
                  <div className="group h-full rounded-2xl border border-navy/5 bg-white p-6 transition-all hover:-translate-y-1 hover:border-mint/40 hover:shadow-glow">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-mint transition-colors group-hover:bg-mustard-gradient group-hover:text-sand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-ink/70">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={360}>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 font-medium text-navy hover:text-mustard"
            >
              Voir le détail des services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-white py-16">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl text-navy">
              Nos opérations en images
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 max-w-prose text-ink/70">
              Du colisage chez nos fournisseurs jusqu&apos;aux quais de
              Conakry — un aperçu concret des dossiers que nous gérons.
            </p>
          </Reveal>
          <div className="mt-8">
            <Gallery photos={GALLERY_PHOTOS} />
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <Reveal>
          <h2 className="font-display text-2xl text-navy">Pourquoi MTTL</h2>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {REASSURANCE_POINTS.map((point, i) => (
            <Reveal key={point} delay={i * 80}>
              <li className="flex gap-3 rounded-xl border border-navy/5 bg-white/60 p-4">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint/15 text-teal"
                  aria-hidden="true"
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-ink/85">{point}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-navy py-14 text-sand">
        <div className="absolute inset-0 animate-gradient-pan bg-mesh-glow [background-size:160%_160%]" />
        <div className="container-page relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl">
            Une opération à préparer ? Parlons-en.
          </p>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-mustard-gradient px-6 py-3 font-medium text-sand shadow-glow-mustard transition-transform hover:scale-105"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
