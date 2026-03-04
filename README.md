# My Portfolio Website 🌐

<a href="https://mohammadaribhasan.vercel.app/" target="_blank" rel="noopener noreferrer">
Visit My Portfolio
</a>

Welcome to the repository for my personal portfolio website. This project serves as an online presence where I highlight my professional experience, showcase selected projects, list technical skills, and provide a way for visitors to get in touch.

## Overview

The site is built with **Next.js 14** using the App Router and TypeScript for type safety. Styling is handled with Tailwind CSS, and the layout is fully responsive across devices. Content is organized into components within the `src/app/component` directory, with sample data stored in `src/app/data`.

Key pages include:

- **Home/Hero** – a welcome section with a brief introduction.
- **About** – information about me and my background.
- **Projects** – a list of projects with details pulled from a data file.
- **Skills** – a visual display of technologies I use.
- **Contact** – form and contact details to reach me.

## Features

- Modern Next.js 14 App Router structure
- TypeScript throughout the codebase
- Tailwind CSS for utility-first styling
- Modular React components for ease of reuse
- Static data files for projects and skills
- Snowfall animation component (see `Snowfall.tsx`)

## ⚙️ Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js (development)

## 🧩 Project Structure

```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    component/
      About.tsx
      Contact.tsx
      ContactDetails.tsx
      ContactForm.tsx
      Education.tsx
      Footer.tsx
      Hero.tsx
      Icon.tsx
      Navbar.tsx
      ProjectDetails.tsx
      ProjectsList.tsx
      Skills.tsx
      Snowfall.tsx
    data/
      projects.tsx
      skills.js
      user.js
```

## 📦 Getting Started

### Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE) (if applicable).

---

Feel free to modify this README further to match your personal style or to include deployment instructions, screenshots, or other details. Happy coding! 🎉
