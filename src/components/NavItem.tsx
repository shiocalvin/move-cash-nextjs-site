import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function NavItem({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <>
      <Link href={link} className={buttonVariants({variant: "link"})}>
        <span className="font-normal text-sm uppercase text-secondary-green tracking-tight">{name}</span>
      </Link>
    </>
  );
}
