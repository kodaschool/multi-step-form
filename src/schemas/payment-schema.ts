import z from "zod";
export const paymentSchema = z.object({
  card_number: z.string().min(1, { message: "Card number is required" }),
  expiration_date: z.string().min(1, { message: "Expiry date is required" }),
  cvv: z.string().min(1, { message: "Cvv is required" }),
});
