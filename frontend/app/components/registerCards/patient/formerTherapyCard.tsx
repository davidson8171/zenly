import { MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { useState } from "react";
import RegisterButton from "../components/registerButton";
import RegisterInputTextBox from "../components/registerInputTextBox";

export default function FormerTherapycard({
  pageNumber,
}: {
  pageNumber: number;
}) {
  const [formerTherapy, setFormerTherapy] = useState<string | null>(null);

  return (
    <Card className="w-xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-xl sm:text-2xl">
          Hast du schon einmal therapeutische Hilfe in Anspruch genommen?
        </CardTitle>
        <div className="absolute left-0 top-0 translate-y-1 sm:translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-emerald-400">{pageNumber}</p>
          <MoveRight className="w-4 h-4 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="grid gap-2 w-fit">
          <RegisterButton
            label="ja"
            selected={formerTherapy}
            setSelected={setFormerTherapy}
          />
          <RegisterButton
            label="nein"
            selected={formerTherapy}
            setSelected={setFormerTherapy}
          />
        </div>
        {formerTherapy === "ja" && (
          <RegisterInputTextBox
            label="Art der Therapie"
            placeholder="Psychotherapie"
          />
        )}
      </CardContent>
    </Card>
  );
}
