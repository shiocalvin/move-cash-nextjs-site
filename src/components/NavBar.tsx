import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItem from "./NavItem";
import CustomButton from "./CustomButton";

export default function NavBar() {
  return (
    <div className="">
      <MaxWidthWrapper>
      <div className="flex flex-row gap-60 sm:justify-center md:justify-between md:gap-0 items-center py-2">
            <div>
              <h1 className="text-base font-semibold tracking-tight text-primary-green">
                MoveCash
              </h1>
            </div>
            <div className="hidden md:flex flex-row items-center justify-center sm:gap-2 md:gap-3 lg:gap-20">
              <NavItem link={"/about"} name={"about"} />
              <NavItem link={"/about"} name={"support"} />
              <NavItem link={"/about"} name={"features"} />
              <NavItem link={"/about"} name={"community"} />
              <NavItem link={"/about"} name={"register"} />
            </div>
            <CustomButton name={"Login Now"} />
          </div>
      </MaxWidthWrapper>
    </div>
  );
}
