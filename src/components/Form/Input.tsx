import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className="flex-1 rounded border border-zinc-500 shadow-sm px-3 py-2 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
      {...register(props.name)}
      {...props}
    />
  );
}
