"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-[30%_70%] gap-12 lg:gap-16">
          <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
            <div>
              <h4 className="text-sm md:text-base font-semibold capitalize text-primary mb-0.5 md:mb-1">
                Build with us
              </h4>
              <h3 className="text-2xl md:text-3xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground mt-4">
                We look forward to hearing from you!
              </p>
            </div>

            <div className="gap-4 md:gap-5 flex flex-col">
              <p className="text-xl md:text-2xl font-bold">
                Call Us or Text Us
              </p>
              <address className="not-italic space-y-1">
                <p className="text-base md:text-lg font-semibold">
                  Phone:{" "}
                  <Link
                    href="tel:+27738931861"
                    className="text-primary font-medium hover:underline  rounded-sm"
                  >
                    073 893 1861
                  </Link>
                </p>

                <p className="text-base md:text-lg font-semibold">
                  Email:{" "}
                  <Link
                    href="mailto:synth@creations.com"
                    className="text-primary font-medium hover:underline  rounded-sm"
                  >
                    synth@creations.com
                  </Link>
                </p>
              </address>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              <p className="text-lg md:text-xl font-bold">Hours</p>
              <div className="text-muted-foreground">
                <p> Monday: 9:00 AM - 5:00 PM </p>
                <p>Tuesday: 9:00 AM - 5:00 PM</p>
                <p>Wednesday: 9:00 AM - 5:00 PM</p>
                <p>Thursday: 9:00 AM - 5:00 PM</p>
                <p>Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p>Public Holiday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
