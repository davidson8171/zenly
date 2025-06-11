import { MoveRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import RegisterButton from "../components/registerButton";
import { useState } from "react";
import RegisterInput from "../components/registerInput";

export default function InsuranceTypeCard({
  pageNumber,
}: {
  pageNumber: number;
}) {
  const [insuranceType, setInsuranceType] = useState<string | null>(null);

  return (
    <Card className="w-xl max-w-screen border-none pl-8 pr-4">
      <CardHeader className="relative">
        <CardTitle className="font-medium text-xl sm:text-2xl">
          Wie bist du versichert?
        </CardTitle>
        <div className="absolute left-0 top-0 translate-y-1 sm:translate-y-1.5 -translate-x-4 flex items-center space-x-1">
          <p className="text-sm text-emerald-400">{pageNumber}</p>
          <MoveRight className="w-4 h-4 text-emerald-400" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="grid gap-2 w-fit">
          <RegisterButton
            label="gesetzlich"
            selected={insuranceType}
            setSelected={setInsuranceType}
          />
          <RegisterButton
            label="privat"
            selected={insuranceType}
            setSelected={setInsuranceType}
          />
          <RegisterButton
            label="selbstzahler"
            selected={insuranceType}
            setSelected={setInsuranceType}
          />
          <RegisterButton
            label="Beihilfe"
            selected={insuranceType}
            setSelected={setInsuranceType}
          />
        </div>
        <RegisterInput
          label="Versicherungsname"
          placeholder="ÖGK"
          type="text"
        />
      </CardContent>
    </Card>
  );
}
