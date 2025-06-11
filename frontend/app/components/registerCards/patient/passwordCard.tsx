import { Eye, EyeOff, MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function PasswordCard({ pageNumber }: { pageNumber: number }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="w-xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-xl sm:text-2xl">
          Lege noch ein Passwort für deinen Account fest.
        </CardTitle>
        <div className="absolute left-0 top-0 translate-y-1 sm:translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-emerald-400">{pageNumber}</p>
          <MoveRight className="w-4 h-4 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-10">
        <div className="flex flex-col">
          <Label className="text-md leading-none">Passwort</Label>
          <div className="relative mt-1 flex flex-col">
            <Input
              className="border-none px-0 !placeholder-gray-500/25 !text-xl !pr-10 peer"
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
    </Card>
  );
}
