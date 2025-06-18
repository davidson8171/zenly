import { MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PhoneCard({ pageNumber }: { pageNumber: number }) {
  return (
    <Card className="w-xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-xl sm:text-2xl">
          Wie lautet deine Telefonnummer?
        </CardTitle>
        <div className="absolute left-0 top-0 translate-y-1 sm:translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-emerald-400">{pageNumber}</p>
          <MoveRight className="w-4 h-4 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-10">
        <div className="flex flex-col">
          <Label className="text-md leading-none">Telefonnummer</Label>
          <p className="text-sm text-muted-foreground/50">optional</p>
          <div className="flex items-center space-x-2 w-full">
            <p className="text-md translate-y-0.5">+</p>
            <div className="flex flex-col w-8">
              <Input
                className="border-none px-0 mt-2 !placeholder-gray-500/25 !text-xl peer"
                type="tel"
                placeholder="00"
              />
              <div className="h-0.5 w-full rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
            </div>
            <div className="flex flex-col w-full">
              <Input
                className="border-none px-0 mt-2 !placeholder-gray-500/25 !text-xl peer"
                type="tel"
                placeholder="123456789"
              />
              <div className="h-0.5 w-full rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
