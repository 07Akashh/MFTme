# ArtVerse - NFT Marketplace Landing Page

A modern, responsive NFT marketplace landing page built with React, Vite, and Tailwind CSS. This project features pixel-perfect UI replication with a focus on aesthetics, responsiveness, and user experience.

## 🎨 Features

### Part 1: Exact UI Replication

- **Pixel-accurate layout** matching the Figma design
- **Correct typography, spacing, and colors** using a global CSS theme system
- **Proper hierarchy and alignment** throughout all components
- **Clean, readable code structure** with modular components

### Part 2: Full Responsiveness

The application is fully responsive across all devices:

- ✅ **Desktop** (1920px+)
- ✅ **Laptop** (1024px - 1919px)
- ✅ **Tablet** (768px - 1023px)
- ✅ **Mobile** (320px - 767px)

**Responsive Features:**

- Adaptive layout reflow
- Typography scaling
- Spacing adjustments
- Section stacking logic
- Mobile-first navigation with hamburger menu
- Touch-friendly interactions

### Part 3: Additional Pages

Beyond the landing page, the project includes:

1. **About Page** - Company mission, values, team, and statistics
2. **Features Page** - Platform capabilities, technical features, and comparison table

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

## 🎨 Design System

### Color Palette (Global CSS Variables)

```css
--color-primary: #8B5CF6        /* Purple */
--color-secondary: #A78BFA      /* Light Purple */
--color-accent: #EC4899         /* Pink accent */
--color-background: #000000     /* Pure Black */
--color-surface: #0A0A0A        /* Surface */
--color-text-primary: #FFFFFF   /* White */
--color-text-secondary: #A0A0A0 /* Gray */
```

### Typography

- **Font Family:** Inter (Google Fonts)
- **Responsive scaling** using Tailwind's responsive classes
- **Proper hierarchy** with h1-h4 and paragraph styles

### Components

- **Gradient Text** - Purple to pink gradient
- **Glow Effects** - Animated purple glow
- **Card Surface** - Elevated cards with hover effects
- **Buttons** - Primary gradient and outline variants

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   └── Footer.jsx          # Footer with links and social media
├── pages/
│   ├── LandingPage.jsx     # Main landing page
│   ├── AboutPage.jsx       # About page
│   └── FeaturesPage.jsx    # Features page
├── App.jsx                 # Main app with routing
├── main.jsx               # Entry point
└── index.css              # Global styles and theme
```

## 🛠️ Installation & Setup

1. **Clone the repository** (if applicable)

   ```bash
   cd /Users/rahul/Desktop/untitled
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Pages

### Landing Page (`/`)

- Hero section with animated gradient background
- Featured artwork showcase
- Masonry-style gallery grid
- Featured creators section
- Call-to-action section

### About Page (`/about`)

- Company overview
- Statistics dashboard
- Mission statement
- Core values
- Team profiles
- Community CTA

### Features Page (`/features`)

- Main feature highlights
- Creator-specific features
- Collector-specific features
- Technical capabilities
- Comparison table
- Platform CTA

## 📱 Responsive Breakpoints

```css
Mobile:  < 640px
Tablet:  640px - 1023px
Desktop: 1024px+
```

## 🎯 Key Highlights

1. **Black Background Theme** - All sections use pure black (#000000) background as requested
2. **Global CSS Theme** - All colors managed through CSS variables for easy theming
3. **Smooth Animations** - Glow effects, hover states, and transitions
4. **Accessible** - Semantic HTML and ARIA labels
5. **Performance** - Optimized images and lazy loading ready
6. **SEO Ready** - Proper heading hierarchy and meta tags support

## 🎨 Custom Utility Classes

- `.gradient-text` - Purple to pink gradient text
- `.gradient-bg` - Purple to pink gradient background
- `.glow-effect` - Subtle purple glow
- `.glow-effect-strong` - Strong purple glow
- `.card-surface` - Elevated card with hover effect
- `.btn-primary` - Primary gradient button
- `.btn-outline` - Outline button

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #8b5cf6;
  --color-secondary: #a78bfa;
  /* ... other colors */
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 📝 Notes

- **Removed Elements:** Store, Games, and Connect Wallet buttons as requested
- **Image Placeholders:** Using Unsplash and Pravatar for demo images
- **Mobile Menu:** Fully functional hamburger menu for mobile devices
- **Hover Effects:** Rich interactions on cards, buttons, and images

## 🚀 Performance

- Vite's lightning-fast HMR (Hot Module Replacement)
- Optimized bundle size with tree-shaking
- Lazy loading ready for images
- Minimal CSS with Tailwind's purge

## 📄 License

This project is created for demonstration purposes.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
