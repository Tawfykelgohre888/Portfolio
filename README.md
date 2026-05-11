# Tawfik Elgohare — Portfolio

A modern, bold Angular 19 + Tailwind CSS 4 portfolio website.

## ✨ Features
- Typing animation hero with role cycling
- Smooth scroll + active nav highlighting
- Scroll-reveal animations on all sections
- Cursor blob tracking effect
- Animated skills cards + proficiency bars
- Featured project showcase
- Vertical timeline experience section
- Contact form
- Downloadable CV button
- Dark/Light mode toggle

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Angular CLI 19: `npm install -g @angular/cli@19`

### Install & Run
```bash
npm install
ng serve
```
Open http://localhost:4200

### Build for Production
```bash
ng build
```
Output goes to `dist/tawfik-portfolio/browser/`

## 📁 Structure
```
src/
  app/
    components/
      navbar/       — Fixed nav with active section detection
      hero/         — Typing animation, stats, floating chips
      skills/       — Category cards + proficiency bars
      projects/     — Featured + grid layout
      experience/   — Vertical timeline
      education/    — Education + courses cards
      contact/      — Form + social links
  styles.css        — Tailwind 4 + custom animations
  index.html        — Google Fonts (Syne + DM Sans)
```

## 🎨 Customisation

### Add your photo
Replace the `T` avatar in `hero.component.ts` with:
```html
<img src="assets/photo.jpg" class="w-full h-full object-cover rounded-3xl" alt="Tawfik">
```
Place your photo in `public/assets/photo.jpg`

### Add your CV PDF
Copy your CV PDF to `public/assets/Tawfik-Elgohare-CV.pdf`

### Connect the contact form
In `contact.component.ts` → `onSubmit()`, integrate with:
- [EmailJS](https://emailjs.com) (free, no backend)
- [Formspree](https://formspree.io) (free tier)

## 🛠️ Tech Stack
- Angular 19 (Standalone Components, Signals)
- Tailwind CSS 4
- TypeScript 5.6
- Google Fonts: Syne + DM Sans
"# Portfolio" 
