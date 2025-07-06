import InfoWithTitle from "@/components/dashboard/infoWithTitle";
import ChatAnimation from "@/components/landing/chatAnimation";
import ChoseTherapistAnimation from "@/components/landing/choseTherapistAnimation";
import RegisterAnimation from "@/components/landing/registerAnimation";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Check,
  Clock,
  Heart,
  Lock,
  Rows3,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-screen"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "35px 35px",
            maskImage: `linear-gradient(to bottom, black 0%, black 60%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, black 0%, black 60%, transparent 100%)`,
          }}
        />
      </div>
      <Navbar />
      <div className="w-full md:w-10/12 lg:w-8/12 2xl:w-6/12 px-4 grid relative z-10">
        <div className="h-screen">
          <div className="flex w-full mt-44">
            <div className="flex space-y-20 w-full flex-col justify-center items-center">
              <motion.h1
                className="text-5xl font-medium tracking-tight text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.6 }}
              >
                Bekomme schnell und einfach einen Therapieplatz in deiner Nähe
              </motion.h1>
              <motion.a
                href="/register/patient"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 100, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }}
              >
                <Button className="w-fit scale-110 shadow-lg shadow-emerald-400/20 max-w-full">
                  Jetzt loslegen <ArrowUpRight className="!h-4 !w-4" />
                </Button>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_32px_1fr] gap-x-8 mt-32">
          <div className="h-56 w-full flex flex-col items-center">
            <div className="h-9" />
            <RegisterAnimation />
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <div className="w-6 aspect-square bg-gradient-to-br from-teal-400 to-green-400 text-white text-sm rounded-full flex items-center justify-center">
              1
            </div>
            <div className="border border-accent h-full w-fit" />
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-medium tracking-tight leading-6">
              Registrieren
            </h2>
            <p className="text-muted-foreground leading-tight">
              Beantworte unseren Fragebogen und denk dir noch einen kack Text
              aus amina.
            </p>
          </div>
          <div className="col-start-2 flex justify-center">
            <div className="border border-accent h-60 w-fit mb-3" />
          </div>
          <div className="row-start-3 flex flex-col space-y-2">
            <h2 className="text-xl font-medium tracking-tight leading-6">
              Therapeuten auswählen
            </h2>
            <p className="text-muted-foreground leading-tight">
              Wähle Therapeuten nach deinen Präferenzen oder einfach direkt alle
              aus.
            </p>
          </div>
          <div className="row-start-3 flex flex-col space-y-3 items-center">
            <div className="w-6 aspect-square bg-gradient-to-br from-teal-400 to-green-400 text-white text-sm rounded-full flex items-center justify-center">
              2
            </div>
            <div className="border border-accent h-full w-fit" />
          </div>
          <div className="row-start-3 w-full h-56 flex flex-col items-center">
            <div className="h-9" />
            <ChoseTherapistAnimation />
          </div>
          <div className="col-start-2 flex justify-center">
            <div className="border border-accent h-60 w-fit mb-3" />
          </div>
          <div className="row-start-5 h-56 flex flex-col items-center w-full">
            <div className="h-9" />
            <ChatAnimation />
          </div>
          <div className="row-start-5 flex flex-col space-y-3 items-center">
            <div className="w-6 aspect-square bg-gradient-to-br from-teal-400 to-green-400 text-white text-sm rounded-full flex items-center justify-center">
              3
            </div>
            <div className="border border-accent h-full w-fit" />
          </div>
          <div className="row-start-5 flex flex-col space-y-2">
            <h2 className="text-xl font-medium tracking-tight leading-6">
              Ersttermin vereinbaren
            </h2>
            <p className="text-muted-foreground leading-tight">
              Mithilfe unseres Chat-Systems kannst du mit dem Therapeuten auf
              unserer Platform kommuniziereun und einen Termin vereinbaren.
            </p>
          </div>
          <div className="col-start-2 flex justify-center">
            <div className="border border-accent h-60 w-fit mb-3" />
          </div>
        </div>
        <div className="mt-96 flex justify-center relative w-full py-16">
          <div className="relative grid grid-cols-2 gap-16">
            <div className="absolute w-full h-full flex justify-center">
              <div className="sticky top-2/6 flex justify-between w-8/12 h-fit">
                <motion.div
                  animate={{ x: [0, 16, 0], y: [0, -6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <Activity className="h-24 w-24 blur-xs" />
                </motion.div>
                <motion.div
                  className="mt-16"
                  animate={{ x: [0, -14, 0], y: [0, 8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Heart className="h-24 w-24 blur-xs" />
                </motion.div>
              </div>
            </div>
            <Card className="max-w-80 bg-white/30 backdrop-blur-xs">
              <CardContent className="grid gap-4">
                <Rows3 className="!w-5 !h-5 text-emerald-400" />
                <div className="grid grid-cols-1 gap-1">
                  <InfoWithTitle
                    title="Warteliste"
                    info="Wir verwenden ein faires und schnelles Wartelistensystem."
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-80 bg-white/30 backdrop-blur-xs">
              <CardContent className="grid gap-4">
                <Check className="!w-5 !h-5 text-emerald-400" />
                <div className="grid grid-cols-1 gap-1">
                  <InfoWithTitle
                    title="Verifizierung"
                    info="Alle Therapeuten wurden überprüft und verifiziert."
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-80 bg-white/30 backdrop-blur-xs">
              <CardContent className="grid gap-4">
                <Lock className="!w-5 !h-5 text-emerald-400" />
                <div className="grid grid-cols-1 gap-1">
                  <InfoWithTitle
                    title="Sicherheit"
                    info="Deine Daten werden sicher auf deutschen Servern gespeichert."
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-80 bg-white/30 backdrop-blur-xs">
              <CardContent className="grid gap-4">
                <Clock className="!w-5 !h-5 text-emerald-400" />
                <div className="grid grid-cols-1 gap-1">
                  <InfoWithTitle
                    title="Zeitersparnis"
                    info="Das Nutzen von Zenq spart dir und Therapeuten deutlich Zeit."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-96 w-full">
          <div className="flex space-y-20 w-full flex-col justify-center items-center">
            <div className="flex flex-col space-y-4">
              <motion.h1
                className="text-3xl font-medium tracking-tight text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.6 }}
              >
                Sind Sie Therapeut und suchen noch Patienten?
              </motion.h1>
              <motion.p
                className="text-sm text-muted-foreground leading-snug text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.6, delay: 0.3 }}
              >
                Mithilfe unserer Platform gelangen Sie einfach an neue
                Patienten. Mithilfe unserer Platform gelangen Sie einfach an
                neue Patienten.
              </motion.p>
            </div>
            <motion.a
              href="/register/therapist"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 100, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }}
            >
              <Button className="w-fit shadow-lg shadow-emerald-400/20 max-w-full">
                Hier Registrieren <ArrowUpRight className="!h-4 !w-4" />
              </Button>
            </motion.a>
          </div>
        </div>
        <div className="w-full mt-96">
          <Separator className="bg-accent w-full" />
          <div className="my-16 flex justify-between">
            <div className="flex flex-col space-y-4 max-w-52">
              <a href="/" className="text-sm">
                Zenq
              </a>
              <p className="text-muted-foreground text-sm leading-snug">
                Eine Platform, die Therapeuten und Patienten effektiv verbindet.
              </p>
            </div>
            <div className="flex space-x-12">
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-primary">Dienstleistungen</p>
                <div className="flex flex-col space-y-2">
                  <a
                    href="/register/patient"
                    className="text-sm text-muted-foreground hover:text-primary hover:cursor-pointer"
                  >
                    Als Patient registrieren
                  </a>
                  <a
                    href="/register/therapist"
                    className="text-sm text-muted-foreground hover:text-primary hover:cursor-pointer"
                  >
                    Als Therapeut registrieren
                  </a>
                  <a
                    href="/login"
                    className="text-sm text-muted-foreground hover:text-primary hover:cursor-pointer"
                  >
                    Anmelden
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-primary">Rechtliches</p>
                <div className="flex flex-col space-y-2">
                  <a
                    href="privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary hover:cursor-pointer"
                  >
                    Datenschutzerklärung
                  </a>
                  <a
                    href="/imprint"
                    className="text-sm text-muted-foreground hover:text-primary hover:cursor-pointer"
                  >
                    Impressum
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-primary">Kontakt</p>
                <div className="flex flex-col space-y-2">
                  <a
                    href="mailto:info@zenq.at"
                    className="text-sm text-muted-foreground hover:text-primary hover:cursor-pointer"
                  >
                    info@zenq.at
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
