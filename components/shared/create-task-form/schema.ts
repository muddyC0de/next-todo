import { z } from "zod";

const createTaskFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  list: z.object({
    icon: z.string().min(1, "List icon is required"),
    name: z.string().min(1, "List name is required"),
  }),
  note: z.string().min(1, "Note is required").optional(),
  date: z.date(),
  startTime: z.string().min(1, "start time is required").optional(),
  endTime: z.string().min(1, "end time is required").optional(),
});

export default createTaskFormSchema;

export type TCreateTaskValues = z.infer<typeof createTaskFormSchema>;
