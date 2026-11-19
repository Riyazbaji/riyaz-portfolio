# Shaik Riyaz Baji — Portfolio

A responsive React + Vite portfolio for a Java Backend Developer.

## Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Personalize before publishing

Update `src/data/portfolio.js` with your current:
- phone number (if you want it public)
- education dates and grades
- internship details
- certificate links (set each certificate's `url`)
- project descriptions and live demo links

Put your resume PDF at `public/Riyaz_Resume.pdf`. The Resume button already points there.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Vite; build command: `npm run build`; output directory: `dist`.
4. Deploy.

## Notes

The site uses only client-side React. The contact section opens the visitor's email app via `mailto`; no backend form service is configured.
