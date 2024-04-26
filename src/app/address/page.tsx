"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { addressSchema } from "@/schemas/address-schema";
import { useFormContext } from "@/context/useFormContext";

import FormLayout from "../components/form-layout";
import Label from "../components/form-label";
import Button from "../components/button";

const Contact = () => {
  const router = useRouter();
  const { setCurrentStep, updateFormValues } = useFormContext();

  const { register, handleSubmit } = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
  });
  const onSubmit = (values: z.infer<typeof addressSchema>) => {
    updateFormValues(values);
    setCurrentStep((prev) => prev + 1);
    router.push("/payment");
  };

  const handlePrevious = () => {
    router.push("/");
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <FormLayout>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="firstname">Address line 1</Label>
          <input
            {...register("address_line_1")}
            id="address_line_1"
            className="input"
          />
        </div>
        <div>
          <Label htmlFor="lastname">Address line 2</Label>
          <input
            {...register("address_line_2")}
            id="address_line_2"
            className="input"
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <input {...register("city")} id="city" className="input" />
        </div>
        <div>
          <Label htmlFor="estate">Estate</Label>
          <input {...register("estate")} id="estate" className="input" />
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
