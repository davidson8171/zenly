import { MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import RegisterInput from "../components/registerInput";

export default function NameCard({
  pageNumber,
  showTitle,
}: {
  pageNumber: number;
  showTitle?: boolean;
}) {
  return (
    <Card className="w-xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-xl sm:text-2xl">
          Wie heißt du?
        </CardTitle>
        <div className="absolute left-0 top-0 translate-y-1 sm:translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-emerald-400">{pageNumber}</p>
          <MoveRight className="w-4 h-4 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-10">
        {showTitle && (
          <RegisterInput label="Titel" placeholder="Dr." type="text" optional />
        )}
        <RegisterInput label="Vorname" placeholder="Max" type="text" />
        <RegisterInput label="Nachname" placeholder="Mustermann" type="text" />
      </CardContent>
    </Card>
  );
}
