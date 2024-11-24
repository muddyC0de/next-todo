import React from "react";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

interface Props {
  color?: string;
  className?: string;
}

export const ListIcon: React.FC<Props> = ({ color, className }) => {
  return (
    <Checkbox
      checked={false}
      className={cn(className, "border-2")}
      style={{ borderColor: color }}
    />
  );
};
