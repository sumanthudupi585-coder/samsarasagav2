# Samsara Saga Style Guide

This document serves as a comprehensive reference for the UI/UX design system of Samsara Saga, ensuring visual and interactive consistency across the entire game.

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Layout & Spacing](#layout--spacing)
4. [Components](#components)
5. [Animations](#animations)
6. [Responsive Design](#responsive-design)
7. [Accessibility](#accessibility)

## Color Palette

### Base Colors
- `--color-bg-dark: #121212;` - Primary background color
- `--color-bg-light: #1e1e1e;` - Secondary background color
- `--color-stone-dark: #1a1a1a;` - Tertiary background color
- `--color-stone-light: #2a2a2a;` - Quaternary background color

### Accent Colors
- `--color-bronze: #a97142;` - Primary accent color
- `--color-bronze-glow: #e09658;` - Highlighted accent color
- `--color-gold: #d4af37;` - Secondary accent color
- `--color-silver: #c0c0c0;` - Tertiary accent color

### Text Colors
- `--color-text: #e0e0e0;` - Primary text color
- `--color-text-muted: #8a8a8a;` - Secondary text color

### Guna Colors
- `--color-sattva: #64b5f6;` - Blue - Harmony, clarity
- `--color-rajas: #ff7043;` - Orange-Red - Activity, passion
- `--color-tamas: #7e57c2;` - Purple - Inertia, stability

### Gana Colors
- `--color-deva: #66bb6a;` - Green - Divine
- `--color-manushya: #ffb74d;` - Amber - Human
- `--color-rakshasa: #e57373;` - Red - Demon

### Element Colors
- `--color-earth: #8d6e63;` - Earth element
- `--color-water: #4fc3f7;` - Water element
- `--color-fire: #ff5722;` - Fire element
- `--color-air: #b2dfdb;` - Air element
- `--color-ether: #b39ddb;` - Ether element

## Typography

### Fonts
- `--font-title: 'Allura', cursive;` - For headings and titles
- `--font-body: 'Kurale', serif;` - For body text

### Text Sizes
- Headings: `clamp(3rem, 10vw, 5rem)` - Responsive sizing for headings
- Subheadings: `clamp(1.5rem, 5vw, 2.5rem)` - Responsive sizing for subheadings
- Body text: `clamp(1rem, 2vw, 1.2rem)` - Responsive sizing for body text
- Small text: `clamp(0.8rem, 1.5vw, 0.9rem)` - Responsive sizing for small text

### Text Styles
- Title: `font-family: var(--font-title); font-weight: 400; letter-spacing: 0.05em;`
- Body: `font-family: var(--font-body); line-height: 1.8;`
- Highlight: `color: var(--color-bronze-glow); font-weight: bold;`
- Muted: `color: var(--color-text-muted); font-style: italic;`

## Layout & Spacing

### Containers
- Standard padding: `2rem`
- Card padding: `2.5rem`
- Border radius: `10px`
- Section margin-bottom: `2rem`
- Section padding-bottom: `1.5rem`

### Grids
- Grid gap: `1rem`
- 2-column grid: `grid-template-columns: repeat(2, 1fr);`
- 3-column grid: `grid-template-columns: repeat(3, 1fr);`
- 4-column grid: `grid-template-columns: repeat(4, 1fr);`

### Navigation
- Nav height: `60px`
- Nav padding: `1rem`
- Icon size: `1.2rem`
- Icon margin-bottom: `0.25rem`

## Components

### Buttons
All buttons share these base styles:
```css
button {
  background: transparent;
  border: 1px solid var(--color-bronze);
  color: var(--color-text);
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  cursor: pointer;
  margin: 0.5rem 0;
}

button:hover {
  background-color: rgba(224, 150, 88, 0.1);
  box-shadow: 0 0 25px 8px rgba(224, 150, 88, 0.15);
  transform: translateY(-3px);
}
```

#### Button Variants
- Primary Button: Filled background with dark text
- Icon Button: Button with icon on the left
- Choice Button: Button with icon and descriptive text

### Cards
```css
.card {
  background-color: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-bronze);
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 0 30px rgba(169, 113, 66, 0.2);
}
```

### Navigation Bar
```css
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  z-index: 50;
  border-bottom: 1px solid var(--color-bronze);
  height: 60px;
}
```

### Modals
```css
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: var(--color-stone-dark);
  border: 1px solid var(--color-bronze);
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}
```

### Notifications
```css
.notification {
  background-color: rgba(26, 26, 26, 0.9);
  border-left: 3px solid var(--color-bronze);
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
```

## Animations

### Transition Timing
- `--transition-fast: 0.2s ease;` - For small UI elements
- `--transition-normal: 0.3s ease;` - For standard transitions
- `--transition-slow: 0.5s ease;` - For larger animations

### Standard Animations
- Fade In: `animation: fadeIn 1s ease-out;`
- Fade In Up: `animation: fadeInUp 0.8s ease-out;`
- Pulse: `animation: pulse 2s infinite;`
- Glow: `animation: glow 2s infinite;`

### Page Transitions
The page transition effect uses a full-screen overlay with a mandala animation:
```css
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-stone-dark);
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s;
}

.page-transition.active {
  opacity: 1;
  visibility: visible;
}
```

## Responsive Design

### Breakpoints
- Mobile: `@media (max-width: 480px)`
- Tablet: `@media (max-width: 768px)`
- Desktop: `@media (min-width: 769px)`

### Responsive Adjustments
- Container padding reduces to `1.5rem` on mobile
- Grid columns collapse to single column on mobile
- Font sizes adjust using `clamp()` function
- Navigation title reduces in size
- Touch-specific styles for mobile devices

## Accessibility

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Color Contrast
All text colors maintain at least a 4.5:1 contrast ratio against their backgrounds.

### Input Methods
- Custom cursor only appears on devices with fine pointer control
- Touch targets are at least 44px × 44px on mobile devices
- Hover states have equivalent focus states for keyboard navigation

---

This style guide should be referenced when making any changes to the UI/UX of Samsara Saga to maintain visual and interactive consistency across the entire game.