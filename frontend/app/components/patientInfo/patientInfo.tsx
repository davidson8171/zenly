import InfoWithTitle from "../dashboard/infoWithTitle";
import { Card, CardContent } from "../ui/card";
import { Activity, Landmark, ListCheck, User } from "lucide-react";

export function PatientInfoStatus({
  status,
  date,
}: {
  status: "accepted" | "rejected";
  date: Date;
}) {
  return (
    <Card>
      <CardContent className="grid gap-4">
        <ListCheck className="!w-5 !h-5 text-emerald-400" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoWithTitle
            title="Status"
            info={status === "accepted" ? "Akzeptiert" : "Abgelehnt"}
          />
          <InfoWithTitle title="Datum" info={date.toLocaleDateString()} />
        </div>
      </CardContent>
    </Card>
  );
}

export function PatientInfoPerson({
  name,
  gender,
  age,
  email,
  phone,
}: {
  name: string;
  gender: string;
  age: string;
  email?: string;
  phone?: string;
}) {
  return (
    <Card>
      <CardContent className="grid gap-4">
        <User className="!w-5 !h-5 text-emerald-400" />
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoWithTitle title="Name" info={name} />
            <InfoWithTitle title="Geschlecht" info={gender} />
          </div>
          <InfoWithTitle title="Alter" info={age} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {email && <InfoWithTitle title="E-Mail" info={email} />}
            {phone && <InfoWithTitle title="Telefon" info={phone} />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PatientInfoTherapy({
  complaints,
  duration,
  previousTreatments,
  previousTherapyType,
  diagnosis,
  medication,
  suicideThoughts,
  videoTherapy,
  language,
}: {
  complaints: string;
  duration: string;
  previousTreatments: string;
  previousTherapyType: string;
  diagnosis: string;
  medication: string;
  suicideThoughts: string;
  videoTherapy: string;
  language: string;
}) {
  return (
    <Card>
      <CardContent className="grid gap-4">
        <Activity className="!w-5 !h-5 text-emerald-400" />
        <div className="grid gap-4">
          <InfoWithTitle title="Beschwerden" info={complaints} />
          <InfoWithTitle title="Dauer der Beschwerden" info={duration} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoWithTitle
              title="Vorangegangene Behandlungen"
              info={previousTreatments}
            />
            <InfoWithTitle
              title="Art der Behandlung"
              info={previousTherapyType}
            />
          </div>
          <InfoWithTitle title="Vorliegende Diagnose" info={diagnosis} />
          <InfoWithTitle title="Aktuelle Medikation" info={medication} />
          <InfoWithTitle title="Suizidgedanken" info={suicideThoughts} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoWithTitle title="Videotherapie möglich" info={videoTherapy} />
            <InfoWithTitle title="Sprache" info={language} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PatientInfoInsurance({
  insurance,
  insuranceName,
  insuranceNumber,
  medicalTransfer,
  costAgreement,
}: {
  insurance: string;
  insuranceName: string;
  insuranceNumber: string;
  medicalTransfer: string;
  costAgreement: string;
}) {
  return (
    <Card>
      <CardContent className="grid gap-4">
        <Landmark className="!w-5 !h-5 text-emerald-400" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoWithTitle title="Versicherung" info={insurance} />
          <InfoWithTitle title="Versicherungsname" info={insuranceName} />
          <InfoWithTitle title="Versichertennummer" info={insuranceNumber} />
          <InfoWithTitle
            title="Ärztliche Überweisung vorhanden"
            info={medicalTransfer}
          />
          <InfoWithTitle title="Kostenübernahme geklärt" info={costAgreement} />
        </div>
      </CardContent>
    </Card>
  );
}
