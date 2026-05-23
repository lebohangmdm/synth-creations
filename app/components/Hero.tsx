import React from "react";

import hero from "../../public/bg-hero.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-16  w-screen ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  lg:px-8 py-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary md:text-5xl lg:text-6xl">
              Build a Website That Grows Your Online Presence
            </h1>
            <p className="mt-6 text-base md:text-lg lg:text-xl max-w-xl text-gray-700">
              We craft high-performing, modern websites for businesses that want
              to stand out online, attract more customers, and grow with
              confidence. From sleek landing pages to full business websites, we
              turn your ideas into a professional digital presence that works
              24/7.
            </p>

            <div className="mt-8 flex gap-4">
              <Button
                asChild
                variant="default"
                size={"lg"}
                className="text-base py-2 px-4 sm:py-3 sm:px-6 lg:text-lg min-h-11 capitalize rounded-sm  transition-all duration-200 cursor-pointer hover:bg-primary/80"
              >
                <Link href={"/contact"}>Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size={"lg"}
                className="text-base py-2 px-4 sm:py-3 sm:px-6 lg:text-lg min-h-11 capitalize rounded-sm transition-all duration-200 cursor-pointer"
              >
                <Link href={"#work"}>View My Work</Link>
              </Button>
            </div>
          </div>

          <div>
            <Image src={hero} alt="Hero Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
