import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
  contactNumber: z.string({
    required_error: "Contact Number is required",
  }),
});

export type TcontactFormSchema = z.infer<typeof formSchema>;
