import { Activity, LogIn, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Logo from "../logo/logo";

export default function Navbar() {
  return (
    <div className="sticky top-4 z-50 w-full">
      <div className="flex justify-center items-center ">
        <div className="w-full md:w-10/12 lg:w-8/12 2xl:w-6/12 flex justify-between items-center p-2 sm:p-4 bg-white/30 before:backdrop-blur-xs  before:absolute before:inset-0 before:-z-10 rounded-xl max-sm:mx-2">
          <Logo size="sm" />
          <div className="flex items-center space-x-0">
            <NavigationMenu
              delayDuration={0}
              className="[&_div.absolute]:top-10 max-sm:[&_div.absolute]:-right-12 max-md:[&_div.absolute]:-right-0 max-md:[&_div.absolute]:left-auto"
            >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:!bg-accent/30">
                    Registrieren
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="max-sm:!w-64 sm:!w-80 flex flex-col gap-0 !bg-white/30 backdrop-blur-xs">
                    <NavigationMenuLink className="hover:bg-accent/30" asChild>
                      <a href="/register/patient" className="p-4">
                        <div className="text-sm font-medium leading-none flex items-center gap-1.5">
                          <User className="!w-3.5 !h-3.5 !text-emerald-400" />
                          Patient
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Melde dich als Patient an, um passende Unterstützung
                          zu finden.
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="hover:bg-accent/30" asChild>
                      <a href="/register/therapist" className="p-4">
                        <div className="text-sm font-medium leading-none flex items-center gap-1.5">
                          <Activity className="!w-3.5 !h-3.5 !text-emerald-400" />
                          Therapeut
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          Registriere dich als Therapeut und werde Teil unserer
                          Plattform.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="/login">
              <Button variant="ghost" className="hover:!bg-accent/30">
                <LogIn className="!w-4 !h-4 sm:!w-3.5 sm:!h-3.5 !text-emerald-400" />
                <span className="hidden sm:flex">Anmelden</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
