# Suraj Joshi — Portfolio

A modern developer portfolio built with **Vite + React**, featuring dark theme, custom cursor, smooth animations, and fully responsive layout.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── data/
│   └── portfolio.js        # ← All your content lives here
├── components/
│   ├── Cursor.jsx / .css   # Custom animated cursor
│   ├── Navbar.jsx / .css
│   ├── ProjectCard.jsx / .css
│   └── Footer.jsx / .css
├── sections/
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Experience.jsx / .css
│   └── Contact.jsx / .css
├── hooks/
│   └── useReveal.js        # Scroll-reveal animation hook
├── styles/
│   └── globals.css         # CSS variables, base styles, utilities
├── App.jsx
└── main.jsx
```

## ✏️ Customizing Content

All content is centralized in **`src/data/portfolio.js`**. Edit that file to update:
- Personal details, email, GitHub, LinkedIn
- Project cards (title, description, tags, links)
- Skills grouped by category
- Experience entries

## 🌐 Deploying

**Vercel** (recommended):
```bash
npm i -g vercel
vercel
```

**Netlify**: drag & drop the `dist/` folder after `npm run build`

**GitHub Pages**: use the `gh-pages` package or GitHub Actions
