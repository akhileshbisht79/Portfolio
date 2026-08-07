# Akhilesh Bisht — Portfolio Website

A clean, professional, SaaS-style portfolio website built with **vanilla HTML, CSS, and JavaScript** (no frameworks, no build step). It showcases my projects, skills, education, and ways to get in touch.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

## ✨ Features

- **Hero section with typewriter tagline** — the headline types itself out word by word, pauses, then rewrites in a loop (auto-disabled for reduced-motion users).
- **Fully responsive** — mobile-first breakpoints at 1024px, 900px, 640px, and 400px with a hamburger mobile menu.
- **Active nav highlighting** — the current section is tracked via `IntersectionObserver`.
- **Smooth scrolling** — navbar links land exactly below the sticky header.
- **Scroll reveal animations** — content fades/slides in as you scroll.
- **Animated hover effects** — project cards lift with image zoom + gradient overlay, skill tags fill on hover.
- **Working contact form** — powered by [Web3Forms](https://web3forms.com), messages arrive straight in my inbox.
- **Back-to-top button** — appears after scrolling down, smooth-scrolls to the top.
- **Accessibility** — semantic HTML, skip link, ARIA labels, keyboard-friendly, `prefers-reduced-motion` support.

---

## 🚀 Sections

| Section | Content |
| --- | --- |
| **Home** | Typewriter tagline, profile photo, social links, CTAs |
| **About** | Bio + Core Strengths checklist + Download Resume |
| **Work** | Featured projects with live demo & GitHub links |
| **Skills** | Frontend / Learning / Tools / AI Tools cards |
| **Education** | Timeline (BCA, BA, schooling) + certification |
| **Contact** | Email/Phone/Location cards, message form, social links |

---

## 🛠️ Tech Stack

- **Markup:** Semantic HTML5
- **Styling:** CSS3 with custom design tokens (CSS variables), CSS Grid & Flexbox
- **JavaScript:** Vanilla ES6+ (DOM APIs, IntersectionObserver, async/await)
- **Fonts:** Poppins (headings) + Open Sans (body)
- **Form Backend:** Web3Forms

---

## 📁 Project Structure

```
├── index.html          # Main portfolio markup
├── style.css           # Design tokens + all styles (responsive included)
├── script.js           # Interactivity (menu, typewriter, reveals, form, etc.)
├── assets/
│   ├── developer.jpg           # Hero profile photo
│   ├── harmony-cover.jpg       # Harmony project cover
│   ├── portfolio-cover.jpg     # Portfolio project cover
│   ├── DSBT-05032602.png       # Certification image
│   └── resume.pdf              # Downloadable resume
└── README.md
```

---

## 🖥️ Running Locally

No build tools or dependencies needed — just open it in a browser:

1. Clone the repo:

   ```bash
   git clone https://github.com/akhileshbisht79/akhileshbisht79.github.io.git
   ```

2. Open the folder and launch `index.html`:

   ```bash
   cd akhileshbisht79.github.io
   start index.html        # Windows
   # or
   open index.html         # macOS / Linux
   ```

   Or use a local server for a more production-like experience:

   ```bash
   npx serve .
   ```

---

## ☁️ Deploying

The site is fully static and deploys anywhere. Recommended: **Netlify** (drag & drop or Git-based).

- **Netlify:** Connect your repo → build command: none → publish directory: root
- **GitHub Pages:** push to `main` and enable Pages from the repo root.

> **Note:** The contact form requires your Web3Forms access key in `script.js`. Get a free key at [web3forms.com](https://web3forms.com) and replace the value of `access_key`.

---

## 🧩 Customization

- **Colors:** Edit the CSS variables at the top of `style.css` (`--primary`, `--secondary`, `--accent`, etc.).
- **Tagline words:** Edit the `allWords` string in `script.js`.
- **Projects:** Update the `.project-card` blocks in `index.html`.
- **Social links:** Update the URLs in the hero socials, contact options, and social cards.

---

## 📞 Contact

- 📧 **Email:** [bishtakhilesh79@gmail.com](mailto:bishtakhilesh79@gmail.com)
- 💼 **LinkedIn:** [akhileshbishtt](https://www.linkedin.com/in/akhileshbishtt)
- 🐙 **GitHub:** [akhileshbisht79](https://github.com/akhileshbisht79)
- 📸 **Instagram:** [@akhlsxh](https://www.instagram.com/akhlsxh)
- 💬 **WhatsApp:** [Chat with me](https://wa.me/917248449141)

---

## 👨‍💻 Author

**Akhilesh Bisht** — Frontend Developer from Uttarakhand, India. Currently leveling up toward full stack development.

---

## 📄 License

This project is for personal use. Feel free to use it as a template for your own portfolio with attribution.
