# Anshuman Khare — Personal Site

Built with Next.js 15 + MDX. Deployed on Vercel.

---

## First-time setup (do this once)

```bash
# 1. Clone your repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
# → Open http://localhost:3000
```

That's it. Vercel auto-deploys on every push to main.

---

## Writing a new article (what you do every time)

**1. Create a new file:**
```
content/articles/your-article-slug.mdx
```

**2. Add frontmatter at the top:**
```mdx
---
title: "Your Article Title"
excerpt: "One sentence that appears in the article list and SEO."
date: "2026-03-01"
tag: "Performance"
status: "published"
---

Your article content here in plain Markdown...
```

**3. Use interactive components anywhere in the article:**
```mdx
<RatioCalculator />
<ROASTimeline />
<MetricFilter />
<CohortVisualiser />
```

**4. Push to GitHub:**
```bash
git add .
git commit -m "Add: your article title"
git push
```

Vercel builds and deploys automatically. Live in ~60 seconds.

---

## Available tags
Use one of these in your frontmatter `tag` field:
- `Performance`
- `Acquisition`
- `Lifecycle`
- `Strategy`

---

## Building a new interactive component

When you want a new interactive element (e.g. a new chart or calculator):

1. Create `components/articles/YourComponent.tsx`
2. Add `'use client'` at the top
3. Import it in `app/writing/[slug]/page.tsx` under `MDX_COMPONENTS`
4. Use it in any MDX file as `<YourComponent />`

---

## Folder structure

```
content/articles/     ← Your MDX files live here (one per article)
components/articles/  ← Interactive React components for articles
app/
  page.tsx            ← Homepage
  writing/page.tsx    ← Writing index
  writing/[slug]/     ← Auto-generated article pages
lib/articles.ts       ← Reads and parses MDX files (don't touch)
```
