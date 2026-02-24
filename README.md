# DevSpectra - Web Development & Digital Solutions

A modern, cyber-minimalist web development agency website built with React.js and plain CSS.

## 🎨 Design Philosophy

- **Cyber-Minimalist Theme** with neon accents (cyan, purple, pink)
- **Dark Mode First** approach
- **Asymmetric Layouts** with geometric shapes
- **Gradient Borders** and glowing effects
- **Smooth Micro-interactions** and animations
- **Responsive Design** for all devices

## 🚀 Features

- ⚡ Fast and lightweight (React.js only, no UI frameworks)
- 🎨 Custom CSS with CSS variables for easy theming
- 📱 Fully responsive design
- 🔥 Smooth page transitions and animations
- 💫 Interactive hero section with typing effect
- 🎯 Clean, modern navigation with mobile menu
- ✨ Glassmorphism effects and neon glows

## 📦 Installation

1. **Clone or download the project**

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Open your browser:**
   - Navigate to `http://localhost:3000`

## 📁 Project Structure

```
devspectra-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   └── ScrollToTop.jsx
│   │   └── home/
│   │       ├── Hero.jsx
│   │       └── Hero.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Portfolio.jsx
│   │   ├── Portfolio.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Color Palette

```css
/* Primary Colors */
--primary-dark: #0a0e27
--secondary-dark: #151a33
--accent-dark: #1a1f3a

/* Neon Accents */
--neon-cyan: #00fff5
--neon-purple: #a855f7
--neon-pink: #ec4899
--neon-blue: #3b82f6

/* Text Colors */
--text-primary: #e2e8f0
--text-secondary: #94a3b8
--text-muted: #64748b
```

## 🛠️ Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --neon-cyan: #00fff5;  /* Change to your preferred color */
  --neon-purple: #a855f7;
  /* ... more variables */
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Create corresponding CSS file
3. Add route in `src/App.jsx`
4. Add navigation link in `src/components/common/Navbar.jsx`

## 📱 Responsive Breakpoints

- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Laptop: 769px - 1024px
- Desktop: 1025px+

## ✨ Key Components

### Hero Section
- Animated typing effect
- Gradient text effects
- Floating visual elements
- Call-to-action buttons
- Statistics display

### Navbar
- Fixed position with scroll effect
- Active link highlighting
- Mobile hamburger menu
- Smooth transitions

### Footer
- Multi-column layout
- Social media links
- Quick links and services
- Contact information
- Responsive design

## 🎯 Next Steps

To complete the website, you can:

1. **Add More Sections:**
   - Services cards with hover effects
   - Portfolio grid with filters
   - Team member profiles
   - Testimonials carousel
   - Contact form with validation

2. **Enhance Functionality:**
   - Add scroll animations (Intersection Observer)
   - Implement dark/light mode toggle
   - Add loading animations
   - Create back-to-top button

3. **Add Content:**
   - Replace placeholder text
   - Add real images and icons
   - Update contact information
   - Add project showcases

## 📝 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🤝 Contributing

Feel free to customize and extend this template for your own projects!

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using React.js and plain CSS
