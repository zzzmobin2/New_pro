import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const textBrand = (title: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[9px] font-bold">{title}</span>,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  background?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "storekit",
    category: "Gaming landing page",
    title: "Zentry",
    src: "/assets/projects-screenshots/storekit/zentry-long.png",
    screenshots: ["zentry-long.png", "zentry-products.png", "zentry-story.png", "zentry-contact.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        textBrand("Vite"),
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
        textBrand("HTML5"),
        textBrand("CSS3"),
      ],
      backend: [],
    },
    live: "https://radian-mobin.netlify.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A modern, immersive gaming-inspired landing page with smooth
            animations and an interactive user experience.
          </TypographyP>
          <TypographyP className="font-mono">
            Inspired by Zentry, this React and Vite project uses Tailwind CSS
            and GSAP to create an animated gaming world with responsive layouts,
            scroll-driven transitions, and interactive details.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="font-mono mb-2 list-disc pl-6">
            <li>Smooth page and scroll animations powered by GSAP.</li>
            <li>Interactive gaming-inspired visuals and transitions.</li>
            <li>Responsive layouts for desktop and mobile.</li>
            <li>Background music toggle and polished user interactions.</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/storekit/zentry-products.png`,
              `${BASE_PATH}/storekit/zentry-story.png`,
              `${BASE_PATH}/storekit/zentry-contact.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Tech stack</TypographyH3>
          <p className="font-mono mb-2">
            React, Vite, JavaScript (ES6+), Tailwind CSS, GSAP, HTML5, and CSS3.
          </p>
        </div>
      );
    },
  },
  {
    id: "codingducks",
    category: "Youth-led environmental organization",
    title: "Earth's Ants",
    src: "/assets/projects-screenshots/codingducks/earths-ants-long.png",
    screenshots: [
      "earths-ants-long.png",
      "earths-ants-home.png",
      "earths-ants-impact.png",
      "earths-ants-footer.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        textBrand("Vite"),
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.gsap,
        textBrand("HTML5"),
        textBrand("CSS3"),
      ],
      backend: [],
    },
    live: "https://www.earthsants.org/",
    github: "https://github.com/Mobin24/Project-Earth",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Think, Live &amp; Work Like Ants — empowering youth through climate
            education, research, innovation, and community action.
          </TypographyP>
          <TypographyP className="font-mono">
            Founded in 2021, Earth&apos;s Ants is a Bangladesh-born,
            youth-led environmental organization. It advances climate
            education, environmental awareness, research, innovation, and
            community-based sustainability action — moving beyond awareness
            toward measurable, scalable impact.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Who we are
          </TypographyH3>
          <p className="font-mono mb-2">
            Guided by our motto, &quot;Think, Live &amp; Work Like Ants,&quot;
            we empower young people to learn, lead, and act collectively
            through institutional programmes, clean campus initiatives,
            research-based discussions, digital campaigns, policy engagement,
            and grassroots outreach. Our growing network spans 100+ institutions
            in 16 countries, connecting students, educators, experts, youth
            leaders, and communities.
          </p>
          <TypographyH3 className="my-4 mt-8">Our mission</TypographyH3>
          <p className="font-mono mb-2">
            Earth&apos;s Ants exists to empower youth as leaders, innovators,
            and changemakers for a sustainable future. Through climate
            education, research, community engagement, and innovation-driven
            initiatives, we equip young people with the knowledge, skills, and
            opportunities to address environmental challenges. By connecting
            youth, institutions, experts, and communities, we turn awareness
            into practical solutions that strengthen climate resilience,
            protect biodiversity, and promote responsible living.
          </p>
          <TypographyH3 className="my-4 mt-8">Our vision &amp; reach</TypographyH3>
          <p className="font-mono mb-2">
            We envision sustainability as a shared responsibility, with
            communities guided by science, education, and innovation to protect
            nature and build a resilient planet. Our aspiration is a world
            where sustainable living becomes a culture and every individual
            becomes a guardian of the planet. Our youth network reaches 100+
            institutions nationally and spans more than 16 countries, with the
            ambition of helping Bangladesh become a global model for
            sustainability by 2040.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/earths-ants-home.png`,
              `${BASE_PATH}/codingducks/earths-ants-impact.png`,
              `${BASE_PATH}/codingducks/earths-ants-footer.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Our initiatives</TypographyH3>
          <p className="font-mono mb-2">
            Shonar Tori is our sustainable lifestyle initiative and social
            enterprise, preserving Bengal&apos;s cultural heritage while
            creating opportunities for rural artisans and traditional
            craftsmen. ANTHROGEN Lab is our research and innovation platform,
            bringing young researchers together to explore environmental
            challenges and develop practical solutions for climate resilience
            and sustainability.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech stack</TypographyH3>
          <p className="font-mono mb-2">
            React, Vite, JavaScript (ES6+), Tailwind CSS, GSAP, HTML5, and CSS3.
          </p>
        </div>
      );
    },
  },
  {
    id: "gumbalup",
    category: "Responsive e-commerce landing page",
    title: "Nike Landing Page",
    src: "/assets/projects-screenshots/gumbalup/nike-long.png",
    screenshots: [
      "nike-long.png",
      "nike-products.png",
      "nike-quality.png",
      "nike-offer.png",
      "nike-footer.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        textBrand("Vite"),
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        textBrand("HTML5"),
        textBrand("CSS3"),
      ],
      backend: [],
    },
    live: "https://69786bdd523a4094b9dc1986--singular-smakager-f83736.netlify.app/",
    github: "https://github.com/Mobin24/Nike-Landing-Page",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A modern, fully responsive Nike-inspired landing page built with
            React and Tailwind CSS.
          </TypographyP>
          <TypographyP className="font-mono">
            Built as part of a frontend practice journey, this project focuses
            on mastering Tailwind CSS and improving component-based UI
            development with React. It is a learning project and is not
            affiliated with Nike.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/gumbalup/nike-products.png`,
              `${BASE_PATH}/gumbalup/nike-quality.png`,
              `${BASE_PATH}/gumbalup/nike-offer.png`,
              `${BASE_PATH}/gumbalup/nike-footer.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Tech stack</TypographyH3>
          <p className="font-mono mb-2">
            React, Tailwind CSS, JavaScript, and Vite.
          </p>
          <p className="font-mono mb-2">
            Thanks to Adrian Hajdin and JavaScript Mastery for their guidance
            and learning resources.
          </p>
        </div>
      );
    },
  },
  {
    id: "waku",
    category: "Image rendering platform",
    title: "Waku",
    src: "/assets/projects-screenshots/waku/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.satori,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.turborepo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://waku.nareshkhatri.dev",
    github: "https://github.com/Naresh-Khatri/waku",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An on-demand dynamic image-generation service — &quot;design once,
            ship a typed URL endpoint.&quot;
          </TypographyP>
          <TypographyP className="font-mono ">
            Design a template once in a Canva-like editor, then get a typed URL
            that renders images with live, dynamic data on demand (currently
            focused on OG images). Built as a 7-package Turborepo monorepo
            (Next.js 15 / React 19 / TypeScript) — a visual editor, an edge render
            service, a 3-stage rendering engine, typed SDKs, and shared DB/font
            packages. 25K+ LOC, MIT-licensed and self-hostable via
            docker-compose.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Deterministic render pipeline &amp; URL contract
          </TypographyH3>
          <p className="font-mono mb-2">
            A deterministic pipeline (TemplateDocument → Satori → Resvg → sharp)
            compiles a flat node IR to SVG and rasterizes to PNG/WebP/JPEG with
            HTTP Accept-based format negotiation, dynamic font subsetting from a
            CDN (25 families, Latin unicode-range parsing), and retina-aware
            transcoding — served behind an immutable Cache-Control: max-age=1y URL
            contract. Query params are sorted before encoding so any input order
            maps to one cache key; versioned URLs are immutable while published
            URLs 302-redirect to a numbered version, so edits never break
            previously-shared links.
          </p>
          <SlideShow images={[`${BASE_PATH}/waku/preview.png`]} />

          <TypographyH3 className="my-4 mt-8">
            Canva-like editor &amp; AI template generation
          </TypographyH3>
          <p className="font-mono mb-2">
            A visual editor built from scratch (no Figma/tldraw/Fabric) on raw
            pointer events + a Zustand store: edge/center snap guides,
            scroll-anchored + pinch zoom (5%–800%), a 100-entry coalesced
            undo/redo stack, and a parameter-binding system that turns any field
            into a typed URL param. An AI agent generates full templates from a
            prompt, validated against a Zod document schema. The public image
            proxy is also SSRF-hardened (private-IP/CIDR blocking, redirect
            re-validation, streaming size caps, and per-user/IP rate limiting).
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/waku/editor.png`,
              `${BASE_PATH}/waku/ai.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "peakposts",
    category: "AI social SaaS",
    title: "PeakPosts",
    src: "/assets/projects-screenshots/peakposts/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.nextIntl,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.aiSDK,
        PROJECT_SKILLS.anthropic,
        PROJECT_SKILLS.mistral,
        PROJECT_SKILLS.cloudflare,
      ],
    },
    // Private repo (commercial product) — intentionally no public source link
    live: "https://peakposts.ai/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A multi-tenant SaaS that turns QR-scanned diner reviews into
            AI-generated, multi-language social posts — built solo, end-to-end.
          </TypographyP>
          <TypographyP className="font-mono ">
            A production-grade, multi-tenant SaaS (~50K lines of TypeScript) on
            the Next.js 15 App Router with end-to-end type safety from PostgreSQL
            → Drizzle ORM → tRPC v11 → React, serving five distinct audiences —
            diners, brand owners, counter staff, platform admins, and public
            marketing — from a single application. 208 React components, 14 tRPC
            routers, a normalized 19-table schema, and 5 AI subsystems across 5
            languages.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Peakie — agentic AI analytics assistant
          </TypographyH3>
          <p className="font-mono mb-2">
            A hand-rolled tool-calling loop on the Vercel AI SDK (Mistral) over 10
            brand-scoped tools — no agent framework — hardened against
            small-model failure modes: spin-detection, hallucinated-tool-name
            repair, per-tool and total over-fetch caps, exact-call de-duplication,
            a token-budget history trimmer, and forced tool-choice on the final
            step to guarantee termination within 6 steps. A terminal{" "}
            <code>present_actions</code> tool forces structured, deep-linkable
            answers, and every AI-produced link is re-validated against the
            user&apos;s accessible scope so a hallucinated or out-of-scope
            resource ID can never leak across tenant boundaries.
          </p>
          <SlideShow images={[`${BASE_PATH}/peakposts/dashboard.png`]} />

          <TypographyH3 className="my-4 mt-8">
            AI content-generation pipeline
          </TypographyH3>
          <p className="font-mono mb-2">
            An Anthropic Claude pipeline converts a star rating + photo + note
            into platform-tailored social captions across 6 platforms and 5
            languages using Zod-schema-enforced structured output, brand-voice
            configuration, content moderation, and deterministic fallbacks so
            generation never hard-fails. The diner&apos;s locale does double duty
            — selecting both the UI catalog and the language the AI writes in
            (e.g. picking Chinese yields a Xiaohongshu-style caption). A
            retrieval-augmented help center pairs Mistral embeddings + cosine
            similarity with a weighted-TF lexical fallback for API outages.
          </p>
          <SlideShow images={[`${BASE_PATH}/peakposts/posts.png`]} />

          <TypographyH3 className="my-4 mt-8">
            In-browser video editor &amp; multi-tenant security
          </TypographyH3>
          <p className="font-mono mb-2">
            Diners generate H.264 MP4 video and images entirely client-side via
            the WebCodecs <code>VideoEncoder</code> + mp4-muxer and Canvas 2D,
            inside a direct-manipulation post editor (pinch/rotate/drag gestures,
            caption presets, CJK font subsetting) — zero server-side render cost.
            The multi-step diner flow persists to IndexedDB via a custom Zustand
            adapter, with client-side image compression and presigned
            direct-to-R2 uploads. Underneath sits a five-tier tRPC authorization
            layer with brand- vs. outlet-scoped grants, existence-masking
            (<code>NOT_FOUND</code> over <code>FORBIDDEN</code>), and two-factor
            counter auth — a hashed device token plus per-staff PIN with
            brute-force lockout.
          </p>
        </div>
      );
    },
  },
  {
    id: "kanbi",
    category: "Realtime project tracker",
    title: "Kanbi",
    src: "/assets/projects-screenshots/kanbi/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.mcp,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.turborepo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://kanbi.nareshkhatri.dev",
    github: "https://github.com/naresh-Khatri/kanbi",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A keyboard-first, realtime Kanban tracker — &quot;Linear, but small
            enough to own.&quot;
          </TypographyP>
          <TypographyP className="font-mono ">
            A full-stack TypeScript monorepo (pnpm + Turborepo) spanning three
            deployable surfaces — a Next.js 15 web app, an OAuth-secured MCP
            server for AI agents, and an Expo mobile companion — with end-to-end
            type safety from Postgres → Drizzle → tRPC v11 → React, so a schema
            change ripples to compile errors in the UI with zero codegen. ~21K
            lines of TypeScript, 16 domain tRPC routers, a 25-table schema, and 8
            scoped MCP agent tools.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Realtime collaboration &amp; fractional ordering
          </TypographyH3>
          <p className="font-mono mb-2">
            Drag-and-drop boards with optimistic UI and live multi-user updates,
            powered by tRPC subscriptions over Server-Sent Events. An in-process
            event bus broadcasts <code>boardId</code>-scoped invalidation signals
            that carry <em>no payload</em> — clients simply refetch through React
            Query, keeping the realtime layer cheap and consistent. Mutations
            snapshot-and-rollback (<code>onMutate</code>/<code>onError</code>/
            <code>onSettled</code>) and deletes are undoable (6-second deferred
            server call + toast). Columns and cards order via fractional indexing
            — new items insert at the midpoint between neighbors, so a reorder
            touches one row instead of re-sequencing the whole list, with collapse
            detection and rebalancing.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/kanbi/board.png`,
              `${BASE_PATH}/kanbi/dashboard.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            One auth model, three clients &amp; an MCP server for AI agents
          </TypographyH3>
          <p className="font-mono mb-2">
            A layered, type-safe authorization model encodes access control at the
            procedure level — <code>protectedProcedure</code> →{" "}
            <code>projectProcedure</code> → <code>boardProcedure</code> →{" "}
            <code>publicBoardProcedure</code> (share token, no auth) — with role
            checks gating every mutation. The same model is reused across three
            entry points so ACLs can&apos;t drift: browser cookies, hashed
            per-device bearer tokens for mobile (SHA-256 at rest), and OAuth-2.1
            JWTs for AI agents. The spec-compliant MCP server (Streamable HTTP)
            exposes 8 read/write tools through a full OAuth 2.1 flow — dynamic
            client registration, a consent screen, JWKS-verified JWTs — each tool a
            thin wrapper over the existing tRPC procedures via a JWT→session
            bridge, so permissions, validation, ordering, and the realtime bus are
            all reused; agent-authored HTML is server-side sanitized.
          </p>
          <SlideShow images={[`${BASE_PATH}/kanbi/profile.png`]} />

          <TypographyH3 className="my-4 mt-8">
            Native Android dock dashboard &amp; AI task drafting
          </TypographyH3>
          <p className="font-mono mb-2">
            A custom native Android Expo module written in Kotlin implements
            Android&apos;s <code>DreamService</code> (the system daydream): dock
            the phone and the OS launches a React Native root view rendering the
            active task and a Pomodoro timer — a genuine focus dashboard, with{" "}
            <code>showWhenLocked</code>, screen-on, and keyguard dismissal handled
            natively. Devices pair by QR with secure token storage
            (<code>expo-secure-store</code>). On the web, paste a raw client
            message and a Groq-backed LLM extracts structured, actionable issues
            (title, description, label, priority); rich-text descriptions use Tiptap
            with <code>@mention</code> and <code>#ticket</code> cross-reference
            extensions.
          </p>
          <SlideShow images={[`${BASE_PATH}/kanbi/ai-draft.png`]} />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://nareshkhatri.dev",
    github: "https://github.com/Naresh-Khatri/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
projects.splice(
  3,
  projects.length - 3,
  {
    id: "greenfluence",
    category: "Sustainable advertising competition",
    title: "GreenFluence 2026",
    src: "https://image.thum.io/get/width/1200/crop/900/noanimate/https://green-fluence.vercel.app/",
    background: "/assets/backgrounds/waku.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, textBrand("Vite"), PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "https://green-fluence.vercel.app/#about",
    github: "https://github.com/Mobin24/GreenFluence",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A national sustainable brand storytelling and digital campaign competition.
          </TypographyP>
          <TypographyP className="font-mono">
            GreenFluence 2026 is jointly organised by Earth&apos;s Ants Youth Environmental Organization and the Department of Environmental Science and Disaster Management (ESDM), Daffodil International University. It brings together school, college, and university students from all 64 districts of Bangladesh.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Our purpose</TypographyH3>
          <p className="font-mono mb-2">
            The competition helps young people use creativity and communication to address real environmental problems. Participants design advertising campaigns connected to real brands in Bangladesh, aiming to inspire meaningful behaviour change.
          </p>
          <TypographyH3 className="my-4 mt-8">Our vision</TypographyH3>
          <p className="font-mono mb-2">
            GreenFluence equips young people to think like responsible business leaders and creative storytellers, building a generation that cares for the planet and inspires others to do the same.
          </p>
        </div>
      );
    },
  },
  {
    id: "pointrobo",
    category: "Interactive 3D landing page",
    title: "PointRobo",
    src: "https://image.thum.io/get/width/1200/crop/900/noanimate/https://pointrobo.netlify.app/",
    background: "/assets/backgrounds/peakposts.jpg",
    screenshots: [],
    skills: {
      frontend: [textBrand("HTML"), textBrand("CSS"), PROJECT_SKILLS.js, textBrand("Spline")],
      backend: [],
    },
    live: "https://pointrobo.netlify.app/",
    github: "https://github.com/Mobin24/HTML-CSS-JavaScript-100-Projects/tree/main/3D_Robot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An interactive 3D landing page built with HTML, CSS, and Spline.
          </TypographyP>
          <TypographyP className="font-mono">
            The 3D robot follows the cursor, bringing a playful interactive touch to the page.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "snake-game",
    category: "Browser game",
    title: "Snake Game",
    src: "/assets/projects-screenshots/snake-game/preview.svg",
    background: "/assets/backgrounds/kanbi.jpg",
    screenshots: [],
    skills: {
      frontend: [textBrand("HTML"), textBrand("CSS"), PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://relaxed-jelly-e80cf2.netlify.app/",
    github: "https://github.com/Mobin24/Snake-Game-JS",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Remember the classic Snake game from old Nokia phones? I recreated that nostalgia using pure JavaScript.
          </TypographyP>
          <TypographyP className="font-mono">
            Built from scratch while strengthening my JavaScript skills, this project focuses on DOM manipulation, game loops, timers, and state management. It was a hands-on way to practice JavaScript logic and problem-solving.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
);
export default projects;
