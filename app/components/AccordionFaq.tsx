import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function AccordionFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="contact"
      className="flex flex-col gap-4"
    >
      {faqItems.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className={cn(
            "group rounded-2xl border border-border/50",
            "bg-white/60 backdrop-blur-sm",
            "shadow-sm hover:shadow-md",
            "transition-all duration-300 ease-in-out",
            "px-5",
          )}
        >
          <AccordionTrigger
            className={cn(
              "text-left text-base md:text-lg font-medium",
              "py-4",
              "transition-colors duration-200",
              "group-hover:text-primary",
            )}
          >
            {item.title}
          </AccordionTrigger>

          <AccordionContent
            className={cn(
              "text-sm md:text-base",
              "text-muted-foreground",
              "leading-relaxed",
              "pb-4 pt-1",
              "animate-in fade-in-50 duration-200",
            )}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const faqItems = [
  {
    value: "contact",
    title: "What happens after I contact you?",
    content:
      "One of our team members will reach out to discuss your requirements, usually through a short online questionnaire. Once completed, we’ll send you a tailored quotation.",
  },
  {
    value: "customization",
    title: "Are these packages customizable?",
    content:
      "Absolutely. Every business is different, so we tailor each package to match your goals, needs, and budget.",
  },
  {
    value: "payment",
    title: "What are your payment terms?",
    content:
      "We require a 50% deposit to begin and the remaining 50% upon completion. Payments can be made via bank transfer or major cards.",
  },
  {
    value: "hosting",
    title: "Is hosting and domain registration included?",
    content:
      "Yes, we include a free domain for the first year and 1 month of free hosting.",
  },
  {
    value: "timeline",
    title: "How long does a website project take?",
    content:
      "Most websites are completed within 1–2 weeks depending on complexity.",
  },
  {
    value: "support",
    title: "Do you provide post-launch support?",
    content:
      "Yes, we provide ongoing support including updates, maintenance, and troubleshooting.",
  },
  {
    value: "existing",
    title: "What if I already have hosting and a domain?",
    content:
      "That’s perfectly fine. We’ll work with your existing setup and handle the configuration.",
  },
];
