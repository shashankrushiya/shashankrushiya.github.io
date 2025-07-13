# Portfolio - Test Automation Engineer

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Live Demo

Visit: [https://yourusername.github.io/Portfolio](https://yourusername.github.io/Portfolio)

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next Themes

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🏗️ Build & Deploy

### Local Build
```bash
# Build for production
npm run build

# Export static files
npm run export
```

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Prerequisites:
1. Push your code to a GitHub repository
2. Enable GitHub Pages in your repository settings
3. Set the source to "GitHub Actions"

#### Automatic Deployment:
- Every push to the `main` branch triggers automatic deployment
- The site will be available at `https://yourusername.github.io/Portfolio`

#### Manual Deployment:
```bash
# Build and deploy
npm run deploy
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── ui/             # UI components
│   ├── context/            # React context
│   └── providers/          # Theme providers
├── assets/                 # Static assets
├── .github/workflows/      # GitHub Actions
└── public/                 # Public assets
```

## ⚙️ Configuration

### Next.js Config (`next.config.js`)
- Static export enabled for GitHub Pages
- Base path configured for repository name
- Image optimization disabled for static export

### GitHub Actions (`.github/workflows/deploy.yml`)
- Automated build and deployment
- Node.js 18 environment
- GitHub Pages deployment

## 🎨 Customization

### Theme
The site uses a dark theme by default. You can modify the theme in:
- `src/providers/theme-provider.tsx`
- `src/app/layout.tsx`

### Content
Update your portfolio content in:
- `src/app/page.tsx` - Main page content
- `src/components/sections/` - Individual sections

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`

## 🔧 Development

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Run tests
npm run test
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Next.js and TypeScript 