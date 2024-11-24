import clsx from "clsx";
import React from "react";
import { Title } from "./title";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ListItem } from "./list-item";

interface Props {
  className?: string;
}

const lists = [
  { name: "Home", icon: "/house.png" },
  { name: "Completed", icon: "/completed.png" },
  { name: "Personal", icon: "/personal.png" },
];

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        "w-[350px] bg-white fixed rounded-lg ml-2 my-2 px-4 py-8 flex flex-col top-0 h-[98%]",
        className
      )}
    >
      <Title text="Private" size="sm" className="font-semibold mb-5" />

      <ul className="flex flex-col gap-3">
        {lists.map((list, index) => (
          <li key={list.name} className={cn()}>
            <ListItem isSelected={index === 0} list={list} />
          </li>
        ))}
      </ul>

      <Button
        variant={"muted"}
        className="flex justify-start    h-12  text-[17px] rounded-full items-center gap-2 p-3  mt-3"
      >
        <Plus size={23} />
        Create new list
      </Button>
    </div>
  );
};
