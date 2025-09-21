# Myca Portfolio

A sophisticated, elegant portfolio website built with Next.js, featuring a beautiful black, white, and pink design with smooth animations and modern typography.

## ✨ Features

- **Elegant Design**: Clean black, white, and pink color scheme with sophisticated typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful transitions and hover effects using Framer Motion
- **Modern Typography**: Playfair Display for headings and Inter for body text
- **Portfolio Gallery**: Masonry-style grid with category filtering and hover effects
- **Contact Form**: Sleek contact form with validation
- **SEO Optimized**: Built with Next.js 15 and optimized for performance
- **Vercel Ready**: Configured for seamless deployment on Vercel

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display & Inter (Google Fonts)
- **TypeScript**: Full type safety
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/axelrodx3/4my.git
cd 4my
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Navigation bar
│   ├── PortfolioGallery.tsx # Portfolio grid
│   └── SmoothScroll.tsx   # Smooth scroll utility
└── ...
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts` and `src/app/globals.css`:
- Primary Black: `#000000`
- Primary White: `#FFFFFF`
- Primary Pink: `#FF4D88`
- Soft Pink: `#F6B6C1`

### Typography
- Headings: Playfair Display (serif)
- Body text: Inter (sans-serif)

### Portfolio Items
Update the `portfolioItems` array in `src/components/PortfolioGallery.tsx` with your actual portfolio pieces.

### Contact Information
Update contact details in:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click!

The project is already configured for Vercel deployment with:
- Optimized Next.js configuration
- Image optimization
- Security headers
- Performance optimizations

### Manual Deployment

```bash
npm run build
npm start
```

## 📱 Pages

- **Home** (`/`): Hero section, portfolio preview, about, and contact
- **Portfolio** (`/portfolio`): Full portfolio gallery with filtering
- **About** (`/about`): Personal story and skills
- **Contact** (`/contact`): Contact form and information

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Smooth animations with Framer Motion
- SEO optimized with proper meta tags
- Mobile-first responsive design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, please open an issue or contact me directly.

---

Made with ❤️ and Next.js
