# Sky High Holidays - Project Memory

## 1. Project Overview
A premium, modern, high-converting travel website built with React, Vite, TypeScript, Tailwind CSS v4, and Framer Motion. The design follows a strict luxury aesthetic with glassmorphism, soft shadows, rounded corners, and a specific color palette.

## 2. Tech Stack & Dependencies
- **Core**: React 18, React Router DOM, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, PostCSS, Autoprefixer, clsx, tailwind-merge, class-variance-authority
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod, @hookform/resolvers
- **UI Primitives**: Radix UI (Accordion, Tabs, Dialog)
- **Carousels**: Custom implementation with Framer Motion
- **HTTP**: Axios

## 3. Design System
- **Colors**:
  - Primary Blue: `#0B2C3F`
  - Dark Navy / Black: `#020617`
  - Accent Orange: `#FF7A00`
  - Light Gray Background: `#F3F4F6`
  - White: `#FFFFFF`
- **Typography**: Poppins (Headings), Inter (Body)

## 4. Current Status
- **PROJECT FULLY COMPLETED**.
- All pages (Home, Destinations, Detail, Design System) implemented with full interactivity.
- 100% Mobile Responsive with custom mobile-only features (e.g., sticky bottom CTA on detail pages).
- Complex animations (scroll reveals, counters, infinite marquees) integrated.
- Design tokens defined in `src/styles/index.css`.
- Dev server running on http://localhost:5173.

## 5. Implementation Details
- **Architecture**: Component-based modular structure.
  - `src/components/ui/`: Atomic UI elements (Buttons, Inputs, Badges).
  - `src/components/sections/`: High-level page sections for composition.
  - `src/pages/`: Main route views.
  - `src/lib/constants.ts`: Centralized data and asset URLs.
- **Routing**: React Router v6 with scroll-to-top behavior.
- **State**: Zustand store for global UI states (Mobile menu, Promo banner).

## 6. How to Resume / Setup
1. Clone the repository and navigate to `c:\Lenodel Labs\Sky high holidays\Wed dev`.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the development server at http://localhost:5173.
4. For production build, run `npm run build`.

## 7. Pending Work
- None. All requested features from the brief have been implemented, optimized, and verified.
