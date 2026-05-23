import React from "react";
import { CardImage } from "./CardImage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { Project } from "../types";

const projects: Project[] = [
  {
    name: "Verdun Business Advisory",
    href: "https://verdunba.co.za",
    image: "/verdun-Photoroom.png",
  },
  {
    name: "ebuild",
    href: "https://e-build-app.netlify.app/",
    image: "/ebuild-Photoroom.png",
  },
  {
    name: "Investo",
    href: "https://investo-investment.netlify.app",
    image: "/investo-Photoroom.png",
  },
  {
    name: "Bondfolio",
    href: "https://bondfolio-book.netlify.app",
    image: "/bondfolio-Photoroom.png",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-300 mx-auto px-4 ">
        <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5  flex flex-col items-center text-left md:text-center">
          <h2 className="font-bold text-primary text-2xl md:text-3xl lg:text-5xl max-w-4xl">
            Most Recent website design projects
          </h2>

          <p className="text-base md:text-lg">
            Have a look at the most recent website design projects we have
            completed.
          </p>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project) => (
            <CardImage key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="
            flex items-center justify-center gap-2
            h-9 sm:h-10 md:h-11 lg:h-12
            px-4 sm:px-6 md:px-8
            text-base md:text-lg
            rounded-3xl
            transition-colors duration-200
            hover:bg-primary hover:text-white
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            "
          >
            <span className="leading-none">
              Book a FREE 15-Minute Consultation Call
            </span>

            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
