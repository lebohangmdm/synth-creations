"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormValues,
} from "../../lib/validations/contact-form";
import { CardHeader, CardTitle, Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),

    defaultValues: {
      name: "",
      location: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSuccess("");
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...values,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        reset();
      } else {
        setError("Something went wrong.");
      }
    } catch {
      setError("Failed to send message.");
    }
  };

  return (
    <Card className="rounded-sm shadow-xl shadow-gray-50 border-none max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 lg:py-10">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-left font-bold">
          Get A Quote
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {/* Name */}
          <div className="space-y-2 md:space-y-3">
            <Label
              htmlFor="name"
              className="text-base md:text-lg font-semibold"
            >
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="space-y-2 md:space-y-3">
            <Label
              htmlFor="location"
              className="text-base md:text-lg font-semibold"
            >
              Location
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="Johannesburg"
              {...register("location")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4"
            />
            {errors.location && (
              <p className="text-sm text-destructive mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2 md:space-y-3">
            <Label
              htmlFor="email"
              className="text-base md:text-lg font-semibold"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Contact */}
          <div className="space-y-2 md:space-y-3">
            <Label
              htmlFor="contact"
              className="text-base md:text-lg font-semibold"
            >
              Contact Number
            </Label>
            <Input
              id="contact"
              type="tel"
              placeholder="+27 78 123 4567"
              {...register("contact")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4"
            />
            {errors.contact && (
              <p className="text-sm text-destructive mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>

          {/* Message (full width always) */}
          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="message"
              className="text-base md:text-lg font-semibold"
            >
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              rows={5}
              {...register("message")}
              required
              className="border-none rounded-xs md:rounded-sm md:h-11 min-h-30 resize-none py-2 px-2 md:py-3 md:px-3"
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button (full width always) */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="default"
              size="lg"
              className="rounded-md text-base md:text-lg h-9 md:h-10 lg:h-11 px-4 md:px-8  transition-colors duration-200 hover:bg-gray-700 hover:text-white"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
            {success && (
              <p className="text-sm text-green-600 mt-4">{success}</p>
            )}

            {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
