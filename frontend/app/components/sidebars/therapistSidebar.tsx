import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ChevronsUpDown, LifeBuoy, List, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLocation } from "@tanstack/react-router";
import Logo from "../logo/logo";

const data = {
  navMain: [
    {
      name: "Warteliste",
      to: "/dashboard/therapist/queue",
      icon: List,
    },
    {
      name: "Profil",
      to: "/dashboard/therapist/profile",
      icon: User,
    },
  ],
  navSecondary: [
    {
      name: "Hilfe",
      to: "/dashboard/therapist/help",
      icon: LifeBuoy,
    },
  ],
};

export default function TherapistSidebar() {
  const { isMobile } = useSidebar();
  const location = useLocation();

  return (
    <Sidebar className="max-w-60 px-2">
      <SidebarHeader className="bg-white px-1">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center !px-2 !py-1.5">
              <Logo />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-white pt-4 px-1">
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu className="gap-2">
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    tooltip={item.name}
                    asChild
                    isActive={item.to === location.pathname}
                    className={`py-4.5 px-2.5 ${item.to === location.pathname ? "" : "text-muted-foreground"}`}
                  >
                    <a href={item.to}>
                      {item.icon && (
                        <item.icon
                          className={`!h-4 !w-4 ${item.to === location.pathname ? "text-emerald-400" : "text-muted-foreground"}`}
                        />
                      )}
                      <span
                        className={`text-base ${item.to === location.pathname ? "" : "text-muted-foreground"}`}
                      >
                        {item.name}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    tooltip={item.name}
                    asChild
                    isActive={item.to === location.pathname}
                    className={`py-4.5 px-2.5 ${item.to === location.pathname ? "" : "text-muted-foreground"}`}
                  >
                    <a href={item.to}>
                      {item.icon && (
                        <item.icon
                          className={`!h-4 !w-4 ${item.to === location.pathname ? "text-emerald-400" : "text-muted-foreground"}`}
                        />
                      )}
                      <span
                        className={`text-base ${item.to === location.pathname ? "" : "text-muted-foreground"}`}
                      >
                        {item.name}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-md">
                    <AvatarImage src="https://img.freepik.com/fotos-kostenlos/mid-shot-frau-therapeutin-mit-zwischenablage_23-2148759113.jpg?semt=ais_hybrid&w=740" />
                    <AvatarFallback className="rounded-lg">
                      <div className="bg-secondary">
                        <User className="!h-4.5 !w-4.5 text-emerald-400" />
                      </div>
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      Dr. Doofenschmirtz
                    </span>
                    <span className="truncate text-xs">email@email.com</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="rounded-lg !shadow-none bg-red-500 p-0 !border-none hover:bg-red-400"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={6}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem className="focus:bg-transparent group px-3 py-2.5">
                    <LogOut className="!h-3.5 !w-3.5 text-white" />
                    <span className="text-white">Abmelden</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
