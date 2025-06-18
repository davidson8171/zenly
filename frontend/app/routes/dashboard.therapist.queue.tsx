import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronRight, X } from "lucide-react";
import {
  PatientInfoPerson,
  PatientInfoTherapy,
  PatientInfoInsurance,
} from "@/components/patientInfo/patientInfo";

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
            <div className="flex justify-between gap-4">
              <Button variant="secondary">
                <X className="!h-4 !w-4" />
                Ablehnen
              </Button>
              <Button>
                <Check className="!h-4 !w-4" />
                Annehmen
              </Button>
            </div>
            <PatientInfoPerson
              name="Max Mustermann"
              gender="Männlich"
              age="19 Jahre"
            />
            <PatientInfoTherapy
              complaints="Ich habe schmerzende Hüftgelenke und kann nicht mehr laufen."
              duration="&gt; 1 Jahr"
              previousTreatments="ja"
              previousTherapyType="Psychotherapie"
              diagnosis="Depression"
              medication="Paroxetin 20mg, 1x täglich"
              suicideThoughts="Nein"
              videoTherapy="ja"
              language="Deutsch"
            />
            <PatientInfoInsurance
              insurance="privat"
              insuranceName="ÖKG"
              insuranceNumber="123456789"
              medicalTransfer="ja"
              costAgreement="ja"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
