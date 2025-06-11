import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function RegisterInputTextBox({
  label,
  placeholder,
  optional,
}: {
  label: string;
  placeholder: string;
  optional?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <Label className="text-md leading-none">{label}</Label>
      {optional && <p className="text-sm text-muted-foreground/50">optional</p>}
      <Textarea
        className="border-none px-0 mt-1 max-h-52 !placeholder-gray-500/25 !text-xl peer"
        placeholder={placeholder}
      />
      <div className="h-0.5 w-full mt-0.5 rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
    </div>
  );
}
