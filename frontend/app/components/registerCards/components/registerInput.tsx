import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function RegisterInput({
  label,
  placeholder,
  type,
  optional,
}: {
  label: string;
  placeholder: string;
  type: string;
  optional?: boolean;
}) {
  const [inputType, setInputType] = useState(type === "date" ? "text" : type);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    if (type === "date") {
      setInputType("date");
    }
  };

  const handleBlur = () => {
    if (type === "date" && !value) {
      setInputType("text");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <Label className="text-md leading-none">{label}</Label>
      {optional && <p className="text-sm text-muted-foreground/50">optional</p>}
      <Input
        className="border-none px-0 mt-2 !placeholder-gray-500/25 !text-xl peer"
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="h-0.5 w-full rounded-4xl bg-gray-500/25 peer-focus:bg-gradient-to-br from-teal-400 to-green-400 transition-all duration-300" />
    </div>
  );
}
