import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";

type PriceCardProps = {
  children?: React.ReactNode;
  heading: string;
  description: string;
};

const PriceCard = ({ children, heading, description }: PriceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-mainC">{heading}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button className="w-full p-6 text-lg bg-mainC">Contact Us</Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
