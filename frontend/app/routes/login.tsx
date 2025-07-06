import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import InputWithLabel from "@/components/ui/inputWithLabel";
import { Label } from "@/components/ui/label";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <div className="h-full w-full flex flex-col items-center">
        <div className="h-1/6" />
        <Card className="w-full max-w-96 sm:w-96 max-sm:border-none">
          <CardHeader>
            <CardTitle className="text-lg">Anmelden</CardTitle>
            <CardDescription>
              Melde dich an, um deine Warteliste zu verwalten.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8 mt-4">
            <InputWithLabel
              label="Email"
              placeholder="name@example.com"
              type="email"
            />
            <div className="flex flex-col">
              <div className="flex items-end justify-between">
                <Label className="text-md leading-none">Passwort</Label>
                <a href="/reset-password">
                  <p className="text-sm text-muted-foreground/50 cursor-pointer hover:underline underline-offset-1">
                    Passwort vergessen?
                  </p>
                </a>
              </div>
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
              Anmelden <ArrowUpRight className="!w-4 !h-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
