import Navbar from "@/components/navbar/navbar";
import AgeCard from "@/components/registerCards/patient/ageCard";
import GenderCard from "@/components/registerCards/patient/genderCard";
import NameCard from "@/components/registerCards/patient/nameCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/register/therapist")({
  component: RegisterTherapist,
});

function RegisterTherapist() {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-fit flex flex-col space-y-10">
          <Carousel
            className="max-w-xl w-screen"
            opts={{ watchDrag: false, align: "start" }}
            setApi={setApi}
          >
            <CarouselContent className="px-1">
              <CarouselItem>
                <NameCard pageNumber={1} showTitle />
              </CarouselItem>
              <CarouselItem>
                <GenderCard pageNumber={2} />
              </CarouselItem>
              <CarouselItem>
                <AgeCard pageNumber={3} />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="w-full pl-16 pr-9 flex justify-between items-center">
            <Button
              variant="secondary"
              className={`${canScrollPrev ? "opacity-100" : "opacity-0 cursor-default"}`}
              onClick={() => (api && canScrollPrev ? api.scrollPrev() : null)}
            >
              <ArrowLeft className="!w-4 !h-4" />
              <span className="hidden md:block">Zurück</span>
            </Button>
            <Button
              variant="default"
              className={`${canScrollNext ? "opacity-100" : "opacity-0 cursor-default"}`}
              onClick={() => (api && canScrollNext ? api.scrollNext() : null)}
            >
              <span className="hidden md:block">Weiter</span>
              <ArrowRight className="!w-4 !h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
