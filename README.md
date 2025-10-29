<div style="text-align: center">
  <h1>🌍 Servicing Application</h1>
  <p>A modern, responsive web application for service providers and customers, built with Next.js and Storyblok headless CMS.</p>
  
  <div>
    <a href="https://nextjs.org/" target="_blank">
      <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    </a>
    <a href="https://www.storyblok.com/" target="_blank">
      <img src="https://img.shields.io/badge/Storyblok-09B3AF?style=for-the-badge&logo=storyblok&logoColor=white" alt="Storyblok" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
  </div>
  
  <div style="margin: 1rem 0;">
    <a href="#readme"><img src="https://img.shields.io/badge/EN-flag.svg?style=flat-square" alt="English" height="20"></a>
    <a href="docs/README.de.md"><img src="https://img.shields.io/badge/DE-flag.svg?style=flat-square" alt="Deutsch" height="20"></a>
  </div>
</div>
<div>
  
<div class="marginBottom: 3px">
  <img width="1918" height="995" alt="Screenshot (698)" src="https://github.com/user-attachments/assets/21c1a0d8-33ff-4d3f-91f8-a1ef43dfe6c8" />
</div>
<div class="marginBottom: 3px">
  <img width="1918" height="997" alt="Screenshot (701)" src="https://github.com/user-attachments/assets/5eacbb12-d748-433f-bf47-c2e3fb16aaf4" />
</div>
<div class="marginBottom: 3px">
<img width="1922" height="992" alt="Screenshot (702)" src="https://github.com/user-attachments/assets/c24617b6-9c18-46a2-9436-990b600edfd5" />
</div>
<div class="marginBottom: 3px">
<img width="1920" height="993" alt="Screenshot (703)" src="https://github.com/user-attachments/assets/b0d4af1b-59fa-46f6-94c7-35e7fdfe45dd" />
</div>
<div class="marginBottom: 3px">
<img width="1920" height="997" alt="Screenshot (704)" src="https://github.com/user-attachments/assets/65b95fcf-6132-4c8d-988b-ca8a6b4129c6" />
</div>

## 🌟 Features / Funktionen

<details>
<summary>🇬🇧 English</summary>

- **Multi-language Support** - Built-in support for multiple languages (English, French, German)
- **Headless CMS** - Content managed through Storyblok with real-time preview
- **Modern UI** - Built with Radix UI and Tailwind CSS for a polished look
- **Responsive Design** - Fully responsive layout that works on all device sizes
- **Authentication** - Secure user authentication and authorization flows
- **Service Management** - Browse, search, and manage service providers

</details>
<!--
<details>
<summary>🇫🇷 Français</summary>

- **Support multilingue** - Prise en charge intégrée de plusieurs langues (anglais, français, allemand)
- **CMS Headless** - Contenu géré via Storyblok avec prévisualisation en temps réel
- **Interface moderne** - Construite avec Radix UI et Tailwind CSS pour un design élégant
- **Design réactif** - Mise en page entièrement réactive sur tous les appareils
- **Authentification** - Flux d'authentification et d'autorisation sécurisés
- **Gestion des services** - Parcourez, recherchez et gérez des prestataires de services

</details>
-->
<details>
<summary>🇩🇪 Deutsch</summary>

- **Mehrsprachige Unterstützung** - Integrierte Unterstützung für mehrere Sprachen (Englisch, Französisch, Deutsch)
- **Headless CMS** - Inhalte werden über Storyblok mit Echtzeit-Vorschau verwaltet
- **Moderne Benutzeroberfläche** - Erstellt mit Radix UI und Tailwind CSS für ein poliertes Erscheinungsbild
- **Responsives Design** - Vollständig anpassbares Layout für alle Bildschirmgrößen
- **Authentifizierung** - Sichere Benutzerauthentifizierung und Autorisierungsabläufe
- **Dienstleistungsverwaltung** - Durchsuchen, suchen und verwalten Sie Dienstleister

</details>

## 🚀 Getting Started / Erste Schritte

### Prerequisites Voraussetzungen

- Node.js 18.0 or later / oder höher
- pnpm (recommended) or npm / oder npm
- Storyblok space ID and access token / Storyblok-Space-ID und Zugriffstoken

### Installation / Installation

1. Clone the repository / Repository klonen
   ```bash
   git clone https://github.com/yourusername/servicing-app.git
   cd servicing-app
   ```

2. Install dependencies / Abhängigkeiten installieren
   ```bash
   pnpm install
   # or / oder
   npm install
   ```

3. Set up environment variables / Umgebungsvariablen einrichten
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your Storyblok credentials.
   Mettez à jour le fichier `.env.local` avec vos identifiants Storyblok.
   Aktualisieren Sie die Datei `.env.local` mit Ihren Storyblok-Zugangsdaten.

4. Run the development server / Entwicklungsserver starten
   ```bash
   pnpm dev
   # or / oder
   npm run dev
   ```

5. Open in your browser / Im Browser öffnen:
   - English: [http://localhost:3000](http://localhost:3000)
   - Deutsch: [http://localhost:3000/de](http://localhost:3000/de)

## 🛠️ Development / Entwicklung

### Available Scripts / Verfügbare Skripte

| Command / Befehl | Description / Beschreibung |
|-----------------------------|------------------------------------------|
| `pnpm dev` | Start development server / Entwicklungsserver starten |
| `pnpm build` | Build for production / Produktionsversion erstellen |
| `pnpm start` | Start production server / Produktionsserver starten |
| `pnpm lint` | Run ESLint / ESLint ausführen |
| `pnpm format` | Format code with Prettier / Code mit Prettier formatieren |
| `pnpm storyblok:gen` | Generate TypeScript types / TypeScript-Typen generieren |
| `pnpm storyblok:pull` | Pull Storyblok schemas / 
Storyblok-Schemata abrufen |
| `pnpm storyblok:login` | Login to Storyblok / Storyblok einloggen |
| `pnpm storyblok:logout` | Logout from Storyblok / Storyblok ausloggen |

### Project Structure

```
servicing-app/
├── public/                  # Static files (images, fonts, etc.)
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   │   └── [...slug]/       # Dynamic route handling
│   │
│   ├── components/          # Reusable UI components
│   │   ├── atoms/           # Atomic design: Basic building blocks
│   │   ├── molecules/       # Groups of atoms working together
│   │   ├── organism/        # Complex UI components
│   │   ├── ui/              # Shadcn/ui components
│   │   └── fields/          # Form fields and inputs
│   │
│   ├── shared/              # Shared utilities and configurations
│   │   ├── layout/          # Layout components and styles
│   │
│   ├── lib/                 # Core application logic
│   │   ├── api/             # API client and services
│   │   ├── config/          # Application configuration
│   │   └── utils/           # Shared utility functions
│   │
│   ├── styles/              # Global styles and themes
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper utilities
│
├── .storyblok/             # Storyblok type 
└── certificates/           # SSL/TLS certificates for local development
```

#### Key Directories Explained

1. **`app/`**
   - Contains the Next.js 13+ app router configuration
   - Handles routing and page layouts
   - Implements server components for better performance

2. **`components/`**
   - Follows Atomic Design methodology
   - Organized by component complexity
   - Contains reusable UI elements

3. **`shared/`**
   - Layout components and styles
   - Global configurations and constants

4. **`lib/`**
   - Core business logic
   - API integration layer
   - Utility functions and helpers

5. **`public/`**
   - Static assets
   - Images, icons, and fonts
   - Publicly accessible files

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
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your-preview-access-token
STORYBLOK_IS_PREVIEW=true
STORYBLOK_BASE_URL=cdn/stories
```

Create a `.env.preview` file in the root directory with the following variables:

```env
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your-preview-access-token
STORYBLOK_IS_PREVIEW=true
```

Create a `.env.production` file in the root directory with the following variables:

```env
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your-public-access-token
STORYBLOK_IS_PREVIEW=false
```

## 🤝 Contributing / Mitwirken

We welcome contributions from everyone! Here's how you can help:

1. Fork the repository / Forke das Repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request / Eine Pull-Request öffnen

### Translation Guidelines / Übersetzungsrichtlinien

- Keep translations clear and concise / Halten Sie Übersetzungen klar und präzise
- Maintain consistent terminology / Halten Sie die Terminologie konsistent
- Follow the existing code style / Befolgen Sie den vorhandenen Codestil
- Update all language versions when making changes / Aktualisieren Sie alle Sprachversionen bei Änderungen

## 🙏 Acknowledgments / Danksagungen

### Resources / Ressourcen

- [Next.js Documentation](https://nextjs.org/docs)
- [Storyblok Documentation](https://www.storyblok.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [React Hook Form](https://react-hook-form.com/)

### Contributors / Mitwirkende

- [Alibaba](https://github.com/abmanaf) - Project Lead / Projektleiter

---

<div className="center">
  <p>Made by <a href="https://github.com/yourusername">Alibaba</a></p>
  <p>Available in: 
    <a href="#readme">English</a> | 
    <a href="docs/README.de.md">Deutsch</a>
  </p>
</div>
