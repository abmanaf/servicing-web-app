# Servicing Application

A modern, responsive web application for service providers and customers, built with Next.js and Storyblok headless CMS.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Storyblok](https://img.shields.io/badge/Storyblok-09B3AF?style=for-the-badge&logo=storyblok&logoColor=white)](https://www.storyblok.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

- **Multi-language Support** - Built-in support for multiple languages (en, fr, de)
- **Headless CMS** - Content managed through Storyblok
- **Modern UI** - Built with Radix UI and Tailwind CSS
- **Responsive Design** - Works on all device sizes
- **Authentication** - Secure user authentication flows
- **Service Management** - Browse and manage service providers

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm
- Storyblok space ID and access token

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/servicing-app.git
   cd servicing-app
   ```

2. Install dependencies
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your Storyblok credentials.

4. Run the development server
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm storyblok:gen` - Generate TypeScript types from Storyblok components
- `pnpm storyblok:pull` - Pull Storyblok component schemas

### Project Structure

```
src/
├── app/                    # App router pages and layouts
│   ├── auth/              # Authentication pages
│   └── [[...slug]]/       # Dynamic routes for Storyblok pages
├── components/            # Reusable UI components
│   ├── ui/                # Shadcn/ui components
│   └── molecule/          # Complex components
├── lib/                   # Utility functions and API clients
├── shared/                # Shared components and layouts
│   └── layout/            # Layout components (header, footer, etc.)
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 📦 Dependencies

### Core
- Next.js 14 - React framework
- React 19 - JavaScript library for building user interfaces
- TypeScript - Type-safe JavaScript
- Storyblok - Headless CMS

### UI & Styling
- Tailwind CSS - Utility-first CSS framework
- Radix UI - Unstyled, accessible UI components
- Lucide Icons - Beautiful, consistent icon set

### Form Handling
- React Hook Form - Form state management
- Zod - Schema validation

## 🌐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your-access-token
NEXT_PUBLIC_STORYBLOK_ENV=dev # or 'prod' for production
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Storyblok Documentation](https://www.storyblok.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Made with ❤️ by [Alibaba]
