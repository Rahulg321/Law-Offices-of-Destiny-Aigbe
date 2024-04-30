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
import { formSchema, TcontactFormSchema } from "@/app/zod-schemas";
import { SubmitContactForm } from "@/app/actions";

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<TcontactFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      contactNumber: "",
    },
  });

  const {
    reset,
    formState: { isSubmitting, errors },
  } = form;

  async function onSubmit(values: TcontactFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const response = await SubmitContactForm(values);

    if (response.errors) {
      toast({
        title: "Uh oh! Something went wrong!! 🥲",
        variant: "destructive",
        description: "There was an error sending you request!!",
      });
    }

    if (response.success) {
      toast({
        title: "Message Received 🎉",
        description: "Your inquiry was sent successfully",
      });
    }

    reset();
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
        <Button
          type="submit"
          className="p-6 bg-mainC text-white text-lg"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
