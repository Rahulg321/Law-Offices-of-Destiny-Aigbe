import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  email: string;
  name: string;
  message: string;
  contactNumber: string;
};

const ContactFormEmail = ({
  message,
  email,
  name,
  contactNumber,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from Aigbe Law Firm</Preview>
      <Tailwind>
        <Body className="bg-static text-text">
          <Container>
            <Section className="my-10 rounded-md border px-10 py-4">
              <Heading className="leading-tight">
                Received the following message from {name}
              </Heading>
              <Text className="text-3xl font-bold text-black">{message}</Text>
              <Hr />
              <Text>This senders email is {email}</Text>
              <Text>This senders phone number is {contactNumber}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
