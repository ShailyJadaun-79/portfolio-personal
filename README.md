# Shaily Jadaun - Professional Data Analytics & UI/UX Portfolio

A modern, minimalist, light-themed responsive portfolio website showcasing expertise in **Data Analytics**, **Interactive Dashboarding (Power BI & Excel)**, and **UI/UX Design**. Built using React, Vite, and Tailwind CSS.

---

## 🎨 Design Philosophy
- **Minimalist Light Palette**: Soft whites (`#FAFAFA`), subtle cool grays (`#F1F5F9`), and professional slate-blue/classic blue accents (`#2563EB`). No high-contrast dark modes or neon elements.
- **Micro-Interactions**: Gentle scroll behaviors, elegant scale-up transitions on hover, and smooth navigation animations.
- **Typography**: Clean heading pairings with **Outfit** and read-friendly **Inter** font family.

---

## 🛠️ Tech Stack & Features
- **Frontend Core**: [React (Vite)](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom variables theme configuration
- **Contact Handling**: [EmailJS](https://www.emailjs.com) for secure client-side form submission to Gmail
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, Simple Icons)
- **SEO & Responsiveness**: Mobile-first responsive layouts, structured HTML hierarchy, metadata tags, and semantic layout tags.

---

## 📂 Project Structure
```text
Portfolio1/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky responsive navigation with hamburger panel
│   │   ├── Hero.jsx        # Data-focused professional profile introduction
│   │   ├── Skills.jsx      # Categorized skills grid (Analytics, Front-End, Tools)
│   │   ├── Projects.jsx    # Featured dashboards showcases with category filtering
│   │   ├── Education.jsx   # Timeline of academic degrees and certifications
│   │   └── Contact.jsx     # EmailJS-integrated contact form & direct social handles
│   ├── App.jsx             # App layout assembly
│   ├── main.jsx            # React root mount
│   └── index.css           # Tailwind v4 import directives and micro-animations
├── index.html              # Main HTML frame containing typography and SEO tags
├── tailwind.config.js      # Layout customization rules
├── postcss.config.js       # PostCSS compiler rules (for Tailwind v4 plugin compilation)
├── .env                    # Local environment variables containing EmailJS IDs (gitignored)
└── .gitignore              # Ignored builds, modules, logs, and sensitive keys
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio on your local machine:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Portfolio1
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a file named `.env` in the root of the project:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 5. Build for Production
To build optimization assets for deployment:
```bash
npm run build
```
This produces production-ready bundles inside the `dist/` directory.

---

## 🔒 Security
Sensitive credentials (such as service IDs, template IDs, and API keys) are handled securely through `.env` configurations. The `.gitignore` file is customized to ensure no local environment variables are uploaded to version control.
