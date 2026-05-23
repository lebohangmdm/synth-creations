"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuButton } from "./MenuButton";
import { NavigationLinks } from "../types";

const navigation: NavigationLinks[] = [
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Experience", href: "/#work" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b  bg-white/80 backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-300 flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-lg md:text-xl font-semibold text-gray-900"
            >
              SynthCreations.
            </Link>
          </div>

          <div className="hidden md:flex items-center md:gap-8 lg:gap-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm md:text-base transition-all duration-150 text-gray-900 hover:text-primary font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <MenuButton />
        </div>
      </div>
    </nav>
  );
}
