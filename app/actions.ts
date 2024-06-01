"use server";

import { TcontactFormSchema } from "./zod-schemas";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/components/emails/ContactFormEmail";
import { KeyTextField } from "@prismicio/client";
import { put } from "@vercel/blob";
import CareerApplicationEmail from "@/components/emails/CareerApplicationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendApplication(
  formData: FormData,
  position: KeyTextField | string
) {
  const name = formData.get("name") as string;
  const phoneNumber = formData.get("phonenumber") as string;
  const imageFile = formData.get("resume") as File;

  const blob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  console.log("name is ", name);
  console.log("successfully uploaded blob", blob);
  const { url, downloadUrl, pathname, contentType } = blob;

  const { data, error } = await resend.emails.send({
    from: `Aigbe Law Firm <info@darkalphacapital.com>`,
    to: [
      "rg5353070@gmail.com",
      "info@darkalphacapital.com",
      "careers@darkalphacapital.com",
    ],
    subject: "sending resume from Aigbe Law Firm",
    react: React.createElement(CareerApplicationEmail, {
      name,
      phonenumber: phoneNumber,
      position,
    }),
    attachments: [
      {
        filename: pathname,
        path: url,
      },
    ],
  });

  if (error) {
    console.log("could not send email");
    // could not send email
    return {
      error: {
        name: "There was an error with this name",
        email: "There was an error with this email",
      },
      message: "Failed submission",
    };
  }

  // email was sent successfully
  console.log("email was sent successfully");
  return { error: null, message: `Application was sent succesfully` };
}

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
