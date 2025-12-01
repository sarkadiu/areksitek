# Customization Guide

This guide will help you personalize your academic website.

## Step 1: Personal Information

Edit `data/personal.ts`:

```typescript
export const personalInfo = {
  name: "Your Full Name",                    // Change this
  title: "Your Title at Your Institution",   // Change this
  affiliation: "Your affiliations...",        // Change this
  email: "your.email@institution.edu",        // Change this
  office: "Room Number",                      // Change this
  address: {
    line1: "Your Street Address",             // Change this
    line2: "City, State ZIP"                  // Change this
  },
  photo: "/headshot.jpg",                     // Add your photo to public/
  bio: [
    "First paragraph of your bio...",         // Change this
    "Second paragraph...",                    // Change this
    "Third paragraph..."                      // Change this
  ],
  announcement: "Hiring announcements..."     // Change or remove this
};
```

## Step 2: Add Your Photo

1. Take or select a professional headshot
2. Save it as `headshot.jpg` in the `public/` folder
3. Recommended size: 400x400 pixels or larger, square aspect ratio

## Step 3: Update News

Edit `data/news.ts`:

```typescript
export const newsItems: NewsItem[] = [
  {
    date: "Dec 1, 2025",                     // Change date
    content: `Your news content here...`      // Add your news
  },
  // Add more news items...
];
```

**Tips:**
- Most recent news first
- Use HTML for formatting: `<a href="#">link</a>`, `<em>emphasis</em>`, `<strong>bold</strong>`
- Emojis are optional but add visual interest

## Step 4: Add Publications

Edit `data/publications.ts`:

```typescript
export const publications: PublicationsByYear = {
  "2025": [
    {
      title: "Your Paper Title",
      authors: "Author1, Author2, Your Name, Author3",
      venue: "Conference/Journal Name, Year",
      pdf: "https://link-to-pdf.com",          // Optional
      code: "https://github.com/...",          // Optional
      website: "https://project-site.com",     // Optional
      video: "https://youtube.com/...",        // Optional
      image: "/papers/paper1.png"              // Optional thumbnail
    },
    // Add more papers...
  ],
  "2024": [
    // Add papers from 2024...
  ],
};
```

**For paper thumbnails:**
1. Create visualizations or use figures from your papers
2. Save as PNG or JPG in `public/papers/`
3. Recommended size: 400x300 pixels
4. Name them: paper1.png, paper2.png, etc.

## Step 5: Customize Lab Page

Edit `app/lab/page.tsx`:

- List your research areas
- Add lab members (students, postdocs, collaborators)
- Describe your lab's mission

## Step 6: Update Hiring Page

Edit `app/hiring/page.tsx`:

- Specify if you're hiring (PhD, postdocs, undergrads)
- List requirements and expectations
- Add application instructions

## Step 7: Add Teaching Information

Edit `app/teaching/page.tsx`:

- List current and past courses
- Add course websites
- Include your teaching philosophy

## Step 8: Add Talks & Podcasts

Edit `app/talks/page.tsx`:

- List invited talks with slides/videos
- Add podcast appearances
- Link to tutorials

## Step 9: Customize Colors (Optional)

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#2563eb",      // Change to your preferred color
  secondary: "#64748b",    // Change secondary color
}
```

Popular academic color schemes:
- Blue: `#2563eb` (default)
- Navy: `#1e3a8a`
- Teal: `#0d9488`
- Purple: `#7c3aed`
- Red: `#dc2626`

## Step 10: Update Navigation (Optional)

Edit `components/Navigation.tsx` to add/remove menu items:

```typescript
const navItems = [
  { name: "about", href: "/" },
  { name: "lab", href: "/lab" },
  // Add or remove items here
];
```

## Step 11: Add Google Scholar Link

In `app/publications/page.tsx`, update the Google Scholar link:

```typescript
<a href="https://scholar.google.com/citations?user=YOUR_ID" className="text-primary">
  Google Scholar profile
</a>
```

## Step 12: Update Footer (Optional)

Edit `components/Footer.tsx` to customize copyright text.

## Testing Your Changes

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Check all pages:
   - Homepage
   - Lab
   - Hiring
   - Teaching
   - Talks
   - Publications

4. Test on mobile (resize browser window or use dev tools)

## Common Issues

### Images not showing?
- Check file paths are correct
- File names are case-sensitive
- Images must be in `public/` folder

### Broken links?
- Update all `#` placeholders with real URLs
- Use full URLs for external links

### Styling looks off?
- Clear browser cache
- Restart development server
- Check Tailwind classes

## Ready to Deploy?

Once you're happy with your customizations:

1. Build the site:
   ```bash
   npm run build
   ```

2. Test the production build:
   ```bash
   npm run start
   ```

3. Deploy to Vercel (see README.md)

## Need More Help?

- Check the main README.md file
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Vercel docs: https://vercel.com/docs

Happy customizing! 🎉

