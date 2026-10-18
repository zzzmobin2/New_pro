const config = {
  title: "Abdullah All Mobin | DevOps Engineer",
  description: {
    long: "Explore the portfolio of Abdullah All Mobin, an aspiring DevOps engineer and computer science undergraduate building responsive web experiences while developing cloud, automation, and deployment skills.",
    short:
      "Aspiring DevOps engineer and computer science student building practical cloud, automation, and deployment skills.",
  },
  keywords: [
    "Abdullah All Mobin",
    "Front-end developer",
    "portfolio",
    "React developer",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Computer Science",
    "web development",
    "UI engineering",
    "React.js",
    "Next.js",
  ],
  author: "Abdullah All Mobin",
  email: "mdabdullahallmobin00@gmail.com",
  phone: "+880 1774-522424",
  site: "https://nareshkhatri.dev",

  // for github stars button
  githubUsername: "Mobin24",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    youtube: "https://www.youtube.com/@AbdullahAllMobin00",
    linkedin: "https://www.linkedin.com/in/mobin00",
    instagram: "https://www.instagram.com/mobin24",
    facebook: "https://www.facebook.com/abdullah.al.mobin.787582/",
    github: "https://github.com/Mobin24",
  },
};
export { config };
