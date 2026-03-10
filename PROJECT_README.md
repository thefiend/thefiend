# Jason Kam — Portfolio

A modern, minimalist portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

🌐 **Live site:** [thefiend.github.io/thefiend](https://thefiend.github.io/thefiend)

## Tech Stack

- **Framework:** Next.js 14 (static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Icons:** simple-icons
- **Lightbox:** yet-another-react-lightbox

## Project Structure

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── FloatingElements.tsx
    ├── Navigation.tsx
    └── SkillIcon.tsx
public/
└── assets/
    ├── favicon.ico
    └── images/
        ├── jason-kam.jpeg
        └── portfolio/
            ├── LuckyDraw.png
            └── MakanGoWhere.png
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to GitHub Pages

Deployment is automated via GitHub Actions on every push to `master`.

### One-time setup

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `master` — the workflow at `.github/workflows/deploy.yml` will build and deploy automatically

### Manual build

```bash
npm run build
# Static output is generated in ./out
```

### How it works

- `next.config.js` sets `output: 'export'` which generates a fully static site into `./out`
- The GitHub Actions workflow builds the project and uploads `./out` to GitHub Pages
- Triggered automatically on every push to `master`

## Contact

- **Email:** jason@jasys.xyz
- **Location:** Singapore
- **GitHub:** [github.com/thefiend](https://github.com/thefiend)
- **LinkedIn:** [linkedin.com/in/jasonkammf](https://www.linkedin.com/in/jasonkammf)
