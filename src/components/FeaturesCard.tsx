import React from "react";
import { MdArrowRightAlt } from "react-icons/md";


export default function FeaturesCard({
  Logo,
  heading,
  text,
}: {
  Logo: React.ElementType;
  heading: string;
  text: string;
}) {
  return (
    <div className="w-[300px] py-5 px-4 bg-beige-full rounded-md shadow-2xl transition duration-150  hover:ease-in hover:bg-secondary-green ">
      <Logo />
      <h1 className="mt-2 font-medium text-xl tracking-tight">{heading}</h1>
      <p className="mt-3 text-lg antialiased tracking-tight">{text}</p>
      <span className="flex items-center gap-3 mt-3">
        <button className="text-lg font-medium">Learn More</button>
        <MdArrowRightAlt size={20} className="mt-1"/>
      </span>
    </div>
  );
}
