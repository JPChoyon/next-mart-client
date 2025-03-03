import z from "zod";

export const LoginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is require" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password confirmation is required" })
    .min(8, "Password must be at least 8 characters"),
});
