import React from "react";

import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CreateTaskForm } from "./create-task-form/create-task-form";

interface Props {
  className?: string;
}

export const CreateTaskPopover: React.FC<Props> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size={"lg"}
          className="flex justify-start max-h-[450px] bg-black hover:bg-black w-7/12 h-14 font-normal rounded-full items-center gap-2 p-3 mt-24"
        >
          <Plus size={20} />
          Create new task
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[517px]" sideOffset={15}>
        <CreateTaskForm />
      </PopoverContent>
    </Popover>
  );
};
