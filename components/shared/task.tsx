import clsx from "clsx";
import React from "react";
import { Title } from "./title";
import { Clock3, EllipsisVertical } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

interface Props {
  title: string;
  date: string;
  className?: string;
}

export const Task: React.FC<Props> = ({ title, date, className }) => {
  return (
    <div
      className={clsx(
        "bg-foreground px-3 py-1 rounded-lg flex justify-between items-center",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Checkbox />
        <Title text={title} size="xs" />
      </div>

      <div className="flex gap-2">
        <div className="p-2 flex  rounded-lg items-center bg-background gap-1 text-gray-500">
          <Clock3 size={19} />{" "}
          <span className="text-[14px]">08.00 - 09.00</span>
        </div>
        <button className="p-2 rounded-lg bg-background text-gray-500">
          <EllipsisVertical size={20} />
        </button>
      </div>
    </div>
  );
};
