"use client";

import { Card, CardContent } from "@/components/ui/card";

import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { Sparkles } from "lucide-react";
import { TechStack } from "../types";

const techStack: TechStack[] = [
  {
    title: "Fast & SEO-Optimized",
    description:
      "We build lightning-fast websites that rank better on search engines and load instantly.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
    ],
  },
  {
    title: "Modern User Experience",
    description:
      "Clean, responsive, and interactive designs that work perfectly on all devices.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Powerful Backend",
    description:
      "Secure and scalable systems to handle your business logic and integrations.",
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
  {
    title: "Reliable Databases",
    description:
      "We use robust databases to keep your data safe, fast, and scalable.",
    tech: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
];

export default function HowWeBuildSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/40">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-left md:text-center mb-12">
          <div className="flex justify-start md:justify-center mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
            How We Build High-Performing Websites
          </h2>

          <p className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-base">
            We use modern, proven technologies to deliver fast, scalable, and
            reliable digital solutions for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((item, index) => (
            <Card
              key={index}
              className="rounded-sm bg-transparent shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                {/* Title */}
                <h3 className="font-semibold text-lg">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                {/* Tech with logos */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {item.tech.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full text-xs"
                      >
                        <Icon />
                        <span>{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
