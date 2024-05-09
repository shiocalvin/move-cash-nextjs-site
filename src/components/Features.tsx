import React from "react";
import { SiAmazonaws } from "react-icons/si";
import { SlPaypal } from "react-icons/sl";
import { FaStripeS } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";





export default function Features() {
  return (
    <div className="w-full bg-beige-faint flex flex-col mt-0 gap-2">
      <div className="mx-auto px-3 flex flex-col md:flex-row gap-2 md:gap-4 mt-2 py-6">
        <span className="flex flex-row justify-center items-center gap-2">
          <SiAmazonaws className="text-muted-foreground" size={30} />
          <span className="text-sm tracking-tight font-bold italic text-muted-foreground">Amazon Web Services</span>
        </span>
        <span className="flex flex-row justify-center items-center gap-2">
          <SlPaypal className="text-muted-foreground" size={30} />
          <span className="text-sm tracking-tight font-bold italic text-muted-foreground">PayPal</span>
        </span>
        <span className="flex flex-row justify-center items-center gap-2">
          <FaStripeS className="text-muted-foreground" size={30} />
          <span className="text-sm tracking-tight font-bold italic text-muted-foreground">Stripe</span>
        </span>
        <span className="flex flex-row justify-center items-center gap-2">
          <SiVisa className="text-muted-foreground" size={30} />
        </span>
        <span className="flex flex-row justify-center items-center gap-2">
          <FaCcMastercard className="text-muted-foreground" size={30} />
          <span className="text-sm tracking-tight font-bold italic text-muted-foreground">Master Card</span>
        </span>
      </div>
      <div className="py-4 flex flex-row justify-center items-center">
        <h1 className="text-4xl w-full px-7 md:px-0  md:max-w-3xl text-center text-secondary-green font-bold antialiased ">Comprehensive Features for Personal Finance Management</h1>
      </div>
    </div>
  );
}
