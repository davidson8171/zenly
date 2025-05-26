import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/therapist/queue")({
  component: DashboardTherapistQueue,
});

function DashboardTherapistQueue() {
  return (
    <div className="w-full flex flex-col gap-14 mt-4 px-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 !h-4" />
        <span className="text-sm font-medium">Warteliste</span>
      </div>
      <div className="w-full flex justify-center">
        <Card className="w-full max-w-4xl bg-muted/50 border-none">
          <CardHeader>
            <CardTitle>Nächste Person in der Warteliste</CardTitle>
            <CardDescription>
              Hier kannst du die nächste Person in der Warteliste annehmen oder
              ablehnen.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
