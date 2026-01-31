# Devlup Site Redesign — Master Plan

**Goal:** Redo the site so it’s easy on the eyes, clearly shows what you do, adds a **technical decision layer**, and feels top-tier. Plus a clear plan for the portfolio.

---

## 1. Vision & Principles

| Principle | Meaning |
|-----------|--------|
| **Pleasant to the eyes** | Calm, readable, consistent spacing and typography. No visual noise. |
| **Show what you really do** | Real services, real outcomes, real stack — no generic “software house” fluff. |
| **Technical decision layer** | Make your thinking visible: how you choose tech, architecture, and approach. |
| **Top-tier feel** | Confident, minimal, fast. Every section has a clear job. |

---

## 2. What You Really Do (Content Direction)

From the current site, you already signal:

- **Web:** Next.js, React, Node — fast, accessible, SEO-friendly.
- **Mobile:** Flutter (iOS/Android) — native feel, store-ready.
- **APIs & Data:** Scalable APIs, integrations, relational DBs, data pipelines.
- **AI:** OpenAI, Anthropic, Gemini, Claude — applied AI in products.
- **Analytics:** Python, GA, Looker, Power BI.
- **Design:** Figma, Photoshop, Illustrator, Framer.
- **Stores:** Play Store & App Store publishing.

**Planned content moves:**

1. **Hero & value prop** — One clear line that says what you do and for whom (e.g. “We build and scale digital products for startups and companies — from idea to launch”).
2. **Services** — One page (or one clear block per service) with: what it is, who it’s for, what you deliver, and 1–2 tech bullets (no wall of icons).
3. **Projects / Cases** — Replace placeholders with **real** projects: name, problem, your role, stack, outcome (metric or quote when possible).
4. **About** — Short story (like current Our Story), team (Samantha + Renan?), and why clients choose you (not generic “quality and speed” only).
5. **Trust** — Real logos, quotes, or “Trusted by X” only if you can back it (e.g. “startups in Canada” → name 1–2 if possible).

---

## 2.1 Decisions locked

| Topic | Decision |
|-------|----------|
| **Projects** | You have real projects; you’ll refer later so we can add them. |
| **Language** | **Bilingual** (Portuguese + English). |
| **Technical layer** | **How we work** — process-focused (discovery → delivery), not deep stack rationale. |
| **Non‑negotiables** | **We use AI to get the job done** — frame it persuasively (see §3.1). |
| **Visuals** | **Keep orange + black** (current brand). |
| **Portfolio** | **Devlup showcase only** (Projects = client work; no separate personal portfolio). |

---

## 3. Technical Decision Layer — “How we work”

This layer shows **how** you work: process, not just deliverables. Client-facing and reassuring.

**Locked direction:**

- One **“How we work”** page (or section): discovery → architecture/approach → delivery. Short steps + optional simple diagram.
- Optional: 2–3 sentences per **service** on “how we do it” (e.g. “We start with a discovery call, then propose stack and timeline”).
- **No** deep tech radar or blog required for MVP.

**Content to define:**

- Step names and one line each (e.g. “Discovery — we align on problem, users, and success”).
- One principle or differentiator per step if it helps (e.g. “We use AI to accelerate delivery without sacrificing quality” — see §3.1).

### 3.1 “We use AI” — persuasive framing

**Goal:** Say clearly that you use AI in your workflow and make it a **reason to choose you**, not a risk.

**Ideas (pick what fits):**

| Angle | Example copy (EN) |
|-------|-------------------|
| **Speed without cutting corners** | “We use AI to ship faster — so you get to market sooner without sacrificing quality or security.” |
| **Best of both worlds** | “Human-led strategy and design, AI-accelerated execution: the right mix for reliable, scalable products.” |
| **Modern stack** | “We work with the tools that define modern product development, including AI — so your product stays current and maintainable.” |
| **Consistency & quality** | “AI helps us keep code consistent, catch issues early, and deliver predictable quality at pace.” |

**Where to use it:**

- **How we work** page: one step or principle (e.g. “We use AI to accelerate delivery and keep quality high”).
- **Hero or value prop** (optional): one short line (e.g. “Human-led strategy, AI-accelerated delivery”).
- **About / Why us**: one bullet or sentence so it’s clear and reassuring.

**Tone:** Confident, matter-of-fact. Not “we rely on AI” but “we use AI as part of how we deliver.”

---

## 4. Visual & UX Direction

**Locked:** **Orange + black** (current brand). No color refresh.

**Proposed direction:**

1. **Calm and readable**
   - Keep dark (black/near-black) as base; orange as primary accent and CTA.
   - One clear type hierarchy (e.g. Geist or current font); generous spacing, short paragraphs.

2. **Reduce motion and clutter**
   - Fewer parallax layers; subtle motion only (fade-in on scroll, hover states).
   - Simplify or remove decorative noise (e.g. stars) so content leads.

3. **Consistent system**
   - Same card style, button style, section padding.
   - Use orange sparingly so CTAs stay strong.

4. **Performance**
   - Next/Image everywhere, minimal JS above the fold, lazy load below fold.
   - No heavy animations on first screen.

---

## 5. Information Architecture (Sitemap)

**Proposed structure:**

```
Home
├── Hero (what you do + primary CTA)
├── Social proof (numbers or logos, only if real)
├── Services (short: Web, Mobile, APIs & Data — link to /services)
├── How we work (teaser → link to /how-we-work)
├── Selected projects (3–4 cards → link to /projects)
├── Why work with us (short)
└── Contact / CTA

/services          — All services + “how we do it” snippets per service
/how-we-work       — How we work (process: discovery → delivery; AI angle per §3.1)
/projects          — Full project list; filter by type (web, mobile, etc.)
/projects/[slug]   — One project: context, solution, stack, outcome

/about            — Story, team, values
/contact           — Form + Calendly + WhatsApp
```

**Bilingual (locked):**

- Language toggle: **EN / PT** (e.g. in nav or header).
- All main copy and key pages available in both languages (structure: e.g. `/en/`, `/pt/` or locale in path/query; or one page with client-side/lang switch).

**Optional later:**

- `/blog` or `/notes` — Technical or product posts.

---

## 6. Portfolio Plan — Devlup showcase

**Locked:** Portfolio = **Devlup project showcase** only. “Projects” = best client work; no separate personal portfolio site.

**Content per project:**

- **Name**, **client/context** (if allowed), **problem**, **what you did** (role, stack), **outcome** (metric or quote), **1–3 images or short video**.
- 3–6 real projects; you’ll refer later so we can add them.
- Filters: by type (web, mobile, AI, etc.) and/or by category.

---

## 7. Phased Implementation

| Phase | Scope | Outcome |
|-------|--------|--------|
| **0. Align** | Lock content (services, projects, “how we work”), bilingual, visuals (orange + black), portfolio = Devlup showcase. | **Done.** |
| **1. Content & IA** | Copy for Home, Services, How we work, About (EN + PT); real project data when ready; “we use AI” line(s) per §3.1. | Content ready to plug in. |
| **2. Design system** | Colors, type, spacing, components (buttons, cards, sections). | Figma or in-code style guide. |
| **3. Core pages** | Home (new structure), Services, How we work, About, Contact. | New site skeleton. |
| **4. Projects** | Projects list + project detail page(s). | Portfolio/case studies live. |
| **5. Polish** | Animations, responsiveness, performance, SEO. | Production-ready. |
| **6. Bilingual** | EN/PT toggle, copy in both languages, URLs/SEO per locale. | Bilingual site live. |
| **7. Optional** | Blog/notes. | Growth-ready. |

---

## 8. Next steps

1. **Content:** Draft copy for Home, Services, How we work, About (EN + PT); add “we use AI” line(s) per §3.1.
2. **Projects:** When you’re ready, share 2–4 real projects (name, 1–2 images, tech, result) so we can add them.
3. **IA + i18n:** Decide URL strategy for bilingual (e.g. `/en/...` and `/pt/...`, or single URL + toggle and store locale).
4. **Build:** Start with Phase 2 (design system) and Phase 3 (core pages), then Projects and bilingual.

---

## 9. Saved ideas (backlog)

Ideias para fazer depois; por agora o foco é só no **deliverable** (timeline de entregáveis).

| Ideia | Descrição |
|-------|-----------|
| **Metadata por locale** | Implementar `generateMetadata` em `[locale]/layout.tsx` ou em cada página para `title` e `description` em EN/PT (SEO). |
| **Redirects legados** | Redirecionar URLs antigas para as novas: `/contato` → `/pt/contact`, `/servicos` → `/pt/services`, `/projetos` → `/pt/projects`, `/sobre` → `/pt/about`, etc. |
| **Refinamentos de UI** | Ajustes gerais de interface conforme feedback (cores, textos, ordem de seções, etc.). |
