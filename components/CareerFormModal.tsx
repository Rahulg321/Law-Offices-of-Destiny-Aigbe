"use client";

import { Content } from "@prismicio/client";
import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import SubmitButton from "./SubmitButton";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { sendApplication } from "@/app/actions";

type CareerFormModalProps = {
  post: Content.CareerDocument;
};

const initialState = {
  success: false,
};

const CareerFormModal = ({ post }: CareerFormModalProps) => {
  const modal = useRef<HTMLDialogElement | null>(null);
  const { toast } = useToast();

  return (
    <>
      <Button
        className="bg-mainC w-full"
        onClick={() => {
          modal.current?.showModal();
        }}
      >
        Apply Now
      </Button>
      {/* apply styles to the modal to appear at the center of the screen */}
      <dialog
        className="modal rounded-md top-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]  p-6 md:p-10"
        id="modal"
        ref={modal}
      >
        <div
          className="absolute right-2 top-2 cursor-pointer rounded-xl border p-2"
          onClick={() => {
            modal.current?.close();
          }}
        >
          <RxCross1 />
        </div>
        <h2 className="text-[#165679]">Apply Now</h2>
        <h3 className="mb-1">{post.data.name}</h3>
        <h4 className="mb-6">{post.data.department}</h4>
        <form
          action={async (formData) => {
            // await for 3 seconds
            // await new Promise((resolve) => setTimeout(resolve, 3000));

            const response = await sendApplication(formData, post.data.name);
            if (response.error) {
              toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              });
            } else {
              toast({
                title: "Successful🎉.",
                description: "Your application has been sent.",
              });
              modal.current?.close();
            }
          }}
          className="flex flex-col"
          method="dialog"
        >
          <div className="mb-2 flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              required
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="phonenumber" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              className="form-input"
              required
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="resume" className="font-semibold">
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              placeholder="resume"
              className="form-input"
              required
            />
          </div>
          <SubmitButton />
        </form>
      </dialog>
    </>
  );
};

export default CareerFormModal;
