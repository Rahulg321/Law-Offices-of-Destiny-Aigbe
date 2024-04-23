import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordianItems = [
  {
    uniqueValue: "item-2",
    question: "Which Vercel plan is right for me?",
    answer:
      "Our Hobby plan is for personal, non-commercial use. Pro is for small teams with moderate bandwidth and collaboration requirements. Enterprise is for teams seeking greater performance, collaboration, and security. Contact our sales team to learn more.",
  },
  {
    uniqueValue: "item-3",
    question: "Do we offer custom invoicing?",
    answer:
      "Yes, we offer custom invoicing for Enterprise customers. Contact our sales team to learn more.",
  },
  {
    uniqueValue: "item-4",
    question: "What are the limits for each plan?",
    answer:
      "Our limits are listed here. Additionally, check out our Fair Use Policy.Ye.",
  },
  {
    uniqueValue: "item-5",
    question: "I went over my limits. What can I do?",
    answer:
      "We are glad you are growing and scaling with Vercel! Please contact us to discuss your resource requirements and we can customize a plan for your team.",
  },
  {
    uniqueValue: "item-7",
    question: "Can I buy additional bandwith?",
    answer:
      "Yes! On top of your included 1,000 GB of Bandwidth on Pro, you can pay as you go for additional Bandwidth at $40 per 100 GB, uncapped. If you have a free Hobby account, you are limited to 100 GB of Bandwidth and cannot purchase additional usage.",
  },
  {
    uniqueValue: "item-6",
    question: "How can I transfer a domain name to vercel",
    answer:
      "Potentially. Transfer fees are dependent on the TLD and the domain renewal fee. The domain-transfer workflow will alert you of fees before initiating transfer.",
  },
];

const FaqAccordian = () => {
  return (
    <Accordion type="single" collapsible>
      {accordianItems.map((e) => (
        <React.Fragment key={e.uniqueValue}>
          <AccordionItem value={e.uniqueValue}>
            <AccordionTrigger className=" md:text-base lg:text-lg">
              {e.question}
            </AccordionTrigger>
            <AccordionContent className="lg:text-lg md:text-base">
              {e.answer}
            </AccordionContent>
          </AccordionItem>
        </React.Fragment>
      ))}
    </Accordion>
  );
};

export default FaqAccordian;
