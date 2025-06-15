import InfoWithTitle from "@/components/dashboard/infoWithTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { Activity, ChevronRight, Landmark, User } from "lucide-react";

export const Route = createFileRoute("/dashboard/therapist/queue")({
  component: DashboardTherapistQueue,
});

function DashboardTherapistQueue() {
  const { isMobile } = useSidebar();
  return (
    <div className="w-full flex flex-col gap-4 mt-4.5 px-4">
      {isMobile && (
        <div className="flex items-center">
          <SidebarTrigger className="mr-2" />
          <ChevronRight className="mr-1 !h-4 !w-4 text-muted-foreground/50" />
          <span className="text-sm font-medium">Warteliste</span>
        </div>
      )}
      <div className="w-full flex justify-center mt-4">
        <Card className="w-full max-w-2xl md:w-2xl border-none">
          <CardHeader className="max-sm:!px-2">
            <CardTitle className="text-lg">Warteliste</CardTitle>
            <CardDescription>
              Hier können Sie den nächsten Patienten auf der Warteliste annehmen
              oder ablehnen. Sollten Sie aktuell keine weiteren Patienten
              aufnehmen können, bitten wir Sie, keine Entscheidung zu treffen.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 max-sm:!px-2 mb-8 mt-4">
            <Card>
              <CardContent className="grid gap-4">
                <User className="w-5 h-5 text-emerald-400" />
                <div className="grid grid-cols-2 gap-4">
                  <InfoWithTitle title="Name" info="Max Mustermann" />
                  <InfoWithTitle title="Geschlecht" info="Männlich" />
                  <InfoWithTitle title="Alter" info="19 Jahre" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-4">
                <Activity className="w-5 h-5 text-emerald-400" />
                <div className="grid gap-4">
                  <InfoWithTitle
                    title="Beschwerden"
                    info="Ich habe schmerzende Hüftgelenke und kann nicht mehr laufen."
                  />
                  <InfoWithTitle
                    title="Dauer der Beschwerden"
                    info="&gt; 1 Jahr"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <InfoWithTitle
                      title="Vorangegangene Behandlungen"
                      info="ja"
                    />
                    <InfoWithTitle
                      title="Art der Behandlung"
                      info="Psychotherapie"
                    />
                  </div>
                  <InfoWithTitle
                    title="Vorliegende Diagnose"
                    info="Depression"
                  />
                  <InfoWithTitle
                    title="Aktuelle Medikation"
                    info="Paroxetin 20mg, 1x täglich"
                  />
                  <InfoWithTitle title="Suizidgedanken" info="Nein" />
                  <div className="grid grid-cols-2 gap-4">
                    <InfoWithTitle title="Videotherapie möglich" info="ja" />
                    <InfoWithTitle title="Sprache" info="Deutsch" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-4">
                <Landmark className="w-5 h-5 text-emerald-400" />
                <div className="grid grid-cols-2 gap-4">
                  <InfoWithTitle title="Versicherung" info="privat" />
                  <InfoWithTitle title="Versicherungsname" info="ÖKG" />
                  <InfoWithTitle title="Versichertennummer" info="123456789" />
                  <InfoWithTitle
                    title="Ärztliche Überweisung vorhanden"
                    info="ja"
                  />
                  <InfoWithTitle title="Kostenübernahme geklärt" info="ja" />
                </div>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter className="flex justify-between gap-4">
            <Button className="bg-red-500 hover:bg-red-400">Ablehnen</Button>
            <Button>Annehmen</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
