import TherapistSidebar from "@/components/sidebars/therapistSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  createFileRoute,
  Navigate,
  Outlet,
  redirect,
} from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/therapist")({
  component: DashboardTherapist,
  notFoundComponent: () => <Navigate to="/dashboard/therapist/queue" />,
});

function DashboardTherapist() {
  return (
    <SidebarProvider>
      <TherapistSidebar />
      <SidebarInset>
        <Outlet />
        <Navigate to="/dashboard/therapist/queue" />
      </SidebarInset>
    </SidebarProvider>
  );
}
