import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiFacebook, SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const authorWords = config.author.split(" ");
  const firstLine = authorWords.slice(0, 2).join(" ");
  const secondLine = authorWords.slice(2).join(" ");

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-svh min-h-[620px]")}>
      <div className="grid w-full min-w-0 md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1 flex w-full min-w-0 flex-col items-center justify-start md:items-start md:justify-center",
            "px-6 pt-28 sm:px-10 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex w-full min-w-0 flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "mt-4 cursor-default whitespace-nowrap bg-clip-text text-sm font-medium text-slate-500 dark:text-zinc-400",
                      "sm:text-xl md:self-start"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "w-full text-center leading-none text-transparent text-slate-800 md:-ml-[6px] md:text-left",
                          "font-bold text-[clamp(3.125rem,14vw,4.25rem)] sm:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default text-edge-outline font-display "
                        )}
                      >
                        {firstLine}
                        <br className="md:block hiidden" />
                        {secondLine}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "mt-3 cursor-default whitespace-nowrap bg-clip-text text-sm font-medium text-slate-500 dark:text-zinc-400",
                      "sm:mt-4 sm:text-xl md:self-start"
                    )}
                  >
                    An Aspiring DevOps Engineer
                  </p>
                </BlurIn>
              </div>
              <div className="mt-6 flex w-fit max-w-full flex-col gap-3 sm:mt-8">
                <Link href="/resume" className="flex-1">
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="flex flex-wrap justify-center gap-2 md:self-start sm:gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex h-full items-center gap-1.5 sm:gap-2">
                    <Link
                      href={config.social.github}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-can-hover"
                    >
                      <Button variant="outline" aria-label="GitHub" className="size-11 rounded-lg bg-background/80 shadow-lg shadow-black/20 hover:bg-accent">
                        <SiGithub className="text-slate-800 dark:text-white dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.85)]" size={32} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.youtube}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline" aria-label="YouTube" className="size-11 rounded-lg bg-background/80 text-red-600 shadow-lg shadow-black/20 hover:bg-accent">
                        <SiYoutube size={32} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-can-hover"
                    >
                      <Button variant="outline" aria-label="LinkedIn" className="size-11 rounded-lg bg-background/80 text-[#0A66C2] shadow-lg shadow-black/20 hover:bg-accent">
                        <SiLinkedin size={32} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-can-hover"
                    >
                      <Button variant="outline" aria-label="Facebook" className="size-11 rounded-lg bg-background/80 text-[#1877F2] shadow-lg shadow-black/20 hover:bg-accent">
                        <SiFacebook size={32} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
