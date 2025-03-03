import z from "zod";

export const RegistrationSchema = z.object({
  name: z
    .string({
      required_error: "First name is required",
    })
    .min(2, "First name must be between 2 and 50 characters")
    .max(50, "First name must be between 2 and 50 characters"),
  email: z
    .string({ required_error: "Email is require" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password confirmation is required" })
    .min(8, "Password must be at least 8 characters"),
  passwordConfirm: z.string({ required_error: "Password is require" }).min(1),
});
