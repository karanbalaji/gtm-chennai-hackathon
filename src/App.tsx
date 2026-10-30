import { useState } from "react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { tracks, schedule, judging, faqs, stackCards, setupSteps, examplePrompt, agentLinks } from "./data/v2";

const nav = [
  { href: "#tracks", label: "Tracks" },
  { href: "#tech-stack", label: "Tech stack" },
  { href: "#companies", label: "For companies" },
  { href: "#schedule", label: "Schedule" },
  { href: "#judging", label: "Judging" },
  { href: "#faq", label: "FAQ" },
];

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="text-base font-bold tracking-tight">
            Madras GTM <span className="text-primary">Hackathon</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900">
                {n.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-md border text-lg md:hidden"
          >
            ☰
          </button>
        </div>
        {open && (
          <nav className="border-t px-4 py-2 md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <Badge className="bg-orange-600 text-white hover:bg-orange-600">A GTM Labs build weekend · Chennai</Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Companies bring real go-to-market problems. You build the answer in a weekend.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Four tracks. One real problem per track, brought by a company, with a mentor from that company in the room.
              Build a working demo, pitch it live on Sunday, and keep the best ideas going after the weekend.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <a href="#tracks">See the 4 tracks</a>
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-600 bg-transparent text-white hover:bg-zinc-800 hover:text-white" asChild>
                <a href="#companies">Bring a problem as a company</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["2 days", "Saturday and Sunday"],
                ["4 tracks", "One sponsor problem each"],
                ["1 to 4", "People per team"],
                ["Sunday 6 PM", "Demos done, winners named"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-2xl font-bold text-orange-400">{v}</p>
                  <p className="mt-1 text-sm text-zinc-400">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-400">
              Date, venue, and sponsor companies are to be confirmed and will be added here once confirmed.
            </p>
          </div>
        </section>

        <Section
          id="tracks"
          eyebrow="The tracks"
          title="Four tracks, four real problems"
          intro="Each track is shaped by the kind of problem companies actually struggle with in complex B2B go-to-market, including regulated industries like banking and financial services. Pick a track on Saturday after the sponsors pitch their problems live."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {tracks.map((t) => (
              <Card key={t.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{t.num}</Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Sponsor problem · to be confirmed</Badge>
                  </div>
                  <CardTitle className="mt-3 text-2xl">{t.title}</CardTitle>
                  <p className="text-sm font-medium text-zinc-500">{t.tagline}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-5">
                  <p className="leading-relaxed text-zinc-600">{t.problem}</p>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Example builds</p>
                    <ul className="mt-2 space-y-1.5">
                      {t.builds.map((b) => (
                        <li key={b} className="text-sm leading-relaxed text-zinc-700">· {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto rounded-lg bg-zinc-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">The sponsor provides</p>
                    <ul className="mt-2 space-y-1.5">
                      {t.sponsorProvides.map((s) => (
                        <li key={s} className="text-sm leading-relaxed text-zinc-700">· {s}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="tech-stack"
          eyebrow="Tech stack"
          title="You can build this by prompting. No coding experience required."
          intro="This stack is promptable: describe what you want in plain words to a coding agent and it scaffolds the code for you. You still need to test it and demo it, and mentors are in the room to help. If you can describe the problem clearly, you can participate."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {stackCards.map((s) => (
              <Card key={s.title} className="flex flex-col">
                <CardHeader>
                  <Badge variant="outline">{s.role}</Badge>
                  <CardTitle className="mt-3 text-xl">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-sm leading-relaxed text-zinc-600">{s.detail}</p>
                  <pre className="mt-auto overflow-x-auto rounded-lg bg-zinc-950 p-3 text-xs leading-relaxed text-zinc-100">{s.command}</pre>
                  {s.link && s.linkLabel && (
                    <a className="text-sm font-medium text-primary underline" href={s.link} target="_blank" rel="noreferrer">
                      {s.linkLabel} →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-bold">Basic setup, step by step</h3>
          <ol className="mt-4 grid gap-4 md:grid-cols-2">
            {setupSteps.map((st, i) => (
              <li key={st.title} className="rounded-xl border bg-zinc-50 p-5">
                <p className="text-sm font-bold text-primary">Step {i + 1}</p>
                <p className="mt-1 font-semibold">{st.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{st.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-xl border bg-zinc-950 p-5 text-white">
            <p className="font-semibold">A prompt you can start from</p>
            <p className="mt-1 text-sm text-zinc-400">Paste this into your coding agent on Saturday, fill in the brackets, and iterate from there.</p>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-relaxed text-zinc-100">{examplePrompt}</pre>
          </div>

          <h3 className="mt-12 text-xl font-bold">Don't have a coding agent yet? Start here.</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {agentLinks.map((a) => (
              <Card key={a.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{a.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed text-zinc-600">{a.detail}</p>
                  <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                    <a href={a.url} target="_blank" rel="noreferrer">
                      {a.label} →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <section id="companies" className="bg-orange-50/60">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">For companies</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Bring a problem, leave with a working answer</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600">
              This is a company-sponsored challenge, not a logo placement. You bring a problem your team genuinely has,
              and teams spend the weekend building on it with your mentor in the room.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <Card>
                <CardHeader><CardTitle>What you give</CardTitle></CardHeader>
                <CardContent className="space-y-1.5 text-sm leading-relaxed text-zinc-700">
                  <p>· One clear problem statement, before the weekend</p>
                  <p>· Sample or anonymized data teams can actually build with</p>
                  <p>· A mentor on both days and a seat on the judging panel</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>What you get</CardTitle></CardHeader>
                <CardContent className="space-y-1.5 text-sm leading-relaxed text-zinc-700">
                  <p>· Working prototypes on your problem, demoed live on Sunday</p>
                  <p>· Fresh approaches from people outside your team</p>
                  <p>· Time with builders and GTM practitioners, and a written case study if you and the team agree</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>How it stays fair</CardTitle></CardHeader>
                <CardContent className="space-y-1.5 text-sm leading-relaxed text-zinc-700">
                  <p>· Sponsor support does not decide the agenda; the Club runs the format and judging</p>
                  <p>· Confidential company information is handled with care</p>
                  <p>· No promises of leads or customers; this is about the work</p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 text-sm text-zinc-600">
              Interested in sponsoring a track? Talk to the organizers. Contact details will be added here once confirmed.
            </p>
          </div>
        </section>

        <Section
          id="schedule"
          eyebrow="The weekend"
          title="Saturday kicks off. Sunday is demo day."
          intro="Saturday starts in the afternoon and runs to 6 PM. Sunday is a full build day that ends with live demos and winners by 6 PM."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {schedule.map((d) => (
              <Card key={d.day}>
                <CardHeader>
                  <CardTitle className="text-2xl">{d.day}</CardTitle>
                  <p className="text-sm text-zinc-500">{d.note}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {d.items.map((it) => (
                      <li key={it.time} className="flex gap-4 border-b border-zinc-100 pb-3 last:border-0">
                        <span className="w-20 shrink-0 text-sm font-bold text-primary">{it.time}</span>
                        <span className="text-sm leading-relaxed text-zinc-700">{it.what}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="judging" eyebrow="Judging" title="How winners are picked" intro="Judged live on Sunday from the demo and pitch. Slides alone do not count.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {judging.map((j) => (
              <Card key={j.title}>
                <CardHeader>
                  <p className="text-3xl font-bold text-primary">{j.weight}</p>
                  <CardTitle className="text-lg">{j.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-zinc-600">{j.detail}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 rounded-xl border bg-zinc-50 p-5">
            <p className="font-semibold">Rules, simply put</p>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-700">
              <li>· Teams of 1 to 4. Build during the weekend, any stack.</li>
              <li>· Build on your track's sponsor problem. Respect the sponsor's data rules and confidentiality.</li>
              <li>· You keep what you build. If a sponsor wants to continue it with you, that is agreed after the weekend.</li>
              <li>· Be kind, be honest about what your demo actually does, and help other teams when you can.</li>
            </ul>
          </div>
        </Section>

        <Section id="faq" eyebrow="FAQ" title="Questions, answered">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-zinc-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-relaxed text-zinc-500 sm:px-6">
          <p>
            Madras GTM Hackathon · a GTM Labs build weekend, part of The Madras GTM Club's work on the craft of
            go-to-market in India.
          </p>
          <p className="mt-2">
            Looking for the civic edition? That lives on as Hack for Humanity at{" "}
            <a className="font-medium text-primary underline" href="https://karanbalaji.github.io/Chennai-hack-for-humanity/">
              karanbalaji.github.io/Chennai-hack-for-humanity
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
