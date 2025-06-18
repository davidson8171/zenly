import {
  PatientInfoInsurance,
  PatientInfoPerson,
  PatientInfoStatus,
  PatientInfoTherapy,
} from "@/components/patientInfo/patientInfo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ColumnDef } from "@tanstack/react-table";
import {
  Calendar,
  Check,
  EyeIcon,
  ListCheck,
  Mail,
  Phone,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export type TherapistHistory = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: Date;
  status: "accepted" | "rejected";
};

export const columns: ColumnDef<TherapistHistory>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="flex space-x-1.5 items-center">
        <User className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Name</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="flex space-x-1.5 items-center">
        <Mail className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Email</p>
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => (
      <div className="flex space-x-1.5 items-center">
        <Phone className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Telefon</p>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="flex space-x-1.5 items-center">
        <Calendar className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Datum</p>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-sm">{row.original.date.toLocaleDateString()}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="flex space-x-1.5 items-center">
        <ListCheck className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Status</p>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-sm">
          {row.original.status === "accepted" ? (
            <Badge className="bg-gradient-to-br from-teal-400 to-green-400 text-white py-1">
              <Check className="!w-3.5 !h-3.5" />
              Akzeptiert
            </Badge>
          ) : (
            <Badge className="bg-secondary text-primary py-1">
              <X className="!w-3.5 !h-3.5" />
              Abgelehnt
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <EyeIcon className="!w-4 !h-4 text-emerald-400" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-fit !max-w-full max-h-[90vh] bg-transparent !outline-none !border-none [&>button]:hidden !p-0">
            <DialogHeader className="w-full max-w-2xl md:w-2xl">
              <ScrollArea
                className="pr-6 my-4 h-[calc(90vh-8rem)]"
                type="always"
              >
                <div className="grid gap-4">
                  <PatientInfoStatus
                    status={row.original.status}
                    date={row.original.date}
                  />
                  <PatientInfoPerson
                    name="Max Mustermann"
                    gender="Männlich"
                    age="19 Jahre"
                    email="max.mustermann@gmail.com"
                    phone="+00 0123456789"
                  />
                  <PatientInfoTherapy
                    complaints="Ich habe schmerzende Hüftgelenke und kann nicht mehr laufen."
                    duration="&gt; 1 Jahr"
                    previousTreatments="ja"
                    previousTherapyType="Psychotherapie"
                    diagnosis="Depression"
                    medication="Paroxetin 20mg, 1x täglich"
                    suicideThoughts="Nein"
                    videoTherapy="ja"
                    language="Deutsch"
                  />
                  <PatientInfoInsurance
                    insurance="privat"
                    insuranceName="ÖKG"
                    insuranceNumber="123456789"
                    medicalTransfer="ja"
                    costAgreement="ja"
                  />
                </div>
              </ScrollArea>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
