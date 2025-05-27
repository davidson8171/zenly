import { MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import RegisterButton from "./components/registerButton";
import { useState } from "react";

export default function GenderCard({ pageNumber }: { pageNumber: number }) {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  return (
    <Card className="w-xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-xl sm:text-2xl">
          Wie lautet dein Geschlecht?
        </CardTitle>
        <div className="absolute left-0 top-0 translate-y-1 sm:translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-emerald-400">{pageNumber}</p>
          <MoveRight className="w-4 h-4 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-2 w-fit">
        <RegisterButton
          label="männlich"
          selected={selectedGender}
          setSelected={setSelectedGender}
        />
        <RegisterButton
          label="weiblich"
          selected={selectedGender}
          setSelected={setSelectedGender}
        />
        <RegisterButton
          label="divers"
          selected={selectedGender}
          setSelected={setSelectedGender}
        />
        <RegisterButton
          label="keine Angabe"
          selected={selectedGender}
          setSelected={setSelectedGender}
        />
      </CardContent>
    </Card>
  );
}
