"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({
  packages,
  index,
}: {
  packages: {
    title: string;
    badge: string;
    price: string;
    description: string;
    features: string[];
  };
  index: number;
}) {
  const { title, badge, price, description, features } = packages;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full h-full"
    >
      <Card className="rounded-xs border border-slate-200 shadow-lg overflow-hidden bg-white h-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Top Section */}
          <div className="p-5 border-b bg-white">
            <Badge
              className={`"rounded-full px-3 py-1 mb-4 hover:bg-slate-900" ${index === 1 ? "bg-primary text-white" : "bg-muted text-gray-700"}`}
            >
              {badge}
            </Badge>

            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold  sm:text-3xl md:text-4xl lg:text-5xl text-primary">
                {price}
              </p>
              <p className="text-sm font-semibold text-slate-700">
                Once off payment
              </p>
            </div>

            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features Section (grows evenly) */}
          <div className="p-5 grid gap-2 flex-grow">
            {features.map((item, i) => (
              <div
                key={i}
                className="border-b border-slate-200 px-3 py-2 hover:border-slate-300 transition-colors"
              >
                <p className="text-xs font-medium text-slate-700 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Section (always aligned) */}
          <div className="p-5 pt-0 grid gap-2 mt-auto">
            <Button asChild size="lg" className="rounded-sm h-10 text-sm">
              <Link
                href={"/contact"}
                className="flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className=" h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
