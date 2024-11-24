import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

export const FormInput: React.FC<Props> = ({ name, className }) => {
  const { register } = useFormContext();
  return <Input {...register(name)} className={className} />;
};
