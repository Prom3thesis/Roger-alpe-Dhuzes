import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";

export function MemorialFinalCTA() {
  return (
    <section className="bg-campaign-navy text-white">
      <SectionContainer as="div" className="py-14 text-center sm:py-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
          Wil je iemand zichtbaar laten meenemen in Rogers actie?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Doe mee aan de herinneringsactie of steun Roger aanvullend via de
          centrale donatiepagina.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="w-full whitespace-normal px-4 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap"
            href="#meedoen"
          >
            Doe mee aan de herinneringsactie
          </Button>
          <Button
            className="w-full whitespace-normal border-white/25 bg-white/10 px-4 py-3 text-center leading-tight text-white hover:border-white/50 hover:bg-white/15 sm:w-auto sm:whitespace-nowrap"
            href="/doneren"
            variant="outline"
          >
            Doneer aanvullend
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
