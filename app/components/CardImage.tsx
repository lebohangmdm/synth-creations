import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import placeholder from "../../public/placeholder.jpg";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CardImage({
  project,
}: {
  project: { name: string; href: string; image?: string };
}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm rounded-xs pt-0 border border-slate-200 shadow-lg overflow-hidden bg-white">
      <Image
        src={project.image || placeholder}
        alt="web design cover"
        className="border-b border-gray-300 rounded-xs object-cover overflow-hidden"
        width={400}
        height={250}
      />
      <CardHeader>
        <CardTitle className="text-primary font-heading text-base md:text-lg">
          {project.name}
        </CardTitle>

        <Badge
          variant={"outline"}
          className="mb-2 mt-4 py-3 px-3 text-sm border border-gray-500"
        >
          Web Design
        </Badge>
      </CardHeader>
      <CardFooter className="border-none pl-2  pt-0 bg-white">
        <Button
          asChild
          variant="link"
          className="group inline-flex items-center font-semibold  gap-2 px-2 transition-colors duration-300 text-gray-700 hover:no-underline hover:text-primary"
        >
          <Link href={project.href} target="_blank" rel="noopener noreferrer">
            <span>View Project</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
