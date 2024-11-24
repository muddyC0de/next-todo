import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useFormContext } from "react-hook-form";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Исправлено
  name: string;
  className?: string;
}

export const FormTextarea: React.FC<Props> = ({
  name,
  className,
  ...props
}) => {
  const { register } = useFormContext();
  return <Textarea {...register(name)} className={className} {...props} />;
};
