"use client";

import AgeCard from "@/components/registerCards/ageCard";
import NameCard from "@/components/registerCards/nameCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/register/patient")({
  component: Register,
});

function Register() {
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
    <div className="h-screen w-screen flex justify-center pt-56">
      <div className="w-fit flex flex-col items-center space-y-10">
        <Carousel
          className="max-w-2xl w-screen"
          opts={{ watchDrag: false, align: "start" }}
          setApi={setApi}
        >
          <CarouselContent className="px-1">
            <CarouselItem>
              <NameCard />
            </CarouselItem>
            <CarouselItem>
              <AgeCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="w-full pl-16 pr-9 flex justify-between items-center">
          <Button
            variant="secondary"
            className={`${canScrollPrev ? "opacity-100" : "opacity-0"}`}
            onClick={() => (api && canScrollPrev ? api.scrollPrev() : null)}
          >
            <ArrowLeft className="!w-4 !h-4" />
            <span className="hidden md:block">Zurück</span>
          </Button>
          <Button
            variant="default"
            className={`${canScrollNext ? "opacity-100" : "opacity-0"} !bg-gradient-to-br !from-teal-400 !to-green-400 hover:!via-emerald-400`}
            onClick={() => (api && canScrollNext ? api.scrollNext() : null)}
          >
            <span className="hidden md:block">Weiter</span>
            <ArrowRight className="!w-4 !h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
