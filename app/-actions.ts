import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/components/emails/ContactFormEmail";
import { TcontactFormSchema, formSchema } from "./-zod-schemas";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: TcontactFormSchema) => formSchema.parse(data))
  .handler(async ({ data: formValues }) => {
    try {
      const { name, email, message, contactNumber } = formValues;

      const { error } = await getResend().emails.send({
        from: `${name}<destiny@darkalphacapital.com>`,
        to: "daigbe@gmail.com",
        subject: `Contact Inquiry from ${name}`,
        reply_to: email,
        react: React.createElement(ContactFormEmail, {
          message,
          name,
          email,
          contactNumber,
        }),
      });

      if (error) {
        return { errors: true };
      }
    } catch {
      return { errors: true };
    }

    return { success: true };
  });
