import { Package } from "../types";
import ServiceCard from "./ServiceCard";

const packages: Package[] = [
  {
    title: "Starter Website",
    badge: "Popular",
    price: "R2,000",
    description:
      "A smart one-page website package designed to help your business look credible and generate leads quickly.",
    features: [
      "1 Page Website Design",
      "5 High-Converting Sections",
      "Fully Mobile Responsive",
      "1 Months Free Hosting",
      "Free .co.za Domain",
      "Basic SEO Setup",
      "Contact Forms Included",
      "WhatsApp Chat Integration",
      "Google Analytics Setup",
      "Delivered in 7 Business Days",
    ],
  },
  {
    title: "Business Website",
    badge: "Best Value",
    price: "R3,000",
    description:
      "A professional multi-page website ideal for growing businesses that need more pages",
    features: [
      "5 Page Website Design",
      "Custom Design",
      "Responsive Layout",
      "1 Months Free Hosting",
      "Free .co.za Domain",
      "Advanced SEO Setup",
      "Contact Forms",
      "WhatsApp Chat",
      "Google Analytics Setup",
      "Delivered in 10 Business Days",
    ],
  },
  {
    title: "E-Commerce Store",
    badge: "Premium",
    price: "R5,000",
    description:
      "A complete online store package built to help you sell products, manage orders, and grow online.",
    features: [
      "5+ Page Website Design",
      "Unlimited Products",
      "Inventory Management",
      "Payment Gateway Setup",
      "Courier Integration",
      "Responsive Design",
      "1 Months Free Hosting",
      "Free .co.za Domain",
      "Google Merchant Setup",
      "Analytics Included",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="pt-12 pb-16 md:pb-20 lg:pb-24 bg-zinc-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <ServiceCard key={index} packages={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
