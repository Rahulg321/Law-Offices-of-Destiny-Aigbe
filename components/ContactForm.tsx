"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "./ui/use-toast";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  contactNumber: z
    .string({
      required_error: "Contact Number is required",
    })
    .trim() // Remove leading/trailing whitespace
    .refine(
      (value) => /^\d+(?:[-\+]?\d)*$/.test(value),
      "Invalid phone number format"
    ),
});

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contactNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "Scheduled: Catch up 🎉",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-mainC text-lg">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="john doe"
                  {...field}
                  className="p-6 text-xl"
                />
              </FormControl>
              <FormDescription>Please enter a valid name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-mainC text-lg">
                ContactNumber
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="+(213) 312 3123"
                  {...field}
                  className="p-6 text-xl"
                />
              </FormControl>
              <FormDescription>Enter your mobile number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-mainC text-lg">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="john@gmail.com"
                  {...field}
                  type="email"
                  className="p-6 text-xl"
                />
              </FormControl>
              <FormDescription>Please enter a valid email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-mainC text-lg">
                Write your message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a brief description here"
                  className="resize-none p-6 text-xl"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please enter a valid email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="p-6 bg-mainC text-white text-lg">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
