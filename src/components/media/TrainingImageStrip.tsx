import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";

const imageStripItems = [
  {
    alt: "Roger traint op een loopband als voorbereiding op Alpe d'HuZes.",
    src: "/images/story/roger-training-treadmill-01.jpg",
    title: "Training opbouwen",
  },
  {
    alt: "Roger traint in de sportschool als voorbereiding op Alpe d'HuZes.",
    src: "/images/story/roger-training-treadmill-02.jpg",
    title: "Voorbereiding in de praktijk",
  },
  {
    alt: "Roger Chappin tijdens zijn bezoek aan RTV Parkstad.",
    src: "/images/media/roger-rtv-parkstad-studio.jpg",
    title: "Regionale aandacht",
  },
] as const;

export function TrainingImageStrip() {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
            Campagne in beeld
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
            Geen archief, maar echte voortgang.
          </h2>
          <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
            De beelden blijven beperkt: training en media-aandacht zijn hier
            genoeg om te laten zien dat Rogers campagne beweegt.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {imageStripItems.map((item) => (
            <figure
              className="overflow-hidden rounded-lg border border-campaign-border bg-campaign-background shadow-shell"
              key={item.src}
            >
              <Image
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover"
                height={700}
                sizes="(min-width: 768px) 33vw, calc(100vw - 40px)"
                src={item.src}
                width={900}
              />
              <figcaption className="p-4 text-sm font-black text-campaign-navy">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
