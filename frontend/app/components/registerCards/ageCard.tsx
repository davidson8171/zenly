import { MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function NameCard() {
  return (
    <Card className="w-2xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-2xl">Wie alt bist du?</CardTitle>
        <div className="absolute left-0 top-0 translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-green-400">2</p>
          <MoveRight className="w-4 h-4 text-green-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-10">
        <div className="flex flex-col">
          <Label className="text-md font-RobotoLight">Alter</Label>
          <Input
            className="border-none px-0 mt-1 !placeholder-gray-500/25 !text-xl peer"
            type="number"
            placeholder="18"
          />
          <div className="h-0.5 w-full rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
        </div>
      </CardContent>
    </Card>
  );
}
