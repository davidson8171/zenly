import TherapistSidebar from "@/components/sidebars/therapistSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  createFileRoute,
  Navigate,
  Outlet,
  useLocation,
} from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/therapist")({
  component: DashboardTherapist,
  notFoundComponent: () => <Navigate to="/dashboard/therapist/queue" />,
});

function DashboardTherapist() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <TherapistSidebar />
      <SidebarInset>
        <Outlet />
        {location.pathname === "/dashboard/therapist" && (
          <Navigate to="/dashboard/therapist/queue" />
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
