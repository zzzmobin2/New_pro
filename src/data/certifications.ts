export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  description: string;
  verifyUrl: string;
  theme: "claude" | "cs50" | "helsinki" | "hackerRank" | "claudeGreen";
};

const certifications: Certification[] = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    description:
      "An introductory course on Claude, its capabilities, and practical ways to work with Anthropic's AI assistant.",
    verifyUrl: "https://verify.skilljar.com/c/36py93jyo9et",
    theme: "claude",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2026",
    description:
      "Completed CS50x, including ten problem sets and one final project, covering core computer science concepts and programming.",
    verifyUrl:
      "https://certificates.cs50.io/4220562a-44b4-407a-8632-a3ad38752003.pdf?size=letter",
    theme: "cs50",
  },
  {
    title: "Ethics of AI",
    issuer: "University of Helsinki",
    date: "April 25, 2025 · 2 ECTS",
    description:
      "Completed the University of Helsinki's online course on ethical questions, responsible use, and societal impacts of artificial intelligence.",
    verifyUrl: "https://certificates.mooc.fi/validate/09odz5zdpacj",
    theme: "helsinki",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "February 9, 2025",
    credentialId: "6249CD3B970E",
    description:
      "Passed HackerRank's Basic Problem Solving skills certification, demonstrating foundational algorithmic reasoning and coding skills.",
    verifyUrl: "https://www.hackerrank.com/certificates/iframe/6249cd3b970e",
    theme: "hackerRank",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    description:
      "Completed Anthropic's foundational AI Fluency course, focused on building practical fluency for thoughtful human-AI collaboration.",
    verifyUrl: "https://verify.skilljar.com/c/489rzjorbjoe",
    theme: "claudeGreen",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "January 17, 2025",
    credentialId: "1272B1175C3B",
    description:
      "Passed HackerRank's Basic Python skills certification, covering core syntax, data types, control flow, and programming fundamentals.",
    verifyUrl: "https://www.hackerrank.com/certificates/iframe/1272b1175c3b",
    theme: "hackerRank",
  },
];

export default certifications;
