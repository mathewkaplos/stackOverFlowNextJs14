import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5, { message: "Title is required" }).max(130),
  explanation: z.string().min(10, { message: "Explanation is required" }),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
