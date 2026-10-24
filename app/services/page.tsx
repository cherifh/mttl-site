import type { Metadata } from "next";
import Image from "next/image";
import ShippingRoute from "@/components/ShippingRoute";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import {
  FileCheckIcon,
  TruckIcon,
  AnchorIcon,
  BoxesIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Nos services — dédouanement, transport, consignation",
  description:
    "Dédouanement import/export, transport portuaire et aéroportuaire, consignation d'armateurs et services logistiques à valeur ajoutée à Conakry.",
};

const CHAIN_STEPS = [
  {
    title: "Dédouanement",
    icon: FileCheckIcon,
    items: [
      "Import / export — fret aérien",
      "Import / export — fret maritime",
      "Import / export — fret terrestre",
    ],
    image: "/images/dedouanement.jpg",
    imageAlt: "Véhicules importés alignés avant dédouanement",
    caption: "Véhicules importés, prêts pour dédouanement",
  },
  {
    title: "Transport",
    icon: TruckIcon,
    items: [
      "Livraisons portuaires (import / export)",
      "Livraisons aéroportuaires (import / export)",
      "Distribution locale selon activité et type de marchandise",
    ],
    image: "/images/transport-1.jpg",
    imageAlt: "Semi-remorque chargée de caisses métalliques pour le transport",
    caption: "Transport de matériel lourd — chargement",
  },
  {
    title: "Consignation",
    icon: AnchorIcon,
    items: ["Consignation et représentation d'armateurs (vessel husbandry)"],
    image: "/images/operations-port.jpg",
    imageAlt: "Tracteur de terminal lors d'opérations portuaires",
    caption: "Opérations au port de Conakry",
  },
  {
    title: "Services à valeur ajoutée",
    icon: BoxesIcon,
    items: [
      "Entreposage et distribution",
      "Stockage temporaire de conteneurs et marchandises",
      "Dédouanement accéléré (fast-track)",
      "Conseil : enregistrement d'entreprise, réglementation douanière, relations avec les autorités locales",
    ],
    image: "/images/fret-aerien-1.jpg",
    imageAlt: "Caisse en bois étiquetée prête pour l'expédition en fret aérien",
    caption: "Colisage fournisseur avant expédition",
  },
];

const KEY_FIGURES: Array<{ value: number; suffix?: string; label: string }> = [
  { value: 25292, label: "Dossiers traités dans les normes" },
  { value: 840987, suffix: " t", label: "De marchandise en vrac" },
  { value: 0, label: "Pénalité douanière enregistrée" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-16 text-sand">
        <div className="absolute inset-0 animate-gradient-pan bg-port-gradient [background-size:160%_160%]" />
        <ShippingRoute />
        <div className="container-page relative">
          <Reveal>
            <h1 className="max-w-2xl font-display text-4xl font-bold text-sand">
              Une chaîne logistique complète, de bout en bout
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 max-w-prose text-sand/80">
              Chaque marchandise suit le même parcours : dédouanement,
              transport, puis distribution — avec la consignation
              d&apos;armateurs en parallèle. Voici comment nous couvrons
              chaque étape.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16">
        <ol className="grid gap-10 lg:grid-cols-2">
          {CHAIN_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 110} as="li">
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sand bg-mustard-gradient text-sand shadow-glow-mustard"
                    aria-hidden="true"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <h2 className="font-display text-2xl text-navy">
                    {step.title}
                  </h2>
                </div>
                <div className="mt-4 grid gap-5 sm:grid-cols-[14rem_1fr]">
                  <figure className="overflow-hidden rounded-2xl border border-navy/5 bg-navy">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(min-width: 640px) 14rem, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-3 py-2 text-xs text-steel">
                      {step.caption}
                    </figcaption>
                  </figure>
                  <ul className="space-y-2 text-ink/80">
                    {step.items.map((item) => (
                      <li key={item} className="max-w-prose">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </section>

      <section className="bg-gradient-to-b from-sand to-white py-16">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-2xl text-navy">Chiffres clés</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 max-w-prose text-ink/70">
              Une structure locale, aux valeurs solides, au service de la
              performance logistique de ses clients.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {KEY_FIGURES.map((figure, i) => (
              <Reveal key={figure.label} delay={160 + i * 100}>
                <div className="rounded-2xl border border-navy/5 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-glow">
                  <p className="font-display text-3xl text-navy">
                    <Counter value={figure.value} suffix={figure.suffix} />
                  </p>
                  <p className="mt-1 text-steel">{figure.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
