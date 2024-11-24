import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ListIcon } from "./list-icon";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
}

export const CreateTaskInput: React.FC<Props> = ({ name, className }) => {
  const { register, watch } = useFormContext();

  const date = watch("date");
  const startTime = watch("startTime");
  const endTime = watch("endTime");
  const list = watch("list");

  const dateString = date
    ? date
        .toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
        })
        .split(" ")
        .reverse()
        .join(" ")
    : "";

  return (
    <div className="flex relative justify-end  items-center">
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

      <div className="absolute justify-end pr-2 flex gap-1">
        {dateString && (
          <div className=" font-medium text-[13px] bg-white px-[7px] py-[5px] text-gray-500 rounded-full">
            {dateString}
          </div>
        )}
        {startTime && endTime && (
          <div className=" font-medium text-[13px] bg-white px-[7px] py-[5px] text-gray-500 rounded-full">{`${startTime} - ${endTime}`}</div>
        )}
      </div>

      <Input
        placeholder="Create new task"
        {...register(name)}
        className={cn("pl-[46px] focus-visible:ring-0 text-base", className)}
      />
    </div>
  );
};
