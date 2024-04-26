import z from "zod";
export const addressSchema = z.object({
  address_line_1: z.string().min(1, { message: "Address line 1 is required" }),
  city: z.string().min(1, { message: "Address line 2 is required" }),
  address_line_2: z.string().min(1, { message: "Address line 2 is required" }),
  estate: z.string().optional(),
});
