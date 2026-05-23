import Image from "next/image";
import "../../public/designers.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Choose = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          <div className="relative w-full aspect-square">
            <Image
              src="/designers.png"
              alt="Designers"
              fill
              className="object-cover rounded-sm shadow-md"
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="space-y-0.5">
              <h4 className="text-sm md:text-base text-primary font-semibold">
                Why Choose Us
              </h4>
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                Why choose our web design packages for your business?
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-base md:text-lg">
              <p>
                With over 15 years of website design experience, we know what
                works and what does not. Our goal is simple, to give you a
                website that not only looks good but actually serves a purpose
                by attracting attention, building trust and turning visitors
                into loyal customers.
              </p>
              <p>
                We believe that a great website is more than just a pretty face.
                It&apos;s a powerful tool that can help you achieve your
                business goals and stand out from the competition. Our web
                design packages are designed to provide you with a comprehensive
                solution that includes everything you need to create a stunning
                website that drives results.
              </p>
            </div>
            <Button
              asChild
              variant={"default"}
              size={"sm"}
              className="self-start text-base  px-4 mt-2  sm:px-6 md:px-8 lg:text-lg min-h-12 capitalize rounded-sm  transition-all duration-200 cursor-pointer hover:bg-primary/80"
            >
              <Link href={"/contact"}>
                <span className="leading-none">Get a Quote</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
