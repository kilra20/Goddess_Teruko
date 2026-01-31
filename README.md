# Goddess Teruko

A modern, elegant personal brand website for Goddess Teruko built with Next.js, React, and Tailwind CSS.

## Features

- **Age Verification Gate** - Age gate to verify users are 18+
- **Dark Theme Design** - Sleek, sophisticated dark aesthetic
- **Social Links** - Twitter and Throne integration
- **Responsive Design** - Mobile-friendly and optimized
- **GitHub Pages Compatible** - Ready for static export and GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export suitable for GitHub Pages.

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Update the `next.config.ts` with your repository name as the `basePath`
3. Enable GitHub Pages in your repository settings
4. Use GitHub Actions to build and deploy:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: ./out
      - uses: actions/deploy-pages@v1
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   └── AgeGate.tsx     # Age verification component
└── ...
```

## Customization

### Update Social Links

Edit the social links in [src/app/page.tsx](src/app/page.tsx) to your Twitter and Throne profiles.

### Styling

- Colors are defined in [tailwind.config.ts](tailwind.config.ts)
- Global styles in [src/app/globals.css](src/app/globals.css)

## License

All rights reserved © 2026 Goddess Teruko
