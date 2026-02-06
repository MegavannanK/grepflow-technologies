# Grepflow Technologies Landing Page

A modern, responsive, mobile-first landing page for Grepflow Technologies built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Tech Stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS v4.
- **Animations**: Smooth entrance animations using Framer Motion.
- **Design System**: Custom "Deep Navy" and "Electric Blue" theme with Inter font.
- **Components**: Reusable UI components (Button, Section, Container).
- **Deployment**: Configured for GitHub Pages (Static Export).

## Getting Started

### Prerequisites

- Node.js 18+ installed (Recommended 20+).
- npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/grepflow-technologies.git
   cd grepflow-technologies
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to GitHub Pages

This project is configured for automated deployment via GitHub Actions.

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/grepflow-technologies.git
   git push -u origin main
   ```

2. **Configure Settings**:
   - Go to repository **Settings** > **Pages**.
   - Under "Build and deployment", select **GitHub Actions** as the source.
   - The workflow "Deploy to GitHub Pages" will automatically pick up the build.

3. **Verify**:
   - Once the Action completes, your site will be live at `https://your-username.github.io/grepflow-technologies/`.

## Project Structure

- `app/`: Next.js App Router pages and layout.
- `components/ui`: Generic UI components (Button, etc.).
- `components/section`: Landing page sections (Hero, About, etc.).
- `lib/`: Utility functions.

## Updates

- To change colors: Edit `app/globals.css`.
- To update content: Edit the individual component files in `components/sections/`.
