"use client";

import Link from "next/link";
import { BadgeCheck, ExternalLink } from "lucide-react";
import certifications, { Certification } from "@/data/certifications";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/responsive-dialog";
import SectionWrapper from "@/components/ui/section-wrapper";
import { SectionHeader } from "./section-header";

type CertificateTheme = {
  paper: string;
  ink: string;
  frame: string;
  accent: string;
  label: string;
};

const themes: Record<Certification["theme"], CertificateTheme> = {
  claude: {
    paper: "bg-[#e7dfd0]",
    ink: "text-[#282722]",
    frame: "border-[#282722]",
    accent: "text-[#282722]",
    label: "ANTHROPIC",
  },
  cs50: {
    paper: "bg-[#fbfaf7]",
    ink: "text-[#28272b]",
    frame: "border-[#c8757e]",
    accent: "text-[#9b4955]",
    label: "HARVARD UNIVERSITY",
  },
  helsinki: {
    paper: "bg-[#f4e8e5]",
    ink: "text-[#173d3d]",
    frame: "border-[#8ca39a]",
    accent: "text-[#173d3d]",
    label: "UNIVERSITY OF HELSINKI",
  },
  hackerRank: {
    paper: "bg-[#ffffff]",
    ink: "text-[#25252a]",
    frame: "border-[#c9c9cf]",
    accent: "text-[#20212b]",
    label: "HACKERRANK",
  },
  claudeGreen: {
    paper: "bg-[#7c9062]",
    ink: "text-[#1d2119]",
    frame: "border-[#263221]",
    accent: "text-[#20251b]",
    label: "ANTHROPIC",
  },
};

const CertificateArtwork = ({
  certification,
  large = false,
}: {
  certification: Certification;
  large?: boolean;
}) => {
  const theme = themes[certification.theme];

  return (
    <div
      className={`relative flex aspect-[1.43] w-full flex-col items-center justify-between overflow-hidden ${theme.paper} ${theme.ink} ${large ? "p-5 sm:p-8" : "p-3 sm:p-4"}`}
      aria-label={`${certification.title} certificate preview`}
      role="img"
    >
      <div className={`absolute inset-[4%] border ${theme.frame}`} />
      <div className={`relative flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] sm:text-[10px] ${theme.accent}`}>
        <BadgeCheck className="h-4 w-4 shrink-0" />
        <span>{certification.issuer}</span>
      </div>
      <div className="relative flex w-full flex-1 flex-col items-center justify-center px-2 text-center">
        <span className={`mb-2 text-[8px] font-semibold uppercase tracking-[0.18em] opacity-70 ${theme.accent}`}>
          Certificate of Completion
        </span>
        <span className={`mb-2 max-w-full font-serif text-xl leading-tight sm:text-2xl ${large ? "md:text-3xl" : ""}`}>
          Md Abdullah All Mobin
        </span>
        <span className="mb-1 text-[10px] opacity-75">has completed</span>
        <span className={`max-w-[90%] text-balance font-display text-sm font-bold leading-tight sm:text-base ${large ? "md:text-xl" : ""}`}>
          {certification.title}
        </span>
        {certification.date && (
          <span className="mt-2 text-[9px] opacity-75">{certification.date}</span>
        )}
      </div>
      <span className={`relative text-[8px] font-bold uppercase tracking-[0.18em] sm:text-[9px] ${theme.accent}`}>
        {theme.label}
      </span>
    </div>
  );
};

const CertificationCard = ({ certification }: { certification: Certification }) => (
  <ResponsiveDialog>
    <ResponsiveDialogTrigger className="group flex w-full flex-col overflow-hidden rounded-xl border border-foreground/10 bg-background/45 text-left shadow-sm backdrop-blur-sm transition-colors hover:border-foreground/25 hover:bg-background/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <CertificateArtwork certification={certification} />
      <span className="flex min-h-20 w-full flex-col justify-center gap-1 px-4 py-3">
        <span className="font-display text-base font-semibold leading-snug">{certification.title}</span>
        <span className="text-sm text-muted-foreground">{certification.issuer}</span>
      </span>
    </ResponsiveDialogTrigger>
    <ResponsiveDialogContent className="md:max-w-5xl md:p-6">
      <div className="grid gap-5 md:grid-cols-[1.3fr_0.7fr] md:items-center md:gap-8">
        <CertificateArtwork certification={certification} large />
        <div className="flex flex-col items-start gap-4">
          <div>
            <ResponsiveDialogTitle className="font-display text-xl font-bold leading-snug sm:text-2xl">
              {certification.title}
            </ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="mt-1 text-sm text-muted-foreground">
              {certification.issuer}
              {certification.date ? ` · ${certification.date}` : ""}
            </ResponsiveDialogDescription>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{certification.description}</p>
          {certification.credentialId && (
            <p className="text-xs text-muted-foreground">
              Credential ID: <span className="font-mono text-foreground">{certification.credentialId}</span>
            </p>
          )}
          <Link
            href={certification.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Verify certificate
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </ResponsiveDialogContent>
  </ResponsiveDialog>
);

const CertificationsSection = () => (
  <SectionWrapper id="certifications" className="mx-auto max-w-7xl px-4 pb-16">
    <SectionHeader
      id="certifications"
      title="Certifications"
      desc="Courses and skill credentials in computer science, AI, and programming."
    />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {certifications.map((certification) => (
        <CertificationCard key={certification.credentialId ?? certification.title} certification={certification} />
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
