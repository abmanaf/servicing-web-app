import React from "react";
import clsx from "clsx";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input as InputComponent } from "@/components/ui/input";

type InputType = "text" | "checkbox" | "number" | "email" | "password" | "tel";

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  reverse?: boolean;
  type?: InputType;
  checked?: boolean;
}

export default function Input({
  id,
  label,
  value,
  onChange,
  onCheckedChange,
  disabled,
  className,
  labelClassName,
  inputClassName,
  placeholder,
  reverse = false,
  type = "text",
  checked,
}: Readonly<InputProps>) {
  return (
    <div
      className={clsx(
        "flex items-center space-x-2",
        reverse && "flex-row-reverse space-x-reverse",
        className,
      )}
    >
      <Label
        htmlFor={id}
        className={clsx("text-sm font-medium text-gray-700", labelClassName)}
      >
        {label}
      </Label>
      {type === "checkbox" ? (
        <Checkbox
          id={id}
          checked={checked ?? value === "true"}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={clsx(inputClassName)}
        />
      ) : (
        <InputComponent
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={clsx("w-40", inputClassName)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
