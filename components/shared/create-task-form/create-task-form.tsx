"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createTaskFormSchema, { TCreateTaskValues } from "./schema";
import { CreateTaskInput } from "../create-task-input";
import { CreateTaskSelect } from "../create-task-select";
import { cn } from "@/lib/utils";
import { FormTextarea } from "../form-components/form-textarea";
import { Button } from "@/components/ui/button";
import { CalendarDays, LucideIcon, Text } from "lucide-react";
import { FormCalendar } from "../form-components/form-calendar";
import { FormTimePicker } from "../form-components/form-time-picker";
import { ListItem } from "../list-item";

interface Props {
  className?: string;
}

const forms: { name: string; icon: LucideIcon }[] = [
  { name: "calendar", icon: CalendarDays },
  { name: "text", icon: Text },
];

const lists = [
  { name: "Home", icon: "/house.png" },
  { name: "Completed", icon: "/completed.png" },
  { name: "Personal", icon: "/personal.png" },
];

export const CreateTaskForm: React.FC<Props> = ({ className }) => {
  const [inputMode, setInputMode] = React.useState<
    "calendar" | "text" | "time" | "list" | ""
  >("list");

  const form = useForm({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      title: "",
      list: { icon: "", name: "" },
      note: "",
      date: new Date(),
      startTime: "",
      endTime: "",
    },
  });

  const onSubmit = async (data: TCreateTaskValues) => {
    console.log(data);
  };

  const listValue = form.watch("list");
  return (
    <FormProvider {...form}>
      <form
        className={cn(className, "flex flex-col gap-2")}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CreateTaskInput name="title" />
        <div className="flex">
          <CreateTaskSelect
            name="list"
            handleClick={() => setInputMode(inputMode === "list" ? "" : "list")}
            className="flex-1 mr-2 "
          />
          <div className="flex gap-2">
            {forms.map((form) => (
              <Button
                key={form.name}
                onClick={() => setInputMode(form.name as "calendar" | "text")}
                className="bg-transparent w-[40px] h-full"
                variant={"outline"}
                size={"icon"}
              >
                <form.icon className="text-gray-400" size={20} />
              </Button>
            ))}
          </div>
        </div>
        {inputMode === "text" && (
          <FormTextarea
            placeholder="Add notes"
            className="h-[200px] resize-none"
            name="note"
          />
        )}

        {["calendar", "time"].includes(inputMode) && (
          <div className="flex flex-col gap-2">
            {inputMode === "calendar" ? <FormCalendar /> : <FormTimePicker />}

            <Button
              onClick={() =>
                setInputMode(inputMode === "calendar" ? "time" : "calendar")
              }
              size="lg"
              variant="secondary"
            >
              {inputMode === "calendar" ? "Save time" : "Save date"}
            </Button>

            <Button size="lg">Save changes</Button>
          </div>
        )}

        {inputMode === "list" && (
          <ul className="flex flex-col gap-3">
            {lists.map((list) => (
              <li key={list.name}>
                <ListItem
                  onListItemSelect={() => form.setValue("list", list)}
                  isSelected={list.name === listValue.name}
                  list={list}
                />
              </li>
            ))}
          </ul>
        )}
      </form>
    </FormProvider>
  );
};
