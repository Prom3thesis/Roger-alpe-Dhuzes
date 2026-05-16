import Image from "next/image";

import { SectionContainer } from "@/components/layout/SectionContainer";

const trainingImages = [
  {
    alt: "Roger traint op een loopband als voorbereiding op Alpe d'HuZes.",
    caption: "Loopbandtraining als onderdeel van de voorbereiding.",
    src: "/images/story/roger-training-treadmill-01.jpg",
  },
  {
    alt: "Roger tijdens loopbandtraining richting zijn Alpe d'HuZes-tocht.",
    caption: "Gericht werken aan conditie, helling en volhouden.",
    src: "/images/story/roger-training-treadmill-02.jpg",
  },
];

export function TrainingGallery() {
  return (
    <section className="bg-white">
      <SectionContainer className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-campaign-red">
              Training in de praktijk
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-campaign-navy sm:text-4xl">
              Geen glamourbeeld, maar echte voorbereiding.
            </h2>
            <p className="mt-5 text-base leading-7 text-campaign-muted sm:text-lg sm:leading-8">
              De trainingsfoto&apos;s laten de praktische kant zien: Roger werkt
              gericht aan wat hij straks nodig heeft op de berg. Dat maakt de
              tocht tastbaar en geloofwaardig.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {trainingImages.map((image) => (
              <figure
                className="overflow-hidden rounded-lg border border-campaign-border bg-campaign-background"
                key={image.src}
              >
                <Image
                  alt={image.alt}
                  className="h-auto w-full"
                  height={1600}
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  src={image.src}
                  width={1204}
                />
                <figcaption className="border-t border-campaign-border bg-white px-4 py-3 text-sm font-bold leading-6 text-campaign-muted">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
