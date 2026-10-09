/* ============================================================
   SITE CONTENT — single source of truth for all copy & links.
   Change the brand name, links, and text here to rebrand the
   whole site in one place.
   ============================================================ */

export const brand = {
  name: "Learn AI With Layla",
  firstName: "Layla",
  // The huge italic word inside the brand text
  emWord: "With",
  footerTagline: "Real workflows. Zero fluff.",
  year: 2026,
};

export const socials = {
  instagram: "https://www.instagram.com/yourhandle",
  tiktok: "https://www.tiktok.com/@yourhandle",
};

export const emails = {
  partnerships: "partners@yourbrand.com",
  support: "hello@yourbrand.com",
};

/* Countdown bar — set enabled:true and a future ISO date to show it */
export const countdown = {
  enabled: true,
  target: "2026-11-15T17:00:00Z",
  label: "Join The AI Challenge",
  href: "/challenge",
};

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "AI Challenge", href: "/challenge", highlight: true },
    { label: "Free Guides", href: "/guides" },
  ],
  dropdown: {
    trigger: "Build With AI",
    items: [
      { label: "Meta Media Buyer Agent", href: "/agents/meta-media-buyer" },
      { label: "Google Media Buyer Agent", href: "/agents/google-media-buyer" },
      { label: "Email Marketing Agent", href: "/agents/email-marketing" },
      { label: "Creative Director Agent", href: "/agents/creative-director" },
      { label: "Strategic Co-Founder Agent", href: "/agents/strategic-cofounder" },
      { label: "Weekend AI Bootcamp (Beginners)", href: "/bootcamp" },
    ],
  },
  contact: { label: "Contact", href: "/contact" },
  cta: { label: "Join the Waitlist", href: "/challenge" },
};

export const hero = {
  titleA: "Hey,",
  titleEm: "I'm",
  titleB: "Layla",
  callouts: [
    { text: ["Talking about", "AI & tech"] },
    { text: ["Former big-tech", "operator"] },
    { text: ["E-commerce", "founder"] },
  ],
};

export const manifesto = {
  kicker: "The short version",
  titleA: "Making AI useful,",
  titleEm: "not intimidating.",
  body: [
    "I spent years inside two global tech giants learning how world-class companies actually run. Then I left to build my own businesses from scratch. Today, AI quietly handles most of my operations, marketing, and back-end work.",
    "I am not a developer, and I never learned to code. I am an operator who figured out which AI workflows actually move the needle — and I package everything that works so you can copy it step by step.",
  ],
  chips: ["OpenAI", "Gemini", "Claude", "Meta"],
};

export const challenge = {
  kicker: "Flagship program",
  titleA: "The 30-Day",
  titleEm: "AI",
  titleB: "Challenge",
  body: "Thousands of people have taken the Challenge and gone from complete beginners to building real agents, automations, and systems for their life, work, and business. Across 30 days I walk you through every build step by step — no code required, and you keep everything for life. Doors are closed right now so I can focus on the people inside this round. When the next one opens, the waitlist hears first.",
  cta: "See the Challenge + Join the Waitlist →",
};

export const marquee = "THE FUTURE IS AI · NOW IS YOUR TIME · ";

export const paths = {
  visualBadgeA: "Build ",
  visualBadgeEm: "your",
  visualBadgeB: " AI advantage",
  titleA: "Pick ",
  titleEm: "your",
  titleB: "next move",
  items: [
    {
      number: "01",
      title: "Stay On Top of AI, Together",
      desc: "The long-term community where I break down every major AI update, why it matters, and how to actually use it. Go deeper with advanced agents, systems, and workflows alongside a room full of people building with you.",
      cta: "Explore the community →",
      href: "/community",
    },
    {
      number: "02",
      title: "Weekend AI Bootcamp",
      desc: "The beginner setup guide for getting your AI assistant dialed in for your exact job. Built around 25 different professions, so it is configured for the way you work — not a generic demo.",
      cta: "Explore the bootcamp →",
      href: "/bootcamp",
    },
    {
      number: "03",
      title: "AI Agents",
      desc: "The full suite of AI agents I run inside my businesses every single day. They handle media buying, email marketing, creative direction, and strategy calls — and they have completely changed how I work.",
      cta: "Explore the agents →",
      href: "/agents",
    },
  ],
};

export const guidesSection = {
  kicker: "The free library",
  titleA: "Recent ",
  titleEm: "free",
  titleB: " guides",
  desc: "Bite-sized guides to help you get more out of AI — from first setup to advanced multi-agent workflows.",
  cta: "Browse all guides →",
};

export const socialSection = {
  kicker: "Everywhere daily",
  titleA: "Let's be",
  titleEm: "internet",
  titleB: "friends",
  desc: "I share what I am building, what is working, and what is quietly changing in AI — daily, in plain language, on Instagram and TikTok.",
  instagram: "Follow on Instagram →",
  tiktok: "Follow on TikTok →",
};

export const footer = {
  columns: [
    {
      label: "Explore",
      links: [
        { label: "About", href: "/about" },
        { label: "AI Challenge", href: "/challenge" },
        { label: "Free Guides", href: "/guides" },
        { label: "Community", href: "/community" },
      ],
    },
    {
      label: "Build With AI",
      links: [
        { label: "Meta Media Buyer Agent", href: "/agents/meta-media-buyer" },
        { label: "Google Media Buyer Agent", href: "/agents/google-media-buyer" },
        { label: "Email Marketing Agent", href: "/agents/email-marketing" },
        { label: "Creative Director Agent", href: "/agents/creative-director" },
        { label: "Weekend AI Bootcamp", href: "/bootcamp" },
      ],
    },
    {
      label: "Say hey",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Instagram", href: socials.instagram },
        { label: "TikTok", href: socials.tiktok },
      ],
    },
  ],
  ctaLabel: "The next move",
  ctaText: "Join 4,000+ people building their AI advantage.",
  ctaButton: "Join the waitlist",
  ctaHref: "/challenge",
  bottomLeft: `© ${brand.year} ${brand.name}. All rights reserved.`,
  bottomRight: brand.footerTagline,
};

/* ─── ABOUT PAGE ─── */
export const about = {
  titleA: "Layla ",
  titleEm: "Haddad",
  beats: [
    "Years inside two of the world's biggest tech companies taught me how world-class teams operate.",
    "Then I left to build two of my own businesses — and grew both past eight figures.",
    "Today AI handles most of my operations, marketing, and back-end work.",
  ],
  close: ["Making AI useful,", "not intimidating."],
  hint: "Scroll into my story",
  journeyTitle: "My ",
  journeyTitleEm: "journey",
  timeline: [
    {
      step: "2017",
      img: "/assets/about/journey-2017.png",
      title: "Learning the systems",
      desc: "I started inside global tech companies watching how the best teams in the world launch, market, and scale products.",
    },
    {
      step: "2020",
      img: "/assets/about/journey-2020.png",
      title: "Building my own",
      desc: "I left the corporate world and co-built two e-commerce brands from a spare room into eight-figure businesses.",
    },
    {
      step: "2025",
      img: "/assets/about/journey-2025.png",
      title: "The AI shift",
      desc: "What started as one curious chat window became an entire operating system. Now AI runs most of my back-end work.",
    },
    {
      step: "Now",
      img: "/assets/about/journey-now.png",
      title: "Teaching it forward",
      desc: "I turn everything that actually works into guides, challenges, and systems so you can build your own AI advantage.",
    },
  ],
};

/* ─── CHALLENGE PAGE ─── */
export const challengePage = {
  heroKicker: "The 30-Day AI Challenge",
  heroTitle: ["Build AI Systems", "& Agents That Run Your", "Work, Business, And Life"],
  heroCta: "Join the Waitlist →",
  statusLine: "Doors are closed — join the waitlist to hear first when the next round opens.",
  sectionOne: {
    title: "AI Is The Skill That Decides Who Pulls Ahead Now.",
    body: "Every tool you use is getting an AI layer. The people winning right now are not the ones with the fanciest stack — they are the ones who know how to hand real work to AI and trust the output. That is a learnable skill, and it compounds every single week.",
    points: [
      "Hand your repetitive work to AI agents that remember your context",
      "Build systems that keep running while you sleep",
      "Make decisions with an assistant that has read your entire business",
    ],
  },
  sectionTwo: {
    title: "I'm Not Here To Turn You Into An AI Engineer.",
    body: "You do not need to code. You do not need a technical background. The Challenge is built for normal busy people: owners, marketers, freelancers, and operators. Every build is click-by-click, in plain language, and by day 30 you own a working AI system you built yourself.",
  },
  intro: {
    title: "Hey, I'm Layla.",
    body: "I spent years inside global tech companies learning how world-class teams operate. Then I built two eight-figure businesses of my own. Today, AI handles most of my operations and back-end work — not because I am technical, but because I learned how to brief it like a teammate. This Challenge is the exact path I would give my past self.",
  },
  socialProof: {
    title: "4,000+ People Have Gone From Zero To Building With AI.",
    stats: [
      { value: "4,000+", label: "Challenge graduates" },
      { value: "30", label: "Days of guided builds" },
      { value: "0", label: "Lines of code required" },
      { value: "∞", label: "Lifetime access" },
    ],
  },
  packageSection: {
    title: "The Package.",
    blocks: [
      {
        title: "Get Clear. Get Set Up. Know What You're Building.",
        desc: "The opening week maps your goals, your tools, and the exact system you will build over the month.",
      },
      {
        title: "Build The AI Foundation That Makes Everything Else Work",
        desc: "Custom instructions, memory, projects, and the settings 90% of people skip — configured properly.",
      },
      {
        title: "Build Your AI System For Life, Work, And Business",
        desc: "Agents for your inbox, your content, your research, and your weekly decisions — all wired together.",
      },
    ],
  },
  howItWorks: {
    title: "How Your 30 Days Actually Work",
    items: [
      { title: "Everything In One Place", desc: "A private hub holds every lesson, prompt, file, and replay — for life." },
      { title: "A New Lesson Every Day", desc: "Short daily builds, 15–30 minutes each, released day by day so you never fall behind." },
      { title: "You Build It For Real", desc: "No theory weeks. You leave with your own agents, automations, and systems — not notes." },
      { title: "You're Never Doing It Alone", desc: "A live community, weekly Q&A replays, and people building the exact same system beside you." },
    ],
  },
  bonuses: {
    title: "Stacked Bonuses.",
    items: [
      { title: "10+ Ready-to-Use AI Agents", desc: "Import my personal agents and adapt them to your business in minutes." },
      { title: "Deep Dive: The Claude App", desc: "The full walkthrough of the app everyone underestimates." },
      { title: "Make AI Truly Write Like You", desc: "The exact briefing framework that makes AI match your voice." },
      { title: "Build Software & Websites With AI", desc: "Ship a real tool with no code using AI pair-building." },
      { title: "OpenClaw Deep Dive", desc: "Set up and master the open agent platform, end to end." },
      { title: "AI Content & Video Kit", desc: "Templates and prompts for a week of content in an afternoon." },
      { title: "Competitor Research Tool", desc: "An agent that watches your market and reports what matters." },
      { title: "FAQ Video Vault", desc: "Answers to every question past rounds ever asked." },
      { title: "Community + Networking", desc: "The room where the winners compare notes after the Challenge ends." },
      { title: "Lifetime Access To The Hub", desc: "Every future round, every update — yours forever." },
    ],
  },
  honest: {
    title: "This Is Not A \"Become An AI Expert Overnight\" Challenge.",
    body: "You will not know everything about AI in 30 days — nobody does, and the field changes weekly. What you will have is a working system, a repeatable method, and the confidence to keep adapting as the tools evolve. That is the actual goal.",
  },
  readBefore: {
    title: "Read This Before You Join.",
    points: [
      "You need about 20–30 minutes a day. It is fine to miss a day — everything stays open.",
      "You need zero coding experience. Every build is click-by-click.",
      "You should bring one real goal: a business, a job, a project. The system works best when it is yours.",
    ],
  },
  certificate: {
    title: "Finish The Challenge. Get Certified.",
    body: "Complete all 30 days and you unlock a shareable certificate plus a permanent profile in the graduate directory. It is a small thing — but future-you will notice the difference in how you talk about AI in interviews, pitches, and team meetings.",
  },
  faq: {
    title: "Questions",
    items: [
      { q: "Do I need any tech background?", a: "None at all. If you can use email and a browser, you can finish every build in the Challenge." },
      { q: "How much time does it take each day?", a: "Plan for 20–30 minutes. Lessons stay unlocked forever, so missing a day never puts you behind." },
      { q: "Which tools will we use?", a: "The current best-in-class assistants and agent platforms. The exact stack evolves with the field — that is why you get lifetime updates." },
      { q: "Is this good for my team?", a: "Yes — several past rounds included whole marketing and ops teams building the same system together." },
      { q: "What if it is not for me?", a: "Every round has a simple refund window at the start. Details are on the checkout page when doors open." },
    ],
  },
  final: {
    titleA: "You Can Keep Using AI Randomly.",
    titleB: "Or You Can Start Building Systems.",
    cta: "Join the Waitlist →",
    sub: "Doors open a few times a year. The waitlist always hears first.",
  },
};

/* ─── GUIDES ─── */
export type Guide = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  readTime: string;
  body: { heading: string; paras: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "onboard-your-ai-like-a-coworker",
    tag: "Workflow",
    title: "Onboard Your AI Like A Coworker",
    desc: "A one-page worksheet that gives your assistant the context a new hire would need — plus the 3-part prompt structure for every task you delegate.",
    readTime: "6 min",
    body: [
      { heading: "Stop prompting strangers", paras: [
        "Most people open a fresh chat window every morning and explain their business from zero. That is like re-interviewing your assistant every single day. The fix is an onboarding document — one page that tells the assistant who you are, what you do, and how you like things done.",
        "Write it once, pin it, and every future conversation starts with full context instead of cold-start questions.",
      ]},
      { heading: "The one-page brief", paras: [
        "Cover four things: your role and business, your audience, your voice, and your non-negotiables. Keep each section to three sentences. If it does not fit on one page, it will not get read — by humans or machines.",
      ]},
      { heading: "The 3-part prompt", paras: [
        "Every task you hand over should have a role, a context block, and a definition of done. Role tells it who to be, context tells it what it needs to know, and the finish line stops it from padding the answer with filler.",
      ]},
    ],
  },
  {
    slug: "marketing-jobs-my-ai-agents-do",
    tag: "Agents",
    title: "Every Marketing Job My AI Agents Do",
    desc: "The full list of marketing jobs my agents handle across two businesses — plus five copy-paste job briefs so you can build your own today.",
    readTime: "9 min",
    body: [
      { heading: "The marketing department of one", paras: [
        "Between my two businesses, my agents now write first drafts, audit funnels, research audiences, and report weekly numbers. I review — they produce. Here is the full breakdown of who does what.",
      ]},
      { heading: "Five briefs you can steal", paras: [
        "Each brief follows the same skeleton: mission, inputs, guardrails, output format. Adapt the wording to your business and paste it into your assistant today.",
      ]},
    ],
  },
  {
    slug: "ai-skills-in-my-rotation",
    tag: "Setup",
    title: "The AI Skills In My Current Rotation",
    desc: "Every skill and capability I am actively using right now, what I use each one for, and a printable install cheat sheet for the main assistants.",
    readTime: "7 min",
    body: [
      { heading: "Skills beat tools", paras: [
        "Tools change every quarter. Skills — the ability to hand over a job and verify the result — compound forever. This is my current rotation and what each piece is actually for.",
      ]},
      { heading: "The cheat sheet", paras: [
        "One page: which assistant for which job, which settings matter, and the three skills that save me the most time every week.",
      ]},
    ],
  },
  {
    slug: "talking-products-workflow",
    tag: "Creative",
    title: "Make Your Products Talk With Voice AI",
    desc: "How I connected a voice engine to my assistant and turned best-selling products into talking characters — plus the two skills I built for the workflow.",
    readTime: "8 min",
    body: [
      { heading: "A gimmick that sells", paras: [
        "We gave our top products a voice for a launch campaign. Conversion on the landing page went up and the build took one afternoon. Here is the full wiring.",
      ]},
      { heading: "The two skills", paras: [
        "One skill turns a product page into a character script. The other pipes the script to a voice API and returns audio. Both are included as copy-paste files.",
      ]},
    ],
  },
  {
    slug: "six-things-to-try-in-the-new-apps",
    tag: "Tools",
    title: "6 Useful Things To Try In The New AI Apps",
    desc: "Set the newest assistant apps up right in five minutes, then use them for social, audio briefings, business tools, and interactive trackers.",
    readTime: "6 min",
    body: [
      { heading: "New app, same mistakes", paras: [
        "Every new assistant app ships with the same trap: people use it like a chatbot instead of an operating layer. Six setups that actually change how you work.",
      ]},
      { heading: "The prompt for each", paras: [
        "Each of the six setups includes the exact first prompt to paste so the app starts useful from minute one.",
      ]},
    ],
  },
  {
    slug: "build-your-first-agent-one-file",
    tag: "Agents",
    title: "Build Your First AI Agent With One File",
    desc: "Drop this file into your assistant, say the magic words, and it walks you through building your first agent — one that remembers you between sessions.",
    readTime: "5 min",
    body: [
      { heading: "One file, one agent", paras: [
        "The fastest path from chat window to real agent is a single instruction file. This guide hands you the file and shows you where to put it.",
      ]},
      { heading: "Make it remember", paras: [
        "The difference between a toy and a tool is memory. Two settings turn your first agent into something that knows your name next week.",
      ]},
    ],
  },
  {
    slug: "four-ai-agents-compared",
    tag: "Comparison",
    title: "Four New AI Agents, Honestly Compared",
    desc: "Who each of the newest agent platforms is for, the catch nobody mentions, how to set each one up well, and a copy-paste first job for each.",
    readTime: "10 min",
    body: [
      { heading: "The honest comparison", paras: [
        "Every launch video promises the world. I ran the same four jobs across the four newest platforms and scored them on setup pain, memory, and usefulness.",
      ]},
      { heading: "The first job to give each", paras: [
        "Give each platform a first job that plays to its strengths — the four starters are included as copy-paste briefs.",
      ]},
    ],
  },
  {
    slug: "monthly-ai-reset-audit",
    tag: "Workflow",
    title: "My Monthly Reset: The Chat History Audit",
    desc: "Export your chat history and run one prompt that finds the decisions you keep revisiting, the work that should be a system, and where your priorities drifted.",
    readTime: "7 min",
    body: [
      { heading: "Your history is a mirror", paras: [
        "A month of chat logs is the most honest record of how you actually work. One audit prompt turns it into a priority list.",
      ]},
      { heading: "The audit prompt", paras: [
        "The full prompt is included — it surfaces repeated questions, half-finished systems, and the topics you keep circling back to without deciding.",
      ]},
    ],
  },
];

export const guidesFilters = ["All", "Workflow", "Agents", "Setup", "Creative", "Tools", "Comparison"];

/* ─── CONTACT ─── */
export const contact = {
  kicker: "Partnerships · Support · Social",
  titleA: "Say ",
  titleEm: "hey.",
  intro: "Whether you want to build something together, you have a question about one of my AI programs, or you just want to follow along — you are in the right place.",
  cards: [
    {
      label: "Partnerships",
      title: "Let's make something good.",
      desc: "For brand partnerships, collaborations, and media opportunities:",
      email: emails.partnerships,
      link: { label: "Instagram", href: socials.instagram },
    },
    {
      label: "Support",
      title: "Questions? I've got you.",
      desc: "For the AI Challenge, the community, products, or general support:",
      email: emails.support,
      link: { label: "TikTok", href: socials.tiktok },
    },
  ],
};

/* ─── COMMUNITY / BOOTCAMP / AGENTS placeholder pages ─── */
export const placeholderPages = {
  community: {
    kicker: "The long-term room",
    title: "Stay on top of AI, together.",
    desc: "The community where every major AI update gets broken down, debated, and turned into a workflow — alongside people building at your level.",
    cta: "Join the Waitlist →",
  },
  bootcamp: {
    kicker: "The weekend setup",
    title: "Master AI by Monday.",
    desc: "The beginner bootcamp that configures your AI assistant for your exact profession. One weekend, 25 professions, zero fluff.",
    cta: "Get the Bootcamp →",
  },
  agents: {
    kicker: "The agent suite",
    title: "Hire the AI team I use.",
    desc: "Media buying, email marketing, creative direction, and strategy — the agents that run my businesses every day, ready to plug into yours.",
    cta: "Explore the Agents →",
  },
};
