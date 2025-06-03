import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

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
      <div className="w-full flex justify-center"></div>
    </div>
  );
}
