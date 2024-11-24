import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { CaptionProps } from "react-day-picker";
import { useFormContext } from "react-hook-form";

interface Props {
  className?: string;
}

const today = new Date();

const startOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

export const FormCalendar: React.FC<Props> = ({ className }) => {
  const { setValue, watch } = useFormContext();
  const date = watch("date");

  return (
    <Calendar
      selected={date}
      onSelect={(date) => setValue("date", date)}
      mode="single"
      disabled={[{ before: today }, { from: startOfNextMonth }]}
      classNames={{
        caption_label:
          "bg-primary/10 flex text-sm text-primary rounded-full h-10 justify-center pt-1 relative items-center w-full",
        caption_end: "w-full",
        nav_button: "p-[10px]  rounded-full text-gray-400 bg-white",
        head_row: "flex justify-between",
        row: "mt-2 flex justify-between",
        cell: cn(
          "relative cursor-pointer flex items-center justify-center  text-center  text-primary rounded-full text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-primary [&:has([aria-selected].day-range-end)]:rounded-r-md"
        ),
        day: "text-sm  h-11 w-11 p-0 font-normal bg-primary/10 rounded-full",
        day_selected: "!bg-primary text-white",
        day_disabled: "text-muted-foreground opacity-50 bg-gray-100",
      }}
      components={{
        CaptionLabel: (month: CaptionProps) => (
          <div className="bg-primary/10 flex text-sm  text-primary rounded-full h-10 justify-center pt-1 relative items-center w-full">
            <CalendarDays size={18} className="text-primary mr-1" />
            {month.displayMonth.toLocaleString("en-us", {
              month: "long",
            })}
            , {month.displayMonth.getFullYear()}
          </div>
        ),

        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      className="w-full"
    />
  );
};
