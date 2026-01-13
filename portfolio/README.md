# Modern Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Modern, clean design with smooth animations
- Fully responsive layout for all devices
- Fast performance with Vite
- Utility-first styling with Tailwind CSS
- Sections: Hero, Projects, Contact, Footer
- Mobile-friendly navigation with hamburger menu

## Getting Started

### Development

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Manual Deployment

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### Option 2: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

To enable this:

1. Go to your repository Settings
2. Navigate to Pages in the sidebar
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push your code to the main branch

The site will automatically build and deploy!

## Customization

### Update Content

- **Navbar**: Edit `src/components/Navbar.jsx`
- **Hero Section**: Edit `src/components/Hero.jsx`
- **Projects**: Update the projects array in `src/components/Projects.jsx`
- **Contact**: Edit `src/components/Contact.jsx`
- **Footer**: Edit `src/components/Footer.jsx`

### Add Your Profile Image

Replace the placeholder in `src/components/Hero.jsx` with:

```jsx
<img
  src="/path-to-your-image.jpg"
  alt="Egan Bauersfeld"
  className="w-full h-full object-cover"
/>
```

### Styling

All styles use Tailwind CSS utility classes. You can:
- Modify `tailwind.config.js` to customize colors, fonts, etc.
- Edit `src/index.css` for global styles and custom animations

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **GitHub Pages** - Hosting

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## License

This is a personal portfolio template. Feel free to use and modify for your own portfolio!
