import React from "react";
import AccordionFaq from "./AccordionFaq";
import Link from "next/link";

const Faq = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 lg:grid-cols-[40%_60%]">
          <div className="flex flex-col gap-4 lg:gap-5">
            <h2 className="font-bold text-primary text-2xl md:text-3xl lg:text-5xl max-w-4xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base md:text-lg">
                Find clear answers on what’s included, how our packages work,
                and why professional website design is essential for your
                business’s success.
              </p>
              <p className="text-base md:text-lg">
                Feel free to{" "}
                <Link
                  href="/contact"
                  className="text-primary font-semibold hover:underline hover:underline-offset-2 transition-all duration-150"
                >
                  contact us
                </Link>{" "}
                should you have additional questions or concerns.
              </p>
            </div>
          </div>

          <AccordionFaq />
        </div>
      </div>
    </section>
  );
};

export default Faq;
