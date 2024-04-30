"use server";

import { TcontactFormSchema } from "./zod-schemas";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/components/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SubmitContactForm(formValues: TcontactFormSchema) {
  try {
    const { name, email, message, contactNumber } = formValues;

    const { data, error } = await resend.emails.send({
      from: `${name}<destiny@darkalphacapital.com>`,
      to: "daigbe@gmail.com",
      subject: `Contact Inquiry from ${name}`,
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        name: name,
        email: email,
        contactNumber: contactNumber,
      }),
    });

    if (error) {
      console.log(error);
      return {
        errors: true,
      };
    }
  } catch (error) {
    console.log("error in sending email", error);
    return {
      errors: true,
    };
  }

  return {
    success: true,
  };
}
