import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export default function RegisterButton({
  label,
  selected,
  setSelected,
}: {
  label: string;
  selected: string | null;
  setSelected: (selected: string | null) => void;
}) {
  return (
    <Button
      variant="secondary"
      className="w-full !justify-start text-base"
      onClick={() => setSelected(selected === label ? null : label)}
    >
      {selected === label && <Check className="!w-4 !h-4 text-teal-400" />}
      {label}
    </Button>
  );
}
