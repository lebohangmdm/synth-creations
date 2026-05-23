import Link from "next/link";

import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | SynthCreations",
  description:
    "Get in touch with SynthCreations for web development, business solutions, and digital services. We’re here to help you grow your business.",

  keywords: [
    "Contact SynthCreations",
    "Web Development",
    "Digital Solutions",
    "Online Presence",
    "South Africa",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us | SynthCreations",
    description:
      "Reach out to SynthCreations for professional web and online presence solutions",
    url: "https://yourdomain.com/contact",
    siteName: "SynthCreations",
    locale: "en_ZA",
    type: "website",

    images: [
      {
        url: "/contact-img.png",
        width: 1200,
        height: 630,
        alt: "Contact us SynthCreations - Web Design and Web Development Services",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary bg-gradient-to-r from-primary to-blue-700">
      <div className="max-w-325 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 md:space-y-2.5 mb-6 md:mb-16 lg:mb-20 ">
          <h2 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl max-w-3xl text-left md:text-center mx-auto">
            Let&apos;s Build Something Great Together
          </h2>
          <p className=" md:text-lg text-white max-w-4xl text-left md:text-center mx-auto">
            Ready to start a project ?
          </p>
        </div>
        <div className="max-w-325 mx-auto  bg-white px-4 sm:px-6 md:px-8 py-6 md:py-8 lg:py-10 rounded-md shadow-md">
          <div className="grid md:grid-cols-2 lg:grid-cols-[30%_70%] gap-12 lg:gap-16 ">
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
                      href="mailto:info@yourcompany.com"
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
      </div>
    </section>
  );
}
