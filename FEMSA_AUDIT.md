# FEMSA GLOBAL TRADING LIMITED — Brand Compliance Audit
> Audited against: **FEMSA BRAND GUIDELINE.pdf** (Original) and **Femsa Group Visual Refresh.pdf** (2025 Update)
> Codebase root: `/home/keneth/femsa`
> Audit date: 2026-07-01

---

## § 1 — Brand Colors

- ✅ `femsa-navy` defined as `#032177` — `tailwind.config.js:10` and `src/styles/index.css:4` — exact match to both brand documents.
- ✅ `femsa-orange` defined as `#f96419` — `tailwind.config.js:11` and `src/styles/index.css:5` — exact match to both brand documents.
- ✅ `femsa-smoke` defined as `#F5F5F5` — `tailwind.config.js:12` and `src/styles/index.css:6` — matches the "White Smoke" token introduced in the Visual Refresh deck.
- ✅ `BrandPattern.jsx:10–11` hardcodes `#032177` and `#f96419` directly, consistent with config.
- ✅ `StripeShape.jsx:13–15` hardcodes `#f96419`, `#FFFFFF`, `#032177` directly, consistent with config.
- ✅ `logo-default.svg:9` uses `#032177` (navy F) and `#f96419` (accent) — exact match.
- ✅ `logo-reverse.svg:9` uses `#FFFFFF` (white F) and `#f96419` (accent) — correct.
- ⚠️ **Brand version conflict (flag for Kenny — do not silently resolve):** The site is following the **Visual Refresh (2025)** palette naming convention (it has "White Smoke" / `femsa-smoke` as a third system color, uses diagonal stripe shapes, and loads the "Friends" typeface). The original Brand Guideline only defines two colors and uses a dotted sunburst motif. The site mixes both: it uses the stripe shapes of the Visual Refresh AND the sunburst pattern of the original guideline (`BrandPattern.jsx`). **You need to decide which brand era this site officially follows.** See also §4.
- ⚠️ `src/pages/group/Home.jsx:184` inline SVG Autotronics brand element uses `#032177` stroke, which happens to be Femsa Navy — this is coincidental re-use of the brand color inside a third-party logo mock-up SVG. No impact on Femsa brand palette, but worth noting.
- ✅ No stray non-brand blues or oranges found in Tailwind utility classes or component-level hex overrides (the Home.jsx partner logos use third-party brand colors `#E41E26`, `#E60000`, `#D8232A` inside dedicated partner SVGs — these are intentional, not Femsa brand drift).

---

## § 2 — Typography

- ❌ **"BW Modelica"** (original brand guideline font) — `grep` found zero instances anywhere in the codebase. Not loaded, not declared, not referenced.
- ⚠️ **"Friends"** (Visual Refresh 2025 font) — `src/styles/index.css:12–20` declares a `@font-face` for `font-family: 'Friends'` pointing to `src/assets/fonts/Friends-Bold.woff2` and `src/assets/fonts/Friends-Bold.woff`. **However the font files themselves do not exist yet** (`src/assets/fonts/` directory is empty). Vite build confirms this with an "didn't resolve at build time" warning. The font will silently fall through to the fallback stack.
- ⚠️ **"Body Text Font"** (Visual Refresh 2025) — `src/styles/index.css:22–29` declares a `@font-face` for `font-family: 'BodyFont'` referencing `Body-Regular.woff2` / `Body-Regular.woff`. Same problem — **files missing**, Vite warns, falls through to `system-ui`.
- ⚠️ `tailwind.config.js:15` has `fontFamily.heading` set to `['Plus Jakarta Sans', 'Friends', 'Sora', 'sans-serif']` — but `src/styles/index.css:8` has `--font-heading` set to `['Friends', 'Plus Jakarta Sans', 'Sora', sans-serif]`. **The priority order is reversed** between Tailwind config and CSS variables. Since Tailwind v4 reads from the CSS `@theme` block, `--font-heading` takes precedence — `Friends` is first. But because the font file is missing, it still falls back to system fonts in practice.
- ⚠️ `index.html:11` loads **Plus Jakarta Sans** from Google Fonts. This is used as a fallback and is visually close to the brand spec, but it is not "BW Modelica" (original) nor "Friends" (Visual Refresh). The site is currently rendering in **Plus Jakarta Sans** everywhere due to missing font files.
- ❌ The "Friends" font weights specified in the Visual Refresh (Ultra Bold / Semibold / Regular / Normal / Ultralight / italics) are only partially declared — only Bold `font-weight: 700 800` is declared in the `@font-face` block. No light/regular/semibold cuts are configured even if the files were present.
- **Summary:** The site intends to follow the Visual Refresh typography ("Friends" + body font) but is **currently rendering in Plus Jakarta Sans + system-ui** due to missing local font files. Neither original (BW Modelica) nor Visual Refresh (Friends) font is actually loading.

---

## § 3 — Logo Usage

- ✅ Three logo variants exist: `logo-default.svg`, `logo-reverse.svg`, `logo-icon.svg` — `src/assets/logo/`.
- ✅ The wordmark text in both SVGs is lowercase **`femsa`** — `logo-default.svg:15`, `logo-reverse.svg:15` — matches the brand guideline requirement.
- ✅ `Logo.jsx:8` — selects `logo-reverse.svg` (white/orange on transparent) for the navbar which sits on a navy background. This matches the "white logo on dark background" rule.
- ✅ `Footer.jsx:51` — also uses `variant="reverse"` on the navy footer background. Correct.
- ✅ `Logo.jsx:18` — uses `object-contain` and `w-auto` with a fixed `h-` class. Aspect ratio is locked; the logo cannot be stretched.
- ⚠️ **Clear space:** `Navbar.jsx:148` renders `<Logo variant="reverse" className="h-10 md:h-12" />` inside a flex container with `gap-3` — the logo sits 12px from the nearest nav text. The Brand Guideline specifies a minimum clear zone equal to the cap-height of the wordmark. At h-12 (48px) the wordmark cap-height is approximately 25px, so gap-3 (12px) **may be below the minimum clear space**. Flagging for visual review.
- ⚠️ **Logo variant consistency:** `logo-default.svg` is never used on the public site — it appears to be reserved for light-background contexts. However, no page currently renders the logo on a white/light background section (the logo only appears in the navbar and footer, both navy). If a white-background section ever needs a logo lockup (e.g., a "press kit" or "about" page badge), the default variant should be used there. Currently there's no violation but also no use of the default variant.
- ❌ **"femsa" in body copy uses uppercase "FEMSA"** in multiple places in `src/pages/group/Home.jsx` (lines 129, 132, 135, 138) where the About paragraph reads "FEMSA Group" and "FEMSA Group" in all-caps as a proper noun — this conflicts with the brand guideline which states body copy should use "Femsa" (title case) and only the logo wordmark uses lowercase "femsa". The brand guideline distinguishes the logo wordmark from the brand name used as a noun.

---

## § 4 — Brand Pattern & Shapes

- ✅ **Visual Refresh diagonal stripe motif** is implemented via `StripeShape.jsx` — three parallel diagonal orange bars used on hero sections and card corners. Applied across Trading Home, Group Home, About, Contact, WhyPartner, Services, and Footer.
- ✅ `StripeShape` is used consistently across all section headers: `trading/Home.jsx:17`, `trading/About.jsx:16`, `trading/Contact.jsx:38`, `trading/WhyPartner.jsx:14`, `trading/Services.jsx:14`, `group/About.jsx:14`, `group/Contact.jsx:27`, `Footer.jsx:24 (diagonal pattern inline SVG)`.
- ⚠️ **Original brand sunburst pattern is also present** alongside the Visual Refresh stripes: `BrandPattern.jsx` implements the repeating dotted sunburst pattern (ray strokes + center circle) and is used in all section headers (`BrandPattern color="white" opacity="opacity-[0.03]"`). **The site is mixing two brand eras' motifs simultaneously.** The original guideline uses the sunburst; the Visual Refresh replaces it with stripes. Both are currently active on every hero section.
- ❌ **The original guideline's two-tone diagonal wedge/triangle** section divider (orange lower-left, navy upper-right) is not implemented anywhere.
- ✅ The `Footer.jsx:23–27` uses an inline SVG diagonal line pattern (different from both BrandPattern and StripeShape) — this is a subtle footer texture, not a major brand element.
- **Summary:** The site uses **both** the Visual Refresh stripe shapes AND the original sunburst pattern. Per your brand audit instruction, this is flagged for your decision — not silently resolved.

---

## § 5 — Imagery Style

- ❌ **Hero section (Group Home):** `src/pages/group/Home.jsx:276–280` — the hero uses a generic Unsplash stock photo (`photo-1573497019940-1c28c88b4f3e`) described as "Professional global trading services". Stock photo — not confirmed to be African professionals in the brand-appropriate style. Has a `// TODO: replace with real photography` comment.
- ❌ **Trading About — MD portrait:** `src/pages/trading/About.jsx:36` — uses `photo-1573496359142-b8d87734a5a2` for Beatrice Francis's portrait. This is a generic Unsplash photo of a woman, not a real photo of Beatrice Francis. The alt text correctly says "Beatrice Francis MD & CEO" but the image is a stock placeholder. Has a `// TODO: replace with real photography` comment.
- ❌ **All Leadership cards:** `src/components/ui/LeadershipCard.jsx:20` — all 6 leadership cards (including the 5 `[Name]` placeholder entries) use the **same single Unsplash photo** (`photo-1573496359142-b8d87734a5a2`) for every card. This means all six cards show the same face, which is clearly wrong for named leadership profiles.
- ❌ **Testimonial avatars (Group Home):** `src/pages/group/Home.jsx:363,383` — two testimonial photos use Unsplash portraits (`photo-1507003211169-0a1dd7228f2d` and `photo-1534528741775-53994a69daeb`). Both have `// TODO: replace with real photography` comments. Names "Joseph Mlay" and "Amani Salum" appear to be invented — not from source documents.
- ⚠️ The brand guideline specifies authentic photography of diverse African professionals. Unsplash stock photos may or may not meet the "diverse African professionals" standard depending on the specific images — requires visual inspection.
- ✅ The site does not use clip-art or icon-only illustrations in hero sections — it uses photography (even if placeholder stock).

---

## § 6 — Content Accuracy: About / Mission / Vision / Core Values

### Femsa Global Trading Limited (Trading sub-site)
- ✅ **Mission** (`src/data/coreValues.js:29`): *"To be the trusted global trading partner that helps clients unlock higher profits by delivering cost-efficient, timely, and reliable solutions tailored to their unique needs."* — matches source document. ✅
- ✅ **Vision** (`src/data/coreValues.js:30`): *"To become a world-class trading company recognized for driving value, building lasting relationships, and consistently exceeding client expectations."* — matches source document. ✅
- ✅ **Core Values** (`src/data/coreValues.js:31–52`): All 5 specified values present — **Integrity, Customer Success, Efficiency, Innovation, Partnership** — correct. ✅
- ✅ Trading Home page (`src/pages/trading/Home.jsx:53,62`) renders `tradingCoreValues.mission` and `tradingCoreValues.vision` correctly.

### Femsa Group (Group sub-site)
- ✅ **Group Mission** (`src/data/coreValues.js:2`): *"To build a trusted and diversified group of companies..."* — correct holding-company-level mission.
- ✅ **Group Vision** (`src/data/coreValues.js:3`): *"To become a globally recognized African business group distinguished by innovation..."* — correct.
- ⚠️ **Group core values** (`src/data/coreValues.js:4–26`) contain: Integrity, Innovation, Customer Success, **Sustainability**, **Excellence**. The Trading sub-site's 5 values include "Efficiency" and "Partnership" (not "Sustainability" or "Excellence"). The group values are distinct from the trading values — this is fine as long as the two are not cross-displayed. Current code keeps them separate (`groupCoreValues` vs `tradingCoreValues`) — ✅ correct separation.

### ⚠️ SCOPE QUESTION — Flag for Kenny
The **Group Home page "About" copy** (`src/pages/group/Home.jsx:128–139`) describes a generic holding group ("FEMSA Group is a dynamic and diversified organization..."). This copy **does not appear in the source company profile PDFs** as a verbatim passage — it appears to be generated filler copy. It is not factually wrong about the holding company, but it also does not mention the six named subsidiaries. **Confirm whether this copy is acceptable or should be replaced with official Group profile copy.**

Additionally, the **Group Home `About Us` section** references "FEMSA Group" in all-caps (lines 129/132/135/138) — see §3 for the brand naming issue.

---

## § 7 — Content Accuracy: Services (4 Categories)

- ✅ All **four service categories** are present: Equipment & Machinery, Raw Materials & Packaging, Spare Parts & Components, Consumables & Plant Supplies — `src/data/tradingServices.js`.
- ✅ `Services.jsx:40` renders all four from the data array — no categories omitted.
- ⚠️ **Equipment & Machinery items** (`tradingServices.js:6–13`) list: "Industrial processing plants & assembly lines", "Food & beverage packaging equipment", "Construction & earthmoving machinery", "Agricultural processing machinery", "Material handling & warehousing lifts", "Custom industrial machinery design sourcing." The source spec lists: plastic injection/blowing/filling machines, date stamping, labelling machines (PVC/OPP/adhesive), shrink-wrapping/packaging, water treatment/filtration, conveyors/mixers/compressors, QC/lab testing equipment. **The site's list is more generic and does not include the specific machine types** (labelling, date stamping, shrink-wrap, water treatment, QC/lab). These are the actual product lines per the company profile. The site copy is not wrong, but it is less specific than the source document.
- ⚠️ **Raw Materials & Packaging items** (`tradingServices.js:19–26`): Site lists PET/HDPE/PP polymers ✅, industrial chemicals ✅, paperboard/corrugated ✅, flexible films ✅, steel/copper/aluminum (❌ not in source spec), food-grade ingredients (❌ not in source spec). Source spec explicitly lists: LDPE/LLDPE resins ❌ (missing), preforms ❌ (missing), caps and closures ❌ (missing), PVC/OPP/adhesive labels ❌ (missing), plastic bags/shrink films ✅. **Some items from source doc are missing; some items in the site copy are not in the source doc.**
- ✅ **Spare Parts & Components** (`tradingServices.js:32–39`): Motors, gearboxes, drives ✅, pneumatic/hydraulic valves/cylinders/seals ✅, bearings, belts, chains ✅, electrical switchgear, control panels, PLCs ✅, filtration/pump spares ✅. Source spec also mentions sensors ❌ (missing) and shafts ❌ (missing). Largely accurate, minor gaps.
- ✅ **Consumables & Plant Supplies** (`tradingServices.js:45–52`): Lubricants/greases/oils ✅, abrasives/cutting tools/welding ⚠️ (source says "maintenance tools"), PPE/safety gear ✅, adhesives/sealants/cleaning chemicals ✅, hand/power tools ✅, MRO supplies ✅. Close match.
- ❌ The RFQ form (`trading/Contact.jsx:189–198`) drop-down options match the 4 categories correctly ✅, but the `specification` field is a single-line `<input type="text">` rather than a `<textarea>` — for a B2B specification field, this is a UX limitation (long specs won't render well).

---

## § 8 — Content Accuracy: Why Partner / Differentiators

### Benefits for Manufacturers (`src/data/whyPartner.js:1–8`)
The site lists 6 manufacturer benefits:
1. "Direct access to the growing East African industrial market." ✅ (market access)
2. "Accurate local market demand forecasting and customer profiling." ✅ (market insights)
3. "Handling of regional import clearing, duty compliance, and local logistics." ⚠️ (source says "reduced selling costs" — site frames it as logistics, not cost savings)
4. "Mitigation of exchange rate fluctuations and secure trade finance solutions." ❌ (not in source spec — source says "assured business / structured purchase agreements")
5. "Dedicated customer support and local representation in Dar es Salaam." ⚠️ (maps loosely to "long-term partnership")
6. "Regular reporting on market trends and industrial customer feedback." ✅ (market insights)

**Missing from site:** "Increased order volumes" and "Assured business (structured purchase agreements)" — two of the six source spec points are not represented.

### Benefits for Industrial Customers (`src/data/whyPartner.js:10–17`)
The site lists 6 customer benefits:
1. "Lower raw material and packaging procurement budgets." ✅ (best value for money)
2. "Direct factory-to-buyer pricing without excessive middleman fees." ✅ (best value/one-stop)
3. "Guaranteed shipping schedules preventing expensive factory downtime." ✅ (reliable supply)
4. "Comprehensive handling of import clearing and local delivery." ✅ (time & cost savings)
5. "Origin-level quality inspections and compliance certification." ✅ (quality assurance)
6. "Flexible supply contract options and tailored payment structures." ✅ (transparent trade terms)

All 6 source-spec customer benefits are reasonably covered. ✅

### Differentiators (`src/data/differentiators.js`)
The site lists **3 differentiators** ("Global Sourcing Network", "Tanzanian Logistics Expertise", "Rigorous Quality Checks"). The source spec defines **6 differentiators**: proven cost/waste/speed track record, global supplier network, tailored solutions, data-driven market intelligence, transparency/accountability, long-term relationship focus. **Only 3 of 6 are present on the site.** The following 3 are missing:
- ❌ Proven cost/waste/speed track record
- ❌ Data-driven market intelligence
- ❌ Transparency/accountability

### Audience Distinction
- ✅ `WhyPartner.jsx:29–67` uses two separate columns: "Benefits for Manufacturers" and "Benefits for Industrial Customers" — audiences are clearly distinguished, not conflated.

---

## § 9 — Content Accuracy: Leadership & Team

- ✅ **Beatrice Francis** named correctly as MD & CEO — `src/data/leadershipTeam.js:3–5` and `src/data/leadershipTeam.js:35–37` (mdMessage).
- ✅ The title "Managing Director & Chief Executive Officer (MD & CEO)" is correct — matches source doc.
- ✅ All 6 org roles are present: MD & CEO, COO, CFO, CMO (called "Chief Marketing Officer" in the site — see note), CLO, Director of Client Relations & Business Development — `leadershipTeam.js:1–31`.
- ⚠️ The site labels the commercial role "Chief Marketing Officer (CMO)" (`leadershipTeam.js:19`) — the source PDF itself is inconsistent (uses both "CMO" and "CCO" for "Chief Commercial Officer"). The audit instruction says to treat it as "Chief Commercial Officer." The site currently says "Chief Marketing Officer" — this should be flagged for correction.
- ❌ **5 of 6 leadership cards show `[Name]` as the name** (`leadershipTeam.js:8,13,18,23,28`). The `LeadershipCard` component renders `[Name]` literally as the heading. This will display visibly on the live site as "[Name]" for the COO, CFO, CMO, CLO, and Director.
- ❌ **All 6 leadership cards use the same single stock photo** (`LeadershipCard.jsx:20` — same Unsplash URL for every card). This means Beatrice Francis and all `[Name]` placeholders show identical faces — incorrect and misleading.
- ❌ `src/pages/trading/About.jsx:36` uses a stock Unsplash photo attributed to Beatrice Francis in the alt text — this is not a real photo of Beatrice Francis and should be replaced when actual photography is available.
- ✅ "Frank Ernest" (the sample business-card name from the Visual Refresh deck) does **not** appear anywhere in the codebase — correct.

---

## § 10 — Content Accuracy: Contact Info

### Correct values per source doc:
- Company: Femsa Global Trading Limited
- Address: P.O. Box 40310, Dar es Salaam
- Phone: +255 761 351 371
- Email: info@myfemsa.com
- Website: www.myfemsa.com

### Audit findings:

**Trading sub-site:**
- ✅ `trading/Contact.jsx:73` — Phone `+255 761 351 371` ✅
- ✅ `trading/Contact.jsx:85–86` — Email `info@myfemsa.com` ✅
- ✅ `trading/Contact.jsx:99` — Address "Femsa Global Trading Limited, P.O. Box 40310 Dar es Salaam, Tanzania" ✅ *(note: missing comma after "40310" — should be "P.O. Box 40310, Dar es Salaam")*
- ✅ `Footer.jsx:174` — Phone `+255 761 351 371` (only shown in trading context via `isTrading &&`) ✅
- ✅ `Footer.jsx:184,187` — Email `info@myfemsa.com` for trading ✅
- ✅ `Footer.jsx:163` — Address in footer trading mode ✅
- ✅ `Footer.jsx:197` — Website `www.myfemsa.com` for trading ✅

**Group sub-site:**
- ❌ `group/Contact.jsx:75–76` — Email shows `info@femsa.com` — **wrong**, should be `info@myfemsa.com` (or a separate group email if different — clarify with Kenny)
- ❌ `group/Home.jsx:427` — Email shows `info@femsa.com` — same issue
- ❌ `Footer.jsx:184,187` — shows `info@femsa.com` when NOT on trading pages — same issue
- ❌ `Footer.jsx:197` — shows `www.femsa.com` when NOT on trading pages — **wrong**, should be `www.myfemsa.com` (or a separate group website if different — clarify)
- ⚠️ Group contact page (`group/Contact.jsx:63`) — Address "P.O. Box 40310, Dar es Salaam, Tanzania" — correct address ✅ but **no phone number is listed on the group contact page** — the source document only specifies phone for Trading, so this may be intentional, but worth confirming.
- ✅ No instance of the placeholder phone `+255 782 362 262` found in codebase.
- ✅ No instance of `frank@myfemsa.com` found in codebase.

---

## § 11 — General Consistency Checks

- ❌ **"FEMSA Group" (all-caps) in body copy** — `src/pages/group/Home.jsx:129,132,135,138` — four paragraphs in the "We are Femsa Group" section use "FEMSA Group" in all-caps. Brand guideline states body copy should use "Femsa" as a proper noun (title case), not "FEMSA." The logo wordmark uses lowercase "femsa" — neither all-caps in body copy.
- ✅ No instances of "FEMSA Global" or "Femsa Trading" (incorrect short forms) found in source code.
- ✅ "Femsa Global Trading Limited" (full correct name) is used consistently in trading sub-site copy.
- ✅ No lorem ipsum or sample bank-letter text found in any source file — `grep` returned zero matches.
- ❌ **Meta title** (`index.html:7`): `"Femsa Group — Stronger Together. Always Moving Forward."` — this is the **group** tagline for a single-page entry point. **The trading sub-site has no separate meta title or description** — the site is a SPA with no per-route `<title>` management. A visitor arriving on `/trading` from a search engine sees the same group-level title.
- ❌ **Meta description** (`index.html:8`): Describes "Femsa Group" as a "diversified Tanzanian holding company operating across Legal, Trading, Microfinance, Healthcare, Education, and Agricultural sectors." — This is the group description only. No meta description for Femsa Global Trading Limited exists.
- ❌ **No Open Graph (OG) tags** anywhere in `index.html` — no `og:title`, `og:description`, `og:image`, `og:url`. Social media shares will show a blank preview.
- ❌ **Favicon (`public/favicon.svg`)** — uses a purple/violet SVG icon with `fill="#863bff"` — **this is the default Vite/React template favicon**, not the Femsa brand logo. Brand colors are `#032177` (navy) and `#f96419` (orange) — neither appears in the favicon. This must be replaced with the Femsa logo icon.
- ✅ `public/icons.svg` exists — not audited in detail as its role is unclear; contents may include brand icons.
- ✅ No default React/Vite boilerplate copy appears in any page component.

---

## Open Questions for Kenny

1. **§1 / §4 — Which brand document are we following?** The site currently implements elements from **both** the Original Brand Guideline (sunburst `BrandPattern`) and the **Visual Refresh 2025** (diagonal `StripeShape`, "Friends" font, White Smoke color). Do you want to commit to one era, or is the hybrid intentional? If Visual Refresh, the `BrandPattern` sunburst component should be removed. If Original, the `StripeShape` stripes and the Friends font should be replaced with BW Modelica.

2. **§2 — Font files:** The "Friends" and "Body Text Font" `.woff` / `.woff2` files are missing from `src/assets/fonts/`. Do you have these licensed font files to drop in? Without them the site renders in Plus Jakarta Sans + system-ui, and neither brand spec is met.

3. **§6 — Group Home "About" body copy (lines 129–139):** The four paragraphs describing "FEMSA Group is a dynamic and diversified organization..." do not appear in the source PDFs — are these written by you, or should they be replaced with copy from the official Femsa Group Company Profile document?

4. **§6 — Site scope:** The site serves both "Femsa Group" (the holding company, 6 subsidiaries) and "Femsa Global Trading Limited" (the trading subsidiary) under one SPA. The source documents and audit brief treat these as distinct. Is the Group section intentionally in scope for this same codebase/domain? If so, should the Group pages use the Group mission/vision (which they currently do correctly) and keep the Trading pages for Trading copy (also correct)?

5. **§9 — CMO vs CCO title:** The role is labelled "Chief Marketing Officer" on the site but the source PDF labels it both "CMO" and "CCO" for "Chief Commercial Officer." Which title do you want displayed?

6. **§10 — Group contact email and website:** `info@femsa.com` and `www.femsa.com` are shown on Group-context pages. Are these the correct group-level contact details, or should all contact info uniformly use `info@myfemsa.com` / `www.myfemsa.com`?

7. **§9 — Leadership photos and `[Name]` placeholders:** Five leadership cards show `[Name]` literally and all cards share the same stock photo. Do you have real names and photos for COO, CFO, CMO/CCO, CLO, and Director of Client Relations? If not, should those five cards be hidden or shown as "Position TBA"?

8. **§11 — Per-route SEO / OG tags:** The site has no per-route meta title/description management and no Open Graph tags. Do you want to add these (e.g., using `react-helmet` or React 19's native `<title>`)? This is especially important for the Trading sub-site which currently shares the Group's meta title.

9. **§7 — Service catalogue depth:** The product-level specifics in the source company profile (e.g., "plastic injection/blowing/filling machines", "date stamping equipment", "LDPE/LLDPE resins", "preforms", "caps and closures") are broader than what the site currently lists. Do you want the site copy updated to match the source spec item-for-item, or is the current higher-level summary intentional?

10. **§5 — Testimonials:** "Joseph Mlay / Chief Engineer, East Africa Cement" and "Amani Salum / Director, Salum Agricultural Co." appear as testimonials with Unsplash portrait photos — these names and quotes do not appear in any source document. Are these real clients who approved these testimonials, or invented placeholders that should be removed?

---

*End of FEMSA Audit Report — no code has been changed. Awaiting your review and instructions before any fixes are applied.*
