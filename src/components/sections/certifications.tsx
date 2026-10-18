"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
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

// Images live in /public/certificates
const imageByTheme: Record<Certification["theme"], string> = {
  claude: "/certificates/claude-101.png",
  cs50: "/certificates/cs50.png",
  helsinki: "/certificates/ethics-of-ai.png",
  hackerRank: "/certificates/hackerrank-problem-solving.png",
  claudeGreen: "/certificates/ai-fluency.png",
};

// HackerRank has two certificates (same theme), so pick by title.
const getCertificateImage = (certification: Certification & { image?: string }) => {
  if (certification.image) return certification.image;
  if (certification.theme === "hackerRank" && /python/i.test(certification.title)) {
    return "/certificates/hackerrank-python.png";
  }
  return imageByTheme[certification.theme];
};

const CertificateArtwork = ({
  certification,
  large = false,
}: {
  certification: Certification;
  large?: boolean;
}) => (
  <div className="relative isolate aspect-[1.35] w-full overflow-hidden rounded-[20px] border border-foreground/15 bg-white">
    <Image
      src={getCertificateImage(certification)}
      alt={`${certification.title} certificate`}
      fill
      sizes={large ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"}
      className="object-contain"
      priority={large}
    />
  </div>
);

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
            View certificate
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