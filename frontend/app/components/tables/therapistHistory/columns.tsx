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
  DialogClose,
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
      <div className="flex space-x-1.5 items-center max-w-32">
        <User className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Name</p>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="truncate max-w-52">{row.original.name}</div>;
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="flex space-x-1.5 items-center">
        <Mail className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Email</p>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="max-w-52 truncate">{row.original.email}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: () => (
      <div className="flex space-x-1.5 items-center">
        <Phone className="!w-3.5 !h-3.5 text-emerald-400" />
        <p className="text-sm text-muted-foreground">Telefon</p>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="">{row.original.phone}</div>;
    },
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
              <span className="hidden lg:block">Akzeptiert</span>
            </Badge>
          ) : (
            <Badge className="bg-secondary text-primary py-1">
              <X className="!w-3.5 !h-3.5" />
              <span className="hidden lg:block">Abgelehnt</span>
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="w-0" />,
    cell: ({ row }) => {
      const [open, setOpen] = useState(false);

      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <EyeIcon className="!w-4 !h-4 text-emerald-400" />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="!max-w-fit max-h-[90vh] bg-transparent !outline-none !border-none !p-0"
            showCloseButton={false}
          >
            <DialogHeader className="max-w-2xl md:w-2xl">
              <div className="flex justify-end">
                <Button
                  variant="secondary"
                  className="w-fit"
                  onClick={() => setOpen(false)}
                >
                  <X className="!w-4 !h-4" />
                </Button>
              </div>
              <ScrollArea
                className="my-4 h-[calc(90vh-8rem)]"
                showScrollBar={false}
              >
                <div className="grid gap-4 w-[calc(100vw-2rem)] max-w-2xl">
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
