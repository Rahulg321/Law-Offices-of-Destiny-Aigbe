import { KeyTextField } from "@prismicio/client";
import clsx from "clsx";
import React from "react";

type OfficeCardProps = {
  heading: KeyTextField;
  emailAddress: KeyTextField;
  fax: KeyTextField;
  contactNumber: KeyTextField;
  address: KeyTextField;
  classname?: string;
};

const OfficeCard = ({
  heading,
  emailAddress,
  fax,
  contactNumber,
  address,
  classname,
}: OfficeCardProps) => {
  return (
    <div className={clsx("bg-card p-4 md:p-6 lg:p-8", classname)}>
      <h2 className="mb-4 md:mb-6 text-mainC">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-mainC">Address</h3>
          <p>{address}</p>
        </div>
        <div>
          <h3 className="text-mainC">Contact Number</h3>
          <p>{contactNumber}</p>
        </div>
        <div>
          <h3 className="text-mainC">Fax</h3>
          <p>{fax}</p>
        </div>
        <div>
          <h3 className="text-mainC">Email Address</h3>
          <p>{emailAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeCard;
