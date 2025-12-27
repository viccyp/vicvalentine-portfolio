# Victor Valentine - Portfolio Website

A modern portfolio website built with Next.js, showcasing professional drumming services including session gigs, recordings, and drum lessons.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your computer
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your website.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Main layout wrapper (metadata, fonts)
│   ├── page.tsx           # Homepage (assembles all sections)
│   └── globals.css        # Global styles with Tailwind
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Top navigation bar
│   ├── Hero.tsx          # Hero/landing section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services showcase
│   └── Contact.tsx       # Contact form
├── package.json          # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## 🎨 Customization

### Update Contact Information

Edit `components/Contact.tsx` and replace:
- Email: `contact@vicvalentine.com`
- Phone: `+44 XXXX XXXXXX`

### Modify Content

- **Hero section**: Edit `components/Hero.tsx`
- **About section**: Edit `components/About.tsx`
- **Services**: Edit the `services` array in `components/Services.tsx`

### Styling

The website uses Tailwind CSS. You can:
- Modify colours in `tailwind.config.ts`
- Add custom styles in `app/globals.css`
- Use Tailwind utility classes directly in components

## 📝 Next Steps

1. **Add your contact information** in the Contact component
2. **Add images/photos** - Create an `public/` folder and add your images
3. **Set up form handling** - Connect the contact form to an email service (e.g., Formspree, SendGrid)
4. **Add a portfolio/gallery** - Showcase your work with photos or videos
5. **Deploy** - Deploy to Vercel (recommended for Next.js) or another hosting service

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
