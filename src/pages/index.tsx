import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <Features></Features>
    </>
  );
}
