"use client";

import { Input } from "@/components/ui/input";
import { generateTimes } from "@/lib/generate-times";
import { isValidTime } from "@/lib/is-valid-time";
import { cn } from "@/lib/utils";
import React from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  className?: string;
}

export const FormTimePicker: React.FC<Props> = ({ className }) => {
  const [customStartTime, setCustomStartTime] = React.useState<string>("");
  const [customEndTime, setCustomEndTime] = React.useState<string>("");

  const { setValue, setError, watch } = useFormContext();

  const startTime = watch("startTime");
  const endTime = watch("endTime");

  const times = generateTimes();

  const onChangeTime = (time: string) => {
    if (time === startTime) {
      return setValue("startTime", "");
    }

    if (time === endTime) {
      return setValue("endTime", "");
    }

    if (startTime && endTime) {
      return setValue("endTime", time);
    }

    if (startTime) {
      return setValue("endTime", time);
    }

    return setValue("startTime", time);
  };

  const onChangeCustomTime = (value: string, type: "start" | "end") => {
    setValue("startTime", "");
    setValue("endTime", "");

    if (type === "start") {
      return setCustomStartTime(value);
    }

    setCustomEndTime(value);
  };

  return (
    <div>
      <div className="border p-1 h-11 mt-4 items-center mb-2 flex justify-between rounded-full text-sm">
        <div className="w-full flex justify-center h-full items-center bg-primary/10 text-center text-primary  rounded-full">
          <span>{startTime || "-"}</span>
        </div>
        <span className="text-gray-400 mx-3 font-semibold">-</span>
        <div className="w-full h-full flex justify-center bg-primary/10 text-center items-center text-primary  rounded-full">
          <span>{endTime || "-"}</span>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          gap: "10px",
        }}
      >
        {times.map((time) => (
          <div
            key={time}
            onClick={() => onChangeTime(time)}
            className={cn(
              "bg-primary/10 text-center text-sm text-primary px-3 py-2 cursor-pointer rounded-full",
              (time === startTime && "bg-primary text-white") ||
                (time === endTime && "bg-primary text-white"),
              Number(time.split(".")[0]) < Number(startTime?.split(".")[0]) &&
                "text-gray-400 bg-background pointer-events-none"
            )}
          >
            {time}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-5 flex-1">
        <Input
          value={customStartTime}
          onChange={(e) => onChangeCustomTime(e.target.value, "start")}
          placeholder="Custom Hours (from)"
        />
        <Input
          value={customEndTime}
          onChange={(e) => onChangeCustomTime(e.target.value, "end")}
          placeholder="Custom Hours (until)"
        />
      </div>
    </div>
  );
};
