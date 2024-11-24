import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  onListItemSelect?: () => void;
  isSelected: boolean;
  list: any;
  className?: string;
}

export const ListItem: React.FC<Props> = ({
  list,
  isSelected,
  onListItemSelect,
  className,
}) => {
  return (
    <button
      onClick={onListItemSelect}
      className={cn(
        "flex px-3 rounded-lg text-[15px] py-[13px] items-center  justify-between w-full",
        isSelected && "bg-background"
      )}
    >
      <div className="flex gap-3 items-center">
        <Image height={24} width={24} src={list.icon} alt="" />
        <span className="font-medium">{list.name}</span>
      </div>

      <div className="px-3  bg-white  text-slate-500 rounded-full">8</div>
    </button>
  );
};
