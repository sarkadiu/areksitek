# Academic Portfolio Website

A modern, responsive personal academic website built with Next.js, TypeScript, and Tailwind CSS. Inspired by academic portfolio designs, optimized for showcasing research, publications, and professional information.

## Features

- 🎨 Clean, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js static export
- 🎯 Easy content management through data files
- 🚀 Ready for Vercel deployment
- ♿ Accessible navigation and content structure
- 📝 Separate pages for: About, Lab, Hiring, Teaching, Talks, Publications

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Customize Your Content

Edit the data files in the `data/` directory:

- **`data/personal.ts`** - Your name, title, bio, contact information
- **`data/news.ts`** - News items and announcements
- **`data/publications.ts`** - Your publications organized by year

### 3. Add Your Images

Place images in the `public/` folder:

- `public/headshot.jpg` - Your professional photo
- `public/papers/` - Paper thumbnails and visualizations (paper1.png, paper2.png, etc.)

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 5. Customize Other Pages

Edit the following pages as needed:
- `app/lab/page.tsx` - Lab information and members
- `app/hiring/page.tsx` - Hiring information
- `app/teaching/page.tsx` - Courses and teaching philosophy
- `app/talks/page.tsx` - Talks, podcasts, and tutorials
- `app/publications/page.tsx` - Full publications list

## Deploy to Vercel

### Option 1: Deploy from GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and deploy

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow the prompts, and your site will be live!

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Main layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── lab/               # Lab page
│   ├── hiring/            # Hiring page
│   ├── teaching/          # Teaching page
│   ├── talks/             # Talks page
│   └── publications/      # Publications page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section with bio
│   ├── News.tsx           # News section
│   └── Publications.tsx   # Publications section
├── data/                  # Content data files
│   ├── personal.ts        # Personal information
│   ├── news.ts            # News items
│   └── publications.ts    # Publications
├── public/                # Static assets
│   ├── headshot.jpg       # Your photo
│   └── papers/            # Paper images
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind config
└── next.config.js         # Next.js config
```

## Customization Guide

### Colors and Styling

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#2563eb",    // Change primary color
      secondary: "#64748b",  // Change secondary color
    },
  },
}
```

### Adding New Pages

1. Create a new folder in `app/` (e.g., `app/blog/`)
2. Add a `page.tsx` file in that folder
3. Add the route to `components/Navigation.tsx`

### Updating the Footer

Edit `components/Footer.tsx` to customize copyright and footer content.

### Google Analytics (Optional)

To add Google Analytics:

1. Install package: `npm install @next/third-parties`
2. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// Add inside the <body> tag:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

## Tips for Content

### Publications

- Add paper thumbnails (PNG/JPG) to `public/papers/`
- Include links to PDF, code repositories, and project websites
- Organize by year for easy browsing

### News Items

- Use HTML in news content for formatting and links
- Most recent items appear first
- Use emojis sparingly for visual interest

### Bio

- Keep paragraphs concise
- Link to important papers and resources
- Highlight key achievements and affiliations

## Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

The static site will be exported to the `out/` directory.

## Troubleshooting

### Images not loading?

- Ensure images are in the `public/` folder
- Check that file names match exactly (case-sensitive)
- Use relative paths: `/headshot.jpg` not `./headshot.jpg`

### Deployment fails?

- Make sure `output: 'export'` is in `next.config.js`
- Check that all dependencies are in `package.json`
- Verify no dynamic routes are used without proper configuration

### Styling issues?

- Clear browser cache
- Run `npm run dev` to restart development server
- Check Tailwind classes are valid

## License

Feel free to use this template for your personal academic website.

## Support

For Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
For Vercel deployment: [vercel.com/docs](https://vercel.com/docs)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

