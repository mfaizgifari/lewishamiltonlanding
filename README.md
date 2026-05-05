<h1 align="center">
  <br>
  <a href="https://lewishamilton.com"><img src="public/44lewishero.avif" alt="Lewis Hamilton" width="200"></a>
  <br>
  Lewis Hamilton Portfolio
  <br>
</h1>

<h4 align="center">A cinematic, high-performance portfolio dedicated to the seven-time Formula 1 World Champion, Sir Lewis Hamilton.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#performance">Performance</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#credits">Credits</a>
</p>

![screenshot](public/heropics.avif)

## Key Features

* **Cinematic Hero Section**
  - Immersive full-screen background with parallax effects.
  - Animated statistics counters.
* **Horizontal Scroll Gallery**
  - Smooth, infinite horizontal scrolling gallery powered by Framer Motion and GSAP.
* **Responsive Design**
  - Fully responsive layout that looks great on mobile, tablet, and desktop.
  - Custom mobile hamburger menu for easy navigation.
* **Performance Optimized**
  - Next.js Image component for automatic AVIF/WebP conversion and lazy loading.
  - Custom `next.config.ts` for compression and security headers.
  - `display: swap` for fonts to prevent FOIT (Flash of Invisible Text).
* **Smooth Scrolling**
  - Integrated Lenis for buttery-smooth scrolling experiences across the entire site.
* **Dynamic Animations**
  - Complex scroll-linked animations using Framer Motion.

## Tech Stack

This project is built with modern web technologies:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Smooth Scroll:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-username/lewishamilton.git

# Go into the repository
$ cd lewishamilton

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Performance

We've taken several steps to ensure the site is blazing fast:

1. **AVIF Images:** All images have been converted to `.avif` for superior compression without quality loss.
2. **Next.js `<Image>`:** Utilized across the site for automatic resizing, lazy loading, and priority fetching of critical LCP (Largest Contentful Paint) images.
3. **Font Optimization:** `display: swap` and `preload` ensure fonts don't block rendering.

## Deployment

This project is configured and ready to be deployed on Vercel.

1. Push your code to a GitHub repository.
2. Import the project in your Vercel dashboard.
3. Vercel will automatically detect Next.js and apply the correct build settings.
4. Deploy!

For a more detailed deployment walkthrough, check the generated `deploy_to_vercel.md` artifact.

## Credits

This software uses the following open source packages:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/)
- [Lenis](https://lenis.studiofreight.com/)

---

> GitHub [@your-username](https://github.com/your-username) &nbsp;&middot;&nbsp;
> Twitter [@your-twitter](https://twitter.com/your-twitter)
