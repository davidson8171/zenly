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
    <div className="flex justify-center items-center">
      <div className="w-full md:w-10/12 lg:w-8/12 2xl:w-6/12 flex justify-between items-center px-4 sm:px-8 py-8">
        <Logo size="sm" />
        <div className="flex items-center gap-2">
          <NavigationMenu
            delayDuration={0}
            className="[&_div.absolute]:top-10 max-sm:[&_div.absolute]:-right-12 max-md:[&_div.absolute]:-right-0 max-md:[&_div.absolute]:left-auto"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Registrieren</NavigationMenuTrigger>
                <NavigationMenuContent className="max-sm:!w-64 sm:!w-80 flex flex-col gap-0">
                  <NavigationMenuLink asChild>
                    <a href="/register/patient" className="p-4">
                      <div className="text-sm font-medium leading-none flex items-center gap-1.5">
                        <User className="!w-3.5 !h-3.5 !text-emerald-400" />
                        Patient
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Melde dich als Patient an, um passende Unterstützung zu
                        finden.
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
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
            <Button variant="secondary">
              <LogIn className="!w-4 !h-4 sm:!w-3.5 sm:!h-3.5 !text-emerald-400" />
              <span className="hidden sm:flex">Anmelden</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
