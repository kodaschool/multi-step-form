"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { paymentSchema } from "@/schemas/payment-schema";
import { useFormContext } from "@/context/useFormContext";

import FormLayout from "../components/form-layout";
import Label from "../components/form-label";
import Error from "../components/input-error";

import Button from "../components/button";
const Contact = () => {
  const { setCurrentStep, updateFormValues } = useFormContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });
  const { card_number, expiration_date, cvv } = errors;
  const onSubmit = (values: z.infer<typeof paymentSchema>) => {
    updateFormValues(values);
    setCurrentStep((prev) => prev + 1);
    router.push("/review");
  };

  const handlePrevious = () => {
    router.push("/address");
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <FormLayout>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="firstname">Credit card number</Label>
          <input
            {...register("card_number")}
            id="address_line_1"
            className="input"
          />
          {card_number && <Error error={card_number.message} />}
        </div>
        <div className="flex gap-2">
          <div>
            <Label htmlFor="lastname">Expiry date</Label>
            <input
              {...register("expiration_date")}
              id="address_line_2"
              className="input"
            />
            {expiration_date && <Error error={expiration_date.message} />}
          </div>
          <div>
            <Label htmlFor="lastname">Cvv</Label>
            <input {...register("cvv")} id="address_line_2" className="input" />
            {cvv && <Error error={cvv.message} />}
          </div>
        </div>

        <div className="flex justify-between h-auto items-center">
          <Button type="button" onClick={handlePrevious}>
            previous
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default Contact;
