import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InputWithLabel from "@/components/ui/inputWithLabel";
import { Label } from "@/components/ui/label";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, CornerDownRight, Mail } from "lucide-react";

export const Route = createFileRoute("/dashboard/therapist/help")({
  component: DashboardTherapistHelp,
});

function DashboardTherapistHelp() {
  const { isMobile } = useSidebar();

  return (
    <div className="w-full flex flex-col gap-4 mt-4.5 px-4">
      {isMobile && (
        <div className="flex items-center">
          <SidebarTrigger className="mr-2" />
          <ChevronRight className="mr-1 !h-4 !w-4 text-muted-foreground/50" />
          <span className="text-sm font-medium">Hilfe</span>
        </div>
      )}
      <div className="w-full flex justify-center mt-4">
        <Card className="w-full max-w-2xl border-none">
          <CardHeader className="max-sm:!px-2">
            <CardTitle className="text-lg">Kontakt</CardTitle>
            <CardDescription>
              Schreiben Sie uns eine Nachricht, wenn Sie Hilfe benötigen, einen
              Verbesserungsvorschlag oder Fragen haben.
            </CardDescription>
          </CardHeader>
          <CardContent className="max-sm:!px-2 mb-8 mt-4">
            <Card className="max-sm:border-none max-sm:!py-0">
              <CardHeader className="grid gap-8 max-sm:!p-0">
                <Mail className="!w-5 !h-5 text-emerald-400 sm:block hidden" />
                <InputWithLabel
                  label="Betreff"
                  placeholder="Frage zu..."
                  type="text"
                />
                <div className="flex flex-col">
                  <Label className="text-md leading-none">Nachricht</Label>
                  <Textarea
                    className="border-none px-0 mt-1 max-h-96 !placeholder-gray-500/25 !text-base peer"
                    placeholder="Ihre Nachricht..."
                  />
                  <div className="h-0.5 w-full mt-0.5 rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
                </div>
              </CardHeader>
              <CardFooter className="flex justify-end mt-8 max-sm:!px-2">
                <Button>
                  <CornerDownRight className="!w-4 !h-4" />
                  Senden
                </Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
