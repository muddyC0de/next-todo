import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ListIcon } from "./list-icon";
import Image from "next/image";

interface Props {
  name: string;
  handleClick: () => void;
  className?: string;
}

export const CreateTaskSelect: React.FC<Props> = ({
  name,
  handleClick,
  className,
}) => {
  const { register, watch } = useFormContext();

  const list = watch("list");
  return (
    <div
      onClick={handleClick}
      className={cn("flex relative  items-center", className)}
    >
      {!list.icon ? (
        <ListIcon color="black" className="absolute left-2" />
      ) : (
        <Image
          height={24}
          width={24}
          src={list.icon}
          className="absolute left-3 top-[10px]"
          alt=""
        />
      )}
      <Select {...register(name)}>
        <SelectTrigger className="w-full pl-11">
          <SelectValue placeholder={list.name || "No list"} />
        </SelectTrigger>
      </Select>
    </div>
  );
};
