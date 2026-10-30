export type Track = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  problem: string;
  builds: string[];
  sponsorProvides: string[];
};

export const tracks: Track[] = [
  {
    id: "enterprise-deal",
    num: "01",
    title: "Win the Enterprise Deal",
    tagline: "Long cycles, many stakeholders, one decision.",
    problem:
      "Enterprise deals stall because buying involves commercial, technical, and risk stakeholders who all need different proof. Teams in this track build tools that keep a complex deal moving: who needs what, what is blocked, and what proof closes it.",
    builds: [
      "A deal room that tracks every stakeholder, objection, and next step",
      "A stakeholder map that shows who influences the decision and what they care about",
      "An RFP and complex-requirements response assistant that drafts from real product docs",
    ],
    sponsorProvides: [
      "One real enterprise-deal problem, anonymized where needed",
      "Sample deal documents or a realistic scenario",
      "A mentor from the sponsor team on both days",
    ],
  },
  {
    id: "ai-sells",
    num: "02",
    title: "AI That Actually Sells",
    tagline: "AI in the revenue process, with humans in charge.",
    problem:
      "Every team is told to add AI to selling, but few tools earn a rep's trust. This track is for AI that saves real selling time: prospecting, forecasting, call insight, and RevOps work, with clear human oversight and no black-box promises.",
    builds: [
      "A prospecting assistant that explains why an account is worth pursuing",
      "A forecast helper that shows its reasoning, not just a number",
      "A call and meeting summarizer that turns conversation into next steps",
    ],
    sponsorProvides: [
      "One real revenue-process problem where AI is stuck or untrusted",
      "Sample or anonymized pipeline, call, or CRM-style data",
      "A mentor from the sponsor team on both days",
    ],
  },
  {
    id: "know-buyer",
    num: "03",
    title: "Know Your Buyer",
    tagline: "Positioning that comes from evidence, not slogans.",
    problem:
      "Most positioning is generic because buyer understanding is thin. This track builds tools that turn buyer research into sharper positioning: what buyers actually need, how they decide, and what message lands with each role.",
    builds: [
      "A buyer research digest that turns interviews and notes into usable insight",
      "A positioning tester that scores a message against a buyer persona",
      "A discovery assistant that prepares sharp questions before a first call",
    ],
    sponsorProvides: [
      "One real buyer-understanding or positioning problem",
      "Sample buyer interviews, personas, or messaging to work from",
      "A mentor from the sponsor team on both days",
    ],
  },
  {
    id: "revenue-engine",
    num: "04",
    title: "Run the Revenue Engine",
    tagline: "Pipeline health, handoffs, retention, expansion.",
    problem:
      "Revenue breaks at the handoffs: marketing to sales, sales to pre-sales, sales to customer success. This track builds the connective tissue: pipeline visibility, clean handoffs, and tools that grow existing accounts instead of only chasing new ones.",
    builds: [
      "A pipeline health board that flags deals at risk before they slip",
      "A handoff pack generator for sales to pre-sales to customer success",
      "An expansion finder that spots upsell and retention signals in an account",
    ],
    sponsorProvides: [
      "One real pipeline, handoff, or expansion problem",
      "Sample or anonymized pipeline and account data",
      "A mentor from the sponsor team on both days",
    ],
  },
];

export const schedule = [
  {
    day: "Saturday",
    note: "Kickoff and first build sprint",
    items: [
      { time: "2:00 PM", what: "Doors open, check-in, team formation" },
      { time: "2:30 PM", what: "Kickoff: how the weekend works, then each sponsor pitches its problem live" },
      { time: "3:30 PM", what: "Teams pick a track and start building" },
      { time: "4:00 PM", what: "Build sprint 1, with sponsor mentors circulating" },
      { time: "6:00 PM", what: "Day one closes on site. Teams may keep building remotely overnight." },
    ],
  },
  {
    day: "Sunday",
    note: "Build day and demo day",
    items: [
      { time: "10:00 AM", what: "Build resumes, mentor check-ins" },
      { time: "1:00 PM", what: "Midday mentor round: is this solving the sponsor's problem?" },
      { time: "3:00 PM", what: "Build freeze. Demos and pitches prepared." },
      { time: "3:30 PM", what: "Live demos and judging, track by track" },
      { time: "5:30 PM", what: "Winners announced, closing, and next steps for promising builds" },
      { time: "6:00 PM", what: "Weekend ends" },
    ],
  },
];

export const judging = [
  { weight: "30%", title: "Solves the sponsor's problem", detail: "Does it answer the actual problem the company brought, not a nearby easier one?" },
  { weight: "30%", title: "Working demo", detail: "Something real that runs live. Slides alone do not count." },
  { weight: "25%", title: "GTM insight", detail: "Does the team understand the buyer, the sales motion, and why this would work in a real team?" },
  { weight: "15%", title: "Pitch and experience", detail: "Can a stranger follow it in a few minutes, and is it pleasant to use?" },
];

export const stackCards = [
  {
    title: "React + Vite",
    role: "The frontend",
    detail:
      "The website or app people actually click through in your demo. Vite scaffolds a React + TypeScript project in one command, with a fast local dev server so you see changes instantly.",
    command: "npm create vite@latest my-app -- --template react-ts",
    link: null as string | null,
    linkLabel: null as string | null,
  },
  {
    title: "Cloudflare Agents SDK",
    role: "The agent backend",
    detail:
      "Build stateful AI agents that run on Cloudflare Workers: they can hold a conversation, remember what happened, call tools, and wake up later to do work, backed by Durable Objects for memory.",
    command: "npm create cloudflare@latest agents-starter -- --template cloudflare/agents-starter",
    link: "https://developers.cloudflare.com/agents/getting-started/quick-start/",
    linkLabel: "Agents SDK quickstart",
  },
  {
    title: "Cloudflare Workers + open source",
    role: "Where it runs",
    detail:
      "Workers runs your agent on Cloudflare's network, and the Agents SDK and starters are open source, so you can read the code, fork it, and learn from real examples instead of starting from a blank page.",
    command: "npm i agents",
    link: "https://developers.cloudflare.com/agents/getting-started/quick-start/",
    linkLabel: "Agents docs",
  },
];

export const setupSteps = [
  {
    title: "Get a laptop ready",
    detail:
      "Bring a laptop with Node.js installed (version 22 or later is what the Agents SDK guides ask for) and a free Cloudflare account. Mentors help with setup on Saturday if you get stuck.",
  },
  {
    title: "Pick a coding agent",
    detail:
      "You do not need to hand-write all the code. Use an AI coding agent: FreeBuff, a free coding agent funded by ads, or OpenCode, an open-source terminal coding agent. Links to both are below.",
  },
  {
    title: "Scaffold the frontend",
    detail: "Ask your coding agent to create a React + Vite app, then describe the screens your demo needs: what the user sees, clicks, and gets back.",
  },
  {
    title: "Add the agent backend",
    detail:
      "Ask your coding agent to add a Cloudflare agent from the agents-starter template, give it a job in plain words, and connect it to your frontend.",
  },
  {
    title: "Run it, test it, demo it",
    detail:
      "Run the app locally, click through it yourself, fix what breaks with the agent's help, and demo the working version live on Sunday. A local demo is enough; deploying to Workers is a bonus, not a requirement.",
  },
];

export const agentLinks = [
  {
    title: "FreeBuff — the free coding agent",
    detail: "Free to use, funded by ads, with frontier coding models. No card, no credits to watch. Use the organizer's referral link.",
    url: "https://freebuff.com/?ref=ref-9b801c68-ca4d-46d9-9ba7-e24d57883d64",
    label: "Start with FreeBuff",
  },
  {
    title: "OpenCode",
    detail: "An open-source AI coding agent that runs in your terminal, desktop app, or editor, and works with many model providers.",
    url: "https://opencode.ai/download",
    label: "Download OpenCode",
  },
];

export const examplePrompt = `Build a demo for the [track name] track.

The sponsor's problem is: [paste the problem from Saturday's pitch].

Build a React + Vite frontend and a Cloudflare agent backend.
The demo should let a user [describe the one main action, e.g. "paste a deal summary and get a stakeholder map"].
Keep it to one clear flow that works end to end, and show the result on screen.
Tell me what you built, what to click first, and what is still fake or hardcoded.`;

export const faqs = [
  {
    q: "Is this the same as Hack for Humanity?",
    a: "No. This is the sponsor-led GTM edition, run as a GTM Labs build weekend. The civic edition of Hack for Humanity keeps its own site and repo, and will return when the civic edition runs.",
  },
  {
    q: "Do I need to bring a company problem?",
    a: "No. Companies bring the problems. You pick one of the four tracks, join a team, and build on the problem its sponsor presents on Saturday.",
  },
  {
    q: "Which companies are sponsoring a track?",
    a: "To be confirmed. Each track will name its sponsor company and its exact problem statement once confirmed. Until then, the track descriptions above are the problem areas.",
  },
  {
    q: "What do teams deliver?",
    a: "A working demo and a short live pitch on Sunday afternoon. Tell the judges what problem you solved, who it is for, and what you would build next with the sponsor.",
  },
  {
    q: "Who can join?",
    a: "Builders, sellers, marketers, RevOps and customer success folks, students, and anyone who wants to learn go-to-market by building. Teams of 1 to 4. Mixed teams of builders and GTM people tend to do best here.",
  },
  {
    q: "What happens to good builds after the weekend?",
    a: "With the sponsor's and the team's permission, promising builds can continue as GTM Labs projects, and the lessons can be written up as case studies for the Club.",
  },
];
