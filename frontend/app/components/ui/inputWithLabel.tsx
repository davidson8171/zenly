import { Input } from "./input";
import { Label } from "./label";

export default function InputWithLabel({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="flex flex-col">
      <Label className="text-md leading-none">{label}</Label>
      <Input
        className="border-none px-0 mt-1 !placeholder-gray-500/25 !text-base peer"
        type={type}
        placeholder={placeholder}
      />
      <div className="h-0.5 w-full rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
    </div>
  );
}
