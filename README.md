# ACM Website

A modern, responsive website for the Association for Computing Machinery built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Modern UI Components**: Built with shadcn/ui for consistent and accessible components
- **Smooth Animations**: Interactive animations using Framer Motion and Lenis smooth scrolling
- **Fast Performance**: Vite for lightning-fast development and optimized production builds
- **Type-Safe**: Full TypeScript support for better code quality and developer experience
- **Dark Mode Support**: Theme switching with next-themes
- **Form Validation**: Robust form handling with React Hook Form and Zod validation
- **Particle Effects**: Engaging particle background animations

## 🛠️ Tech Stack

### Frontend Framework
- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite**: Next generation frontend tooling

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality accessible components
- **Framer Motion**: Production-ready animation library
- **Lucide React**: Beautiful icon library

### Routing & Navigation
- **React Router v6**: Client-side routing
- **Lenis**: Smooth scrolling library

### Forms & Validation
- **React Hook Form**: Flexible form library
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolvers

### Additional Libraries
- **TanStack React Query**: Data fetching and caching
- **Sonner**: Toast notifications
- **next-themes**: Theme management
- **Recharts**: Composable charting library

## 📋 Prerequisites

- **Node.js**: v16 or higher
- **npm** or **yarn**: Package manager

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd ACM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot module replacement |
| `npm run build` | Build the application for production |
| `npm run build:dev` | Build for development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── About.tsx           # About section
│   ├── Domains.tsx         # Domains/Focus areas
│   ├── Events.tsx          # Events section
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero/Landing section with particles
│   ├── Join.tsx            # Join/CTA section
│   ├── Navbar.tsx          # Navigation bar
│   ├── NavLink.tsx         # Navigation link component
│   ├── Particles.tsx       # Particle animation background
│   ├── Team.tsx            # Team section
│   └── ui/                 # shadcn/ui components
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── tabs.tsx
│       ├── toast.tsx
│       └── ... (40+ more UI components)
│
├── hooks/                   # Custom React hooks
│   ├── use-mobile.tsx      # Mobile device detection
│   ├── use-toast.ts        # Toast notifications
│   └── useSmoothScroll.ts  # Smooth scrolling behavior
│
├── lib/                     # Utility functions
│   └── utils.ts            # Helper functions and constants
│
├── pages/                   # Page components
│   ├── Index.tsx           # Home page
│   └── NotFound.tsx        # 404 error page
│
├── App.tsx                  # Root App component
├── App.css                  # App-specific styles
├── main.tsx                 # Application entry point
├── index.css                # Global CSS
└── vite-env.d.ts           # Vite environment types
```

## 🎨 Key Components

### Page Sections
- **Hero**: Eye-catching landing section with particle effects and smooth animations
- **About**: Detailed information about the organization
- **Domains**: Focus areas, specializations, and research domains
- **Events**: Showcase of upcoming and past events
- **Team**: Team members and leadership showcase
- **Join**: Call-to-action section for joining the organization
- **Navigation**: Responsive navbar with smooth scrolling
- **Footer**: Footer with links and information

### UI Component Library
Comprehensive set of 40+ shadcn/ui components:
- **Form Controls**: Input, Checkbox, Radio, Select, Textarea, Toggle
- **Data Display**: Table, Card, Accordion, Tabs, Badge
- **Feedback**: Toast, Alert, Alert Dialog, Progress
- **Navigation**: Navbar, Dropdown Menu, Navigation Menu, Breadcrumb
- **Modals**: Dialog, Drawer, Sheet, Popover, Hover Card
- **Layout**: Sidebar, Resizable Panels, Separator, Scroll Area
- **Others**: Calendar, Carousel, Command Palette, Context Menu, Slider

## 💻 Development Workflow

### Code Quality
- **ESLint**: Automatic code quality checks with Next.js/React rules
- **TypeScript**: Type safety and better IDE support for React and DOM APIs

### Styling
- Tailwind CSS utility classes for rapid UI development
- Global styles in `index.css` and `App.css`
- Dark mode support via next-themes
- CSS animations with tailwindcss-animate

### Component Development Best Practices
- Use shadcn/ui components as building blocks for consistency
- Create reusable custom components in the `/components` directory
- Utilize custom hooks from `/hooks` for shared logic
- Follow React hooks guidelines and best practices
- Keep components focused and single-responsibility

### Path Aliases
- `@` alias points to `/src` directory for cleaner imports

## 🏗️ Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory with:
- Code splitting and minification
- Tree-shaking of unused code
- CSS minification
- Asset optimization

Preview the production build locally:
```bash
npm run preview
```

## 🌍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)
- Responsive design for all screen sizes from 320px and up

## ⚡ Performance Optimizations

- **Vite**: Fast HMR (Hot Module Replacement) in development
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Route-based lazy loading with React Router
- **Image Optimization**: Optimized image loading and caching
- **CSS**: Tailwind CSS purging unused styles in production
- **Tree Shaking**: Automatic removal of unused code with Vite

## 🔧 Customization

### Tailwind CSS
Customize the design system by editing `tailwind.config.ts`:
- Theme colors, typography, spacing
- Extended utilities and components

### Themes
Theme switching is configured in the App component using `next-themes`:
- Light mode (default)
- Dark mode
- System preference detection

### ESLint Configuration
Code quality rules are defined in `eslint.config.js` using:
- TypeScript ESLint parser
- React and React Hooks rules
- Refresh rules for Vite hot module replacement

## 👥 Contributing

Contributions are welcome! Please follow these guidelines:

1. Use TypeScript for type safety and better IDE support
2. Follow Tailwind CSS conventions for styling
3. Keep components small, focused, and reusable
4. Add proper JSDoc comments for complex components
5. Ensure code passes ESLint checks: `npm run lint`
6. Test changes thoroughly before submitting
7. Use meaningful commit messages

## 📞 Contact & Support

For questions or support:
- Check existing documentation in this README
- Review component implementations in `/src/components`
- Examine shadcn/ui documentation for UI component details
- Refer to official library documentation (React, TypeScript, Tailwind CSS)

## 🔗 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Hook Form Guide](https://react-hook-form.com/)

## 📄 License

[Add your license information here]

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com) components
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Powered by [Vite](https://vitejs.dev) and [React](https://react.dev)
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
