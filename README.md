# Akhilesh Bisht — Portfolio Website

A clean, professional, SaaS-style portfolio website built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build step. It showcases my projects, skills, education, and ways to get in touch.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](#)
🔗 **[Live Demo →](portfolio-akhileshbisht.netlify.app)**

---

## ✨ Features

| Feature | Description |
| --- | --- |
| **Typewriter Hero** | The headline types itself out word by word, pauses, then rewrites in a loop (auto-disabled for `prefers-reduced-motion` users). |
| **Fully Responsive** | Mobile-first breakpoints at 1024 px, 900 px, 640 px, and 400 px with a hamburger mobile menu. |
| **Active Nav Highlighting** | The current section is tracked via `IntersectionObserver`. |
| **Smooth Scrolling** | Navbar links land exactly below the sticky header. |
| **Scroll Reveal Animations** | Content fades/slides in as you scroll down the page. |
| **Animated Hover Effects** | Project cards lift with image zoom + gradient overlay; skill tags fill on hover. |
| **Working Contact Form** | Powered by [Web3Forms](https://web3forms.com) — messages arrive straight in the inbox. |
| **Back-to-Top Button** | Appears after scrolling down; smooth-scrolls back to the top. |
| **Accessibility** | Semantic HTML, skip link, ARIA labels, keyboard-friendly, `prefers-reduced-motion` support. |

---

## 🚀 Sections

| Section | Content |
| --- | --- |
| **Home** | Typewriter tagline, profile photo, social links, CTAs |
| **About** | Bio + Core Strengths checklist + Download Resume |
| **Work** | Featured projects with live demo & GitHub links |
| **Skills** | Frontend / Learning / Tools / AI Tools cards |
| **Education** | Timeline (BCA, BA, schooling) + certification |
| **Contact** | Email / Phone / Location cards, message form, social links |

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Markup** | Semantic HTML5 |
| **Styling** | CSS3 — custom design tokens (CSS variables), CSS Grid & Flexbox |
| **JavaScript** | Vanilla ES6+ — DOM APIs, `IntersectionObserver`, `async/await` |
| **Fonts** | [Poppins](https://fonts.google.com/specimen/Poppins) (headings) + [Open Sans](https://fonts.google.com/specimen/Open+Sans) (body) |
| **Form Backend** | [Web3Forms](https://web3forms.com) |

---

## 📁 Project Structure

```
.
├── index.html                  # Main portfolio markup
├── style.css                   # Design tokens + all styles (responsive included)
├── script.js                   # Interactivity (menu, typewriter, reveals, form, etc.)
├── resume.pdf                  # Downloadable resume (root copy)
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

No build tools or dependencies needed — just open it in a browser.

1. **Clone the repo:**

   ```bash
   git clone https://github.com/akhileshbisht79/Portfolio.git
   cd Portfolio
   ```

2. **Open `index.html`:**

   ```bash
   # Windows
   start index.html

   # macOS / Linux
   open index.html
   ```

3. **Or use a local dev server** for a more production-like experience:

   ```bash
   npx -y serve .
   ```

---

## ☁️ Deployment

The site is fully static and deploys anywhere.

| Platform | Setup |
| --- | --- |
| **Netlify** | Connect your repo → build command: *(none)* → publish directory: `/` |
| **GitHub Pages** | Push to `main` → enable Pages from the repo root |
| **Vercel** | Import repo → framework preset: *Other* → output: `/` |

> [!NOTE]
> The contact form requires a **Web3Forms access key**. Get a free key at [web3forms.com](https://web3forms.com) and replace the value of `access_key` in `script.js`.

---

## 🧩 Customization

| What | Where |
| --- | --- |
| **Colors** | Edit the CSS variables at the top of `style.css` (`--primary`, `--secondary`, `--accent`, etc.) |
| **Tagline words** | Edit the `allWords` string in `script.js` |
| **Projects** | Update the `.project-card` blocks in `index.html` |
| **Social links** | Update the URLs in the hero socials, contact options, and social cards |

---

## 📞 Contact

| Channel | Link |
| --- | --- |
| 📧 Email | [bishtakhilesh79@gmail.com](mailto:bishtakhilesh79@gmail.com) |
| 💼 LinkedIn | [akhileshbishtt](https://www.linkedin.com/in/akhileshbishtt) |
| 🐙 GitHub | [akhileshbisht79](https://github.com/akhileshbisht79) |
| 📸 Instagram | [@akhlsxh](https://www.instagram.com/akhlsxh) |
| 💬 WhatsApp | [Chat with me](https://wa.me/917248449141) |

---

## 👨‍💻 Author

**Akhilesh Bisht** — Frontend Developer from Uttarakhand, India.  
Currently leveling up toward full stack development.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open for personal use. Feel free to use it as a template for your own portfolio — attribution is appreciated.
