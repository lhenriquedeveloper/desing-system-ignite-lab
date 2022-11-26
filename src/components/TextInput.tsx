import clsx from "clsx";
import { ReactNode } from "react";

export interface TextInputProps {
  children: ReactNode;
}

export function TextInput({}: TextInputProps) {
  return <input className={clsx("text-gray-100 font-sans", {})} />;
}
