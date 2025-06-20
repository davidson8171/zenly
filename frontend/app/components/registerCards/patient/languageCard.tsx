import { MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { useState } from "react";
import RegisterButton from "../components/registerButton";

export default function LanguageCard({ pageNumber }: { pageNumber: number }) {
  const [language, setLanguage] = useState<string | null>(null);

  return (
    <Card className="w-xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-xl sm:text-2xl">
          In welcher Sprache möchtest du beraten werden?
        </CardTitle>
        <div className="absolute left-0 top-0 translate-y-1 sm:translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-emerald-400">{pageNumber}</p>
          <MoveRight className="w-4 h-4 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-2 w-fit">
        <RegisterButton
          label="Deutsch"
          selected={language}
          setSelected={setLanguage}
        />
        <RegisterButton
          label="Englisch"
          selected={language}
          setSelected={setLanguage}
        />
      </CardContent>
    </Card>
  );
}
