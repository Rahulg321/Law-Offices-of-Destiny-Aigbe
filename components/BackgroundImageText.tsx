import clsx from "clsx";
import Image from "next/image";
import React from "react";

type BackgroundImageTextProps = {
  children?: React.ReactNode;
  classname?: string;
};

const BackgroundImageText = ({
  children,
  classname,
}: BackgroundImageTextProps) => {
  return (
    <section
      className={clsx("relative overflow-hidden bg-slate-900", classname)}
    >
      <div className="absolute inset-0 z-10">{children}</div>
      <Image
        className="trasition absolute left-0 right-0 aspect-1 object-cover duration-300 ease-in-out "
        src={`https://images.unsplash.com/photo-1712876473384-f34af7084a71?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        alt="Mountains Background Image"
        fill
      />
    </section>
  );
};

export default BackgroundImageText;
