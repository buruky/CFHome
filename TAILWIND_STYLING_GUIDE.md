# Tailwind Styling Guide for "Always with Compassion Family Home"

This document describes the Tailwind CSS styling patterns, design system, and conventions used in this senior care facility website. Use this guide when making style changes or creating new components.

---

## Project Overview

This is a single-page React application for a senior care facility, featuring smooth scrolling between sections, interactive image carousels, and a responsive navigation system.

---

## Color Palette

### Primary Colors
- **Indigo**: Primary brand color used for buttons, accents, and gradients
  - `indigo-600`: Primary button background
  - `indigo-50`: Light background gradient
  - `indigo-100`: Section backgrounds

### Neutral Colors
- **White**: `white` - Main background, card backgrounds
- **Gray Scale**:
  - `gray-900`: Dark text, navigation text (when scrolled past hero)
  - `gray-800`: Section headings
  - `gray-700`: Body text
  - `gray-600`: Secondary text
  - `gray-400`: Tertiary text (e.g., email labels)
  - `gray-300`: Inactive carousel dots, borders
  - `gray-200`: Borders, dividers

### Background Colors
- **Slate**:
  - `slate-900`: Footer/contact section background

### Transparency & Overlays
- `bg-black/50`: Hero image overlay (50% opacity)
- `bg-black/70`: Image caption overlays
- `bg-black/90`: Fullscreen modal backgrounds
- `bg-white/20`: Navbar background with glassmorphism
- `bg-white/80`: Button hover states with transparency
- `bg-white/90`: Content cards with backdrop blur

---

## Typography

### Font Sizes
- **Headings**:
  - `text-5xl` to `text-7xl`: Main hero heading (responsive)
  - `text-5xl`: Major section headings
  - `text-4xl`: Feature section headings
  - `text-3xl`: Sub-feature headings
  - `text-2xl`: Hero subheadings, contact info
  - `text-xl`: Supporting text
  - `text-lg`: Body text, descriptions
  - `text-base`: Navigation links

### Font Weights
- `font-bold`: Primary headings
- `font-extrabold`: Feature highlights
- `font-medium`: Image captions

### Text Colors
- `text-white`: Hero section, navbar (when over hero), contact section
- `text-gray-900`: Navbar (scrolled), dark headings
- `text-gray-800`: Section headings
- `text-gray-700`: Body text
- `text-gray-600`: Supporting descriptions
- `text-gray-400`: Secondary contact labels
- `text-gray-300`: Contact section body text

---

## Layout & Spacing

### Container Widths
- `max-w-[1240px]`: Main content container (consistent across all sections)
- `max-w-6xl`: Wide content areas
- `max-w-5xl`: Medium-wide areas (carousels)
- `max-w-4xl`: Medium areas (images)
- `max-w-3xl`: Narrow text content (descriptions)
- `max-w-2xl`: Very narrow text (captions)

### Padding & Margins
- **Sections**: `py-20 px-4` or `py-24 px-4` (vertical padding 20-24, horizontal 4)
- **Cards**: `p-10` for feature cards
- **Navbar**: `px-4 py-3`
- **Hero**: `px-4` on content wrapper
- **Spacing between elements**:
  - `space-y-4`: Vertical spacing in hero content
  - `space-y-2`: Contact info items
  - `space-x-6`: Navbar desktop links
  - `mb-12`: Large bottom margin for section intros
  - `mb-6`: Medium bottom margin
  - `mb-4`: Small bottom margin

---

## Responsive Design

### Breakpoints
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

### Common Responsive Patterns

**Text Sizing**:
```
text-lg sm:text-xl           (logo/brand name)
text-2xl md:text-5xl         (section headings)
text-5xl md:text-7xl         (hero heading)
```

**Grid Layouts**:
```
grid-cols-1 sm:grid-cols-2 md:grid-cols-3   (backyard images)
md:grid-cols-2                               (hero two-column)
```

**Visibility**:
```
hidden md:flex               (desktop navigation)
md:hidden                    (mobile hamburger menu)
hidden sm:inline             (line breaks)
```

**Image Sizing**:
```
w-24 md:w-32 lg:w-40        (logo sizing)
h-10                         (navbar logo)
```

**Text Alignment**:
```
text-center md:text-left     (hero content)
items-center md:items-start  (flex alignment)
```

---

## Component Patterns

### Navbar
- **Position**: `fixed top-0 left-0 w-full z-50`
- **Glassmorphism**: `bg-white/20 backdrop-blur-lg shadow-md`
- **Dynamic color**: Text changes from white to gray-900 when scrolling past hero
- **Transition**: `transition-colors duration-300` on color-changing elements

### Hero Section
- **Full viewport**: `w-full h-screen`
- **Background**: `bg-cover bg-center bg-no-repeat` with inline style for image
- **Overlay**: `bg-black/50` for readability
- **Layout**: Two-column grid on medium+ screens

### Feature Sections

**Alternating Backgrounds**:
- White: `bg-white`
- Light gradient: `bg-gradient-to-br from-blue-100 via-indigo-50 to-white`
- Reverse gradient: `bg-gradient-to-br from-white via-indigo-50 to-white`
- Indigo to white: `bg-gradient-to-br from-indigo-50 to-white`

**Card Styling**:
```
bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-10
```

**Parallax Effect** (FeatureCaregiver):
- Background image with opacity: `opacity-10`
- Transform on scroll: `translateY(scrollY * 0.2)px`
- Transition: `transition-transform duration-300 ease-out`

### Image Carousels

**Container**:
```
relative max-w-5xl mx-auto
```

**Image**:
```
w-full h-[28rem] object-cover object-center rounded-2xl shadow-xl
```

**Navigation Buttons**:
```
absolute top-1/2 left-4 transform -translate-y-1/2
bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur
```

**Dots/Indicators**:
```
absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2
h-2 w-2 rounded-full
bg-indigo-600 (active) or bg-gray-400 (inactive)
```

**Fullscreen Modal**:
```
fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center
```

### Image Grid (Backyard)
```
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
w-full h-64 object-cover rounded-lg shadow
cursor-pointer hover:scale-105 transition-transform duration-300
```

### Buttons
**Default (from index.css)**:
```
text-white border bg-indigo-600 border-indigo-600
hover:bg-transparent hover:text-indigo-600 rounded-md
```

**Carousel Buttons**:
```
bg-white/80 hover:bg-white text-gray-800 rounded-full
```

**Close Button**:
```
text-white text-3xl font-bold
```

### Contact Section
- **Background**: `bg-slate-900 text-gray-300`
- **Spacing**: `my-32` (large vertical margin)
- **Layout**: Centered with `text-center`
- **Info styling**: Bold white labels with gray-400/gray-300 text

---

## Effects & Interactions

### Transitions
- **Colors**: `transition-colors duration-300` (navbar, text color changes)
- **Transform**: `transition-transform duration-300` (hover effects, parallax)
- **General**: `transition duration-500 ease-in-out` (carousel images)
- **Opacity**: `transition-opacity duration-500` (fullscreen images)

### Hover States
- `hover:underline`: Navigation links
- `hover:bg-transparent hover:text-indigo-600`: Buttons
- `hover:scale-105`: Backyard images
- `hover:bg-white`: Carousel navigation buttons

### Shadows
- `shadow-md`: Navbar
- `shadow-lg`: Logos, carousel buttons, image overlays
- `shadow-xl`: Feature cards, carousels, fullscreen images
- `drop-shadow-lg`: Hero logo, overlay text

### Borders & Rounding
- `rounded-md`: Buttons
- `rounded-lg`: Small images
- `rounded-xl`: Cards, medium images, feature containers
- `rounded-2xl`: Large carousels
- `rounded-3xl`: Living spaces carousel
- `rounded-full`: Circular images, dots, icon buttons
- `border-4 border-white`: Circular caregiver image
- `border border-gray-200`: Cards and containers

### Special Effects
- **Backdrop blur**: `backdrop-blur-lg` (navbar), `backdrop-blur-md` (cards), `backdrop-blur` (buttons)
- **Gradient fades**: Used at top of feature banner to blend with preceding section
- **Object positioning**: `object-cover object-center` for consistent image cropping

---

## Accessibility & Best Practices

### Semantic Structure
- Section IDs for anchor links: `#home`, `#features`, `#visit`
- `aria-label` on mobile hamburger button
- Alt text on all images

### Smooth Scrolling
- Enabled globally in index.css: `html { scroll-behavior: smooth; }`

### Interactive Elements
- Cursor styles: `cursor-pointer` on clickable images
- Click handlers on overlay backgrounds to close modals
- Keyboard-accessible navigation

---

## Custom CSS (index.css)

### Base Layer
```css
@layer base {
  li {
    @apply p-4;
  }

  button {
    @apply text-white border bg-indigo-600 border-indigo-600
           hover:bg-transparent hover:text-indigo-600 rounded-md;
  }
}
```

### Global Styles
- Smooth scrolling enabled on `<html>`
- Body has zero margin/padding

---

## Design Philosophy

1. **Soft & Welcoming**: Use of gradients, rounded corners, and light color schemes to evoke comfort
2. **Professional Yet Personal**: Clean typography balanced with warm imagery
3. **Accessibility First**: High contrast text, clear navigation, semantic HTML
4. **Mobile Responsive**: All components adapt gracefully from mobile to desktop
5. **Interactive but Subtle**: Hover effects and transitions enhance UX without being distracting
6. **Consistent Spacing**: Max-width containers and padding maintain visual rhythm
7. **Trust & Transparency**: Large images, clear contact info, and detailed descriptions

---

## Common Class Combinations

### Section Header
```
text-5xl font-bold text-gray-800 mb-4 (or mb-6)
```

### Section Description
```
text-lg text-gray-600 max-w-3xl mx-auto mb-12
```

### Centered Content Container
```
max-w-[1240px] mx-auto px-4 text-center
```

### Image with Overlay
```
relative
absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent
```

### Glassmorphism Card
```
bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl
```

---

## Notes for Future Development

- The project uses standard Tailwind with no custom theme extensions (tailwind.config.js is minimal)
- All components are functional React components using hooks (useState, useEffect, useRef)
- Image carousels use controlled state with current index
- Intersection Observer used in NavBar to detect hero section visibility
- Parallax scrolling in FeatureCaregiver uses manual scroll event listener
- No external component libraries - all UI built with native Tailwind utilities
