"use client";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  const phoneLink = config.phone.replace(/[^\d+]/g, "");

  return (
    <SectionWrapper id="contact" className="max-w-7xl mx-auto pt-24 pb-12">
      <SectionHeader id='contact' className="relative top-0 mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="z-[9999] mx-4 mt-10 flex flex-col items-center gap-5 text-center md:mt-20">
        <p className="max-w-xl text-muted-foreground">
          I&apos;m open to discussing DevOps opportunities and collaborations.
          Reach me by email, phone, or WhatsApp:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href={`mailto:${config.email}`}
            aria-label={`Email ${config.email}`}
          >
            <Mail className="mr-2 h-4 w-4" />
            {config.email}
          </a>
          <a
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href={`tel:${phoneLink}`}
            aria-label={`Call ${config.phone}`}
          >
            <Phone className="mr-2 h-4 w-4" />
            {config.phone}
          </a>
          <a
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            href={`https://wa.me/${config.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Message ${config.phone} on WhatsApp`}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
