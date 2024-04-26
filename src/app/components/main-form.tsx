"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { PersonalSchema } from "../../schemas/personal-schema";
import { useFormContext } from "@/context/useFormContext";

import FormLayout from "./form-layout";
import Label from "./form-label";
import input from "./form-input";
import Error from "./input-error";
import Button from "./button";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof PersonalSchema>>({
    resolver: zodResolver(PersonalSchema),
  });
  const { setCurrentStep, updateFormValues } = useFormContext();
  const router = useRouter();
  const { first_name, last_name, phone } = errors;

  const onSubmit = (values: z.infer<typeof PersonalSchema>) => {
    setCurrentStep((prev) => prev + 1);
    updateFormValues(values);
    router.push("/address");
  };
  return (
    <FormLayout>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="firstname">First name</Label>
          <input
            {...register("first_name")}
            id="first_name"
            className="input"
          />
          {first_name && <Error error={first_name.message} />}
        </div>
        <div>
          <Label htmlFor="lastname">Last name</Label>
          <input {...register("last_name")} id="last_name" className="input" />
          {last_name && <Error error={last_name.message} />}
        </div>

        <div>
          <Label htmlFor="phone">Phone number</Label>
          <input {...register("phone")} id="phone" className="input" />
          {phone && <Error error={phone.message} />}
        </div>
        <Button type="submit">Next</Button>
      </form>
    </FormLayout>
  );
};

export default MainForm;
