# Website Setup Checklist

Use this checklist to ensure your website is ready to go live!

## Essential Setup

- [ ] Install dependencies (`npm install`)
- [ ] Add your headshot photo to `public/headshot.jpg`
- [ ] Update your name in `data/personal.ts`
- [ ] Update your title in `data/personal.ts`
- [ ] Update your email in `data/personal.ts`
- [ ] Update your office and address in `data/personal.ts`
- [ ] Write your bio in `data/personal.ts`
- [ ] Update or remove announcement in `data/personal.ts`

## Content Customization

- [ ] Add at least 3-5 news items in `data/news.ts`
- [ ] Add your publications in `data/publications.ts`
- [ ] Add paper thumbnails to `public/papers/` (optional but recommended)
- [ ] Update lab information in `app/lab/page.tsx`
- [ ] Update hiring information in `app/hiring/page.tsx`
- [ ] Add your courses in `app/teaching/page.tsx`
- [ ] Add your talks/podcasts in `app/talks/page.tsx`

## Links & External Resources

- [ ] Update Google Scholar link in `app/publications/page.tsx`
- [ ] Add links to your papers (PDF, code, websites)
- [ ] Update social media links (if adding them)
- [ ] Check all placeholder `#` links are replaced

## Testing

- [ ] Test homepage at http://localhost:3000
- [ ] Test all navigation menu items work
- [ ] Test on mobile (resize browser)
- [ ] Check images load correctly
- [ ] Verify all links work
- [ ] Check for typos and grammar

## Before Deployment

- [ ] Remove any TODO or placeholder text
- [ ] Update footer copyright year (auto-updates)
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run start`
- [ ] Create GitHub repository
- [ ] Push code to GitHub

## Deployment

- [ ] Create Vercel account
- [ ] Import repository to Vercel
- [ ] Verify site deploys successfully
- [ ] Test live site
- [ ] Set up custom domain (optional)

## Optional Enhancements

- [ ] Customize colors in `tailwind.config.ts`
- [ ] Add Google Analytics
- [ ] Add more pages (blog, resources, etc.)
- [ ] Add CV/Resume download
- [ ] Add contact form

## Maintenance

- [ ] Update news regularly
- [ ] Add new publications as they're released
- [ ] Keep hiring information current
- [ ] Update course information each semester

---

**Pro Tip:** You don't need to complete everything before deploying! Start with the essentials and add more content over time. Your site will auto-update when you push to GitHub.

## Quick Test

Run these commands to verify everything works:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

If all three commands succeed, you're ready to deploy! 🚀

