# Arkadiusz Sitek — personal website

Next.js, React, TypeScript, and Tailwind CSS. A personal academic site covering healthcare AI, medical imaging, and physics.

## Local development

- Install the locked dependencies: `npm ci`.
- Start development: `npm run dev`.
- Check code: `npm run lint`.
- Build: `npm run build`.
- Preview the production build: `npm run start`.

The current configuration uses Next.js server hosting (including Vercel), not static export. The build is written to `.next/`.

## Content and routes

- `data/personal.ts`: biography, affiliations, contact details, and profile links.
- `data/publications.ts`: selected publications, grouped by year. Shared by the homepage and publications page. Use `website` for the article landing page and `pdf` only for actual PDFs; optional fields include `doi`, `pubmed`, `type`, `code`, and `image`.
- `app/projects/page.tsx`: research interests.
- `app/info/page.tsx`: artwork and personal interests.
- `app/talks/page.tsx`: existing talk archive; add resource links only when available.
- `components/Footer.tsx`: explicit content revision date; update when content changes.
- `app/globals.css`: responsive layout, typography, and shared component styles.

## Publication verification (September 23, 2026)

- MEDS: [NEJM AI](https://doi.org/10.1056/AIra2501253), 2026;3(6). Review Article, published May 28, 2026. Author order follows the publisher.
- Beyond language: [PubMed](https://pubmed.ncbi.nlm.nih.gov/42259738/), The Lancet Digital Health. 2026 Aug;8(8):101011. Online June 8, 2026. Arkadiusz Sitek and David W. Bates. DOI: [10.1016/j.landig.2026.101011](https://doi.org/10.1016/j.landig.2026.101011).
- Mamba Goes HoME: PDF points to the published NeurIPS 2025 proceedings; article link points to the arXiv abstract.

Existing professional affiliations, contact information, artwork, and talk entries are retained from the original site. No new appointments or credentials are inferred.
