import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import React from "react";
import { put } from "@vercel/blob";
import CareerApplicationEmail from "@/components/emails/CareerApplicationEmail";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export const Route = createFileRoute("/api/send-application")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const formData = await request.formData();
        const position = formData.get("position") as string;
        const name = formData.get("name") as string;
        const phoneNumber = formData.get("phonenumber") as string;
        const imageFile = formData.get("resume") as File;

        const blob = await put(imageFile.name, imageFile, {
          access: "public",
        });
        const { url, pathname } = blob;

        const { error } = await getResend().emails.send({
          from: `Aigbe Law Firm <info@darkalphacapital.com>`,
          to: [
            "rg5353070@gmail.com",
            "careers@aigbelaw.com",
            "destiny@aigbelaw.com",
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
          return Response.json({
            error: {
              name: "There was an error with this name",
              email: "There was an error with this email",
            },
            message: "Failed submission",
          });
        }

        return Response.json({
          error: null,
          message: "Application was sent succesfully",
        });
      },
    },
  },
});
