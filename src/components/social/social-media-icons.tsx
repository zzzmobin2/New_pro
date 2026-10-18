"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    className: "bg-background/80 hover:bg-accent",
    icon: <SiGithub size={32} className="text-slate-800 dark:text-slate-100" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    className: "bg-background/80 text-[#0A66C2] hover:bg-accent",
    icon: <SiLinkedin size={32} />,
  },
  {
    name: "YouTube",
    href: config.social.youtube,
    className: "bg-background/80 text-red-600 hover:bg-accent",
    icon: <SiYoutube size={32} />,
  },
  {
    name: "Facebook",
    href: config.social.facebook,
    className: "bg-background/80 text-[#1877F2] hover:bg-accent",
    icon: <SiFacebook size={32} />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    className: "bg-background/80 text-pink-600 hover:bg-accent",
    icon: <SiInstagram size={32} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank" rel="noreferrer">
            <Button aria-label={button.name} className={`size-11 rounded-lg border shadow-lg shadow-black/30 ${button.className}`}>
              {button.icon}
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
