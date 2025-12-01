# Quick Start Guide

Get your academic website running in 5 minutes!

## 1. Install Dependencies (1 minute)

```bash
npm install
```

## 2. Start Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## 3. Add Your Photo (2 minutes)

1. Save your professional headshot as `public/headshot.jpg`
2. Refresh the browser - you should see your photo!

## 4. Update Your Info (2 minutes)

Edit `data/personal.ts` and change:
- Your name
- Your title
- Your email
- Your bio

Save the file and the page will auto-refresh!

## 5. Deploy to Vercel (1 minute)

### First time:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Updates:
Just push to GitHub - Vercel automatically redeploys!

```bash
git add .
git commit -m "Update my info"
git push
```

## What's Next?

📝 **Customize More:**
- Add news items in `data/news.ts`
- Add publications in `data/publications.ts`
- Edit other pages in `app/` folder

📚 **Learn More:**
- See `CUSTOMIZATION.md` for detailed customization guide
- See `README.md` for full documentation

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start

# Check for code issues
npm run lint
```

## File Structure Overview

```
📁 Your Website
├── 📁 app/              ← Pages (home, lab, hiring, etc.)
├── 📁 components/       ← UI components (navigation, footer, etc.)
├── 📁 data/            ← YOUR CONTENT (edit these!)
│   ├── personal.ts     ← Your info
│   ├── news.ts         ← News items
│   └── publications.ts ← Your papers
├── 📁 public/          ← Images
│   ├── headshot.jpg    ← Your photo
│   └── 📁 papers/      ← Paper thumbnails
└── 📄 README.md        ← Full documentation
```

## Need Help?

- 📖 Check `CUSTOMIZATION.md` for step-by-step customization
- 📖 Check `README.md` for full documentation
- 🌐 [Next.js Docs](https://nextjs.org/docs)
- 🚀 [Vercel Docs](https://vercel.com/docs)

---

🎉 **You're all set!** Start customizing and make it yours!

