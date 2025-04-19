# Project Architecture

This document outlines the architecture and structure of the Professional Portfolio web application.

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router
- **Animation**: Framer Motion
- **Deployment**: GitHub Pages
- **Icons**: Lucide React

## Project Structure

```
├── docs/                  # Documentation
│   ├── DEPLOYMENT.md      # Deployment instructions
│   └── ARCHITECTURE.md    # This architecture document
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── layout/        # Layout components
│   │   │   ├── Footer.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   └── ui/           # Reusable UI elements
│   │       ├── FilterButton.tsx
│   │       ├── ScrollToTop.tsx
│   │       ├── SearchBar.tsx
│   │       └── SectionHeading.tsx
│   ├── data/             # Static data for the portfolio
│   │   ├── certificationsData.ts
│   │   ├── educationData.ts
│   │   ├── projectsData.ts
│   │   └── skillsData.ts
│   ├── hooks/            # Custom React hooks
│   │   └── usePortfolioSync.ts
│   ├── pages/            # Page components
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── services/         # External service integrations
│   │   ├── github.ts
│   │   ├── linkedin.ts
│   │   └── sync.ts
│   ├── types/            # TypeScript type definitions
│   │   └── portfolio.ts
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global CSS
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite type declarations
├── .eslintrc.cjs         # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Key Components

### Layout

The application uses a consistent layout defined in `Layout.tsx`, which includes:
- A navigation bar (`Navbar.tsx`)
- The main content area (rendered via `props.children`)
- A footer (`Footer.tsx`)

### Pages

Each page component corresponds to a different section of the portfolio:
- `Home.tsx`: Landing page with introduction and overview
- `Projects.tsx`: Portfolio projects showcase
- `Skills.tsx`: Technical skills and competencies
- `Education.tsx`: Educational background
- `Certifications.tsx`: Professional certifications

### Data Management

Portfolio data is primarily stored in the `/data` directory as TypeScript files. The application also includes service integrations with external platforms (GitHub, LinkedIn) through the `/services` directory.

### Routing

The application uses React Router for client-side routing, with routes defined in `App.tsx`.

### Deployment

The application is configured for deployment to GitHub Pages. See `DEPLOYMENT.md` for details.

## Development Workflow

1. Make changes to the source code
2. Test locally with `npm run dev`
3. Build for production with `npm run build`
4. Deploy to GitHub Pages with `npm run deploy`