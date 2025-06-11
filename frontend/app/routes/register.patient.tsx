"use client";

import Navbar from "@/components/navbar/navbar";
import AgeCard from "@/components/registerCards/patient/ageCard";
import GenderCard from "@/components/registerCards/patient/genderCard";
import NameCard from "@/components/registerCards/patient/nameCard";
import DurationCard from "@/components/registerCards/patient/durationCard";
import WhatHelpCard from "@/components/registerCards/patient/whatHelpCard";
import VideoCard from "@/components/registerCards/patient/videoCard";
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
import LanguageCard from "@/components/registerCards/patient/languageCard";
import FormerTherapyCard from "@/components/registerCards/patient/formerTherapyCard";
import MedicationCard from "@/components/registerCards/patient/medicationCard";
import DiagnoseCard from "@/components/registerCards/patient/diagnoseCard";
import SuicideCard from "@/components/registerCards/patient/suicideCard";
import InsuranceTypeCard from "@/components/registerCards/patient/insuranceTypeCard";
import InsuranceNumberCard from "@/components/registerCards/patient/insuranceNumberCard";
import TransferCard from "@/components/registerCards/patient/transferCard";
import CostCard from "@/components/registerCards/patient/costCard";
import PhoneCard from "@/components/registerCards/patient/phoneCard";
import EmailCard from "@/components/registerCards/patient/emailCard";
import PasswordCard from "@/components/registerCards/patient/passwordCard";

export const Route = createFileRoute("/register/patient")({
  component: RegisterPatient,
});

function RegisterPatient() {
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
                <NameCard pageNumber={1} />
              </CarouselItem>
              <CarouselItem>
                <GenderCard pageNumber={2} />
              </CarouselItem>
              <CarouselItem>
                <AgeCard pageNumber={3} />
              </CarouselItem>
              <CarouselItem>
                <WhatHelpCard pageNumber={4} />
              </CarouselItem>
              <CarouselItem>
                <DurationCard pageNumber={5} />
              </CarouselItem>
              <CarouselItem>
                <VideoCard pageNumber={6} />
              </CarouselItem>
              <CarouselItem>
                <LanguageCard pageNumber={7} />
              </CarouselItem>
              <CarouselItem>
                <FormerTherapyCard pageNumber={8} />
              </CarouselItem>
              <CarouselItem>
                <MedicationCard pageNumber={9} />
              </CarouselItem>
              <CarouselItem>
                <DiagnoseCard pageNumber={10} />
              </CarouselItem>
              <CarouselItem>
                <SuicideCard pageNumber={11} />
              </CarouselItem>
              <CarouselItem>
                <InsuranceTypeCard pageNumber={12} />
              </CarouselItem>
              <CarouselItem>
                <InsuranceNumberCard pageNumber={13} />
              </CarouselItem>
              <CarouselItem>
                <TransferCard pageNumber={14} />
              </CarouselItem>
              <CarouselItem>
                <CostCard pageNumber={15} />
              </CarouselItem>
              <CarouselItem>
                <PhoneCard pageNumber={16} />
              </CarouselItem>
              <CarouselItem>
                <EmailCard pageNumber={17} />
              </CarouselItem>
              <CarouselItem>
                <PasswordCard pageNumber={18} />
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
