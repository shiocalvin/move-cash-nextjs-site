import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

export default function HeroTexts() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
        <div className="w-full flex flex-col gap-7 justify-center items-center md:max-w-2xl py-3 px-0">
          <h1 className="text-7xl text-center font-bold text-primary-green antialiased tracking-tight">
            Startups with Better Finance Experience
          </h1>
          <h1 className="text-center text-2xl mx-3 text-secondary-green font-semibold tracking-normal">
            Finance describes finance as related to sovereign state entities and
            related public entities
          </h1>
          <CustomButton
            className="pt-2 shadow-2xl"
            name="Join Your Business With Us."
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col flex-grow relative">
        <Image
          src={"/hand-money.jpg"}
          alt="Hand Holding Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* <div className="w-full flex flex-col flex-grow bg-red-900">
        <Image src={"/hand-money.jpg"} alt="Hand Holding Image"></Image>
      </div> */}
    </>
  );
}
