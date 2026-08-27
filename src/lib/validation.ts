import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  company: z.string().min(2, "Enter your company name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  need: z.enum(["fly", "stay", "move", "connect", "group", "manage"], {
    message: "Select what you need help with",
  }),
  message: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;