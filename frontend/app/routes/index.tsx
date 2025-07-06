import InfoWithTitle from "@/components/dashboard/infoWithTitle";
import Navbar from "@/components/navbar/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                Bekomme schnell und einfach einen Therapieplatz in deiner Nähe
              </motion.h1>
              <motion.a
                href="/register/patient"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 100, x: 0 }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
              >
                <Button className="w-fit scale-110 shadow-lg shadow-emerald-400/20 max-w-full">
                  Jetzt loslegen <ArrowUpRight className="!h-4 !w-4" />
                </Button>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="flex space-x-8 justify-center">
          <div className="border border-accent h-full" />
          <div className="grid gap-32">
            <div className="grid gap-4">
              <Badge className="bg-gradient-to-br from-teal-400 to-green-400 text-white py-1">
                1. Schritt
              </Badge>
              <h2 className="text-xl font-medium tracking-tight">
                Registrieren
              </h2>
              <p className="text-muted-foreground leading-tight">
                Ich weiß nicht was hier reinkommt aber das müssen wir dann noch
                bestimmen.
              </p>
            </div>
            <div className="grid gap-4">
              <Badge className="bg-gradient-to-br from-teal-400 to-green-400 text-white py-1">
                2. Schritt
              </Badge>
              <h2 className="text-xl font-medium tracking-tight">
                Therapeuten auswählen
              </h2>
              <p className="text-muted-foreground leading-tight">
                Ich weiß nicht was hier reinkommt aber das müssen wir dann noch
                bestimmen.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-60 mb-30 flex justify-center relative w-full py-16">
          <div className="relative grid grid-cols-2 gap-16">
            <motion.div
              className="absolute top-1/2 right-24 -translate-y-1/2"
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Heart className="h-32 w-32 blur-xs" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-24 -translate-y-1/2"
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Activity className="h-32 w-32 blur-xs" />
            </motion.div>
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
      </div>
    </div>
  );
}
