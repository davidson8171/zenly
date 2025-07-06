import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Mail, Save } from "lucide-react";
import InputWithLabel from "@/components/ui/inputWithLabel";
export const Route = createFileRoute("/reset-password")({
  component: ResetPassword,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      token: (search.token as string) || "",
    };
  },
});

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useSearch({ from: "/reset-password" });

  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <div className="h-full w-full flex flex-col items-center">
        <div className="h-1/6" />
        {token === "" ? (
          <Card className="w-full max-w-96 sm:w-96 max-sm:border-none">
            <CardHeader>
              <CardTitle className="text-lg">Passwort zurücksetzen</CardTitle>
              <CardDescription>
                Wie lautet die Email deines Kontos?
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8 mt-4">
              <InputWithLabel
                label="Email"
                placeholder="name@example.com"
                type="email"
              />
            </CardContent>
            <CardFooter className="flex justify-end mt-8">
              <Button>
                <Mail className="!h-4 !w-4" /> Anfordern
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-full max-w-96 sm:w-96 max-sm:border-none">
            <CardHeader>
              <CardTitle className="text-lg">Passwort ändern</CardTitle>
              <CardDescription>
                Wähle ein neues Passwort für dein Konto.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8 mt-4">
              <div className="flex flex-col">
                <Label className="text-md leading-none">Neues Passwort</Label>
                <div className="relative mt-1 flex flex-col">
                  <Input
                    className="border-none px-0 !placeholder-gray-500/25 !text-base !pr-10 peer"
                    type={showPassword ? "text" : "password"}
                    placeholder="1234"
                  />
                  <Button
                    variant="ghost"
                    className="absolute right-0 top-0 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className="!h-4 !w-4 text-muted-foreground" />
                    ) : (
                      <EyeOff className="!h-4 !w-4 text-muted-foreground" />
                    )}
                  </Button>
                  <div className="h-0.5 w-full rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end mt-8">
              <Button>
                <Save className="!h-4 !w-4" /> Speichern
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
