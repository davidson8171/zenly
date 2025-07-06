import {
  columns,
  TherapistHistory,
} from "@/components/tables/therapistHistory/columns";
import { DataTable } from "@/components/tables/therapistHistory/dataTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/dashboard/therapist/history")({
  component: DashboardTherapistHistory,
});

const data: TherapistHistory[] = [
  {
    id: "1",
    name: "John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe",
    email: "john.doe@example.comjohn.doe@example.com",
    phone: "+49 123456789",
    date: new Date(),
    status: "accepted",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "-",
    phone: "-",
    date: new Date(),
    status: "rejected",
  },
];

function DashboardTherapistHistory() {
  const { isMobile } = useSidebar();

  return (
    <div className="w-full flex flex-col gap-4 mt-4.5 px-4">
      {isMobile && (
        <div className="flex items-center">
          <SidebarTrigger className="mr-2" />
          <ChevronRight className="mr-1 !h-4 !w-4 text-muted-foreground/50" />
          <span className="text-sm font-medium">Verlauf</span>
        </div>
      )}
      <div className="w-full flex justify-center mt-4">
        <Card className="border-none flex-col items-center">
          <CardHeader className="max-sm:!px-2 w-full max-w-2xl md:w-2xl">
            <CardTitle className="text-lg">Verlauf</CardTitle>
            <CardDescription>
              Hier können Sie alle angenommenen und abgelehnten Patienten
              einsehen.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 max-sm:!px-2 mb-8 mt-4">
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
