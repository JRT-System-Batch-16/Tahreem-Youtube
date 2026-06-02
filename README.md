# YouTube UI (Vite + React + Tailwind)

A small frontend project demonstrating a YouTube-like UI built with Vite, React, and Tailwind CSS.

## Features
- Responsive video grid and header
- Simple login view and short/video components
- Built with modern frontend tooling (Vite + React + Tailwind)

## Tech Stack
- Vite
- React
- Tailwind CSS

## Requirements
- Node.js (v16+ recommended)

## Setup
1. Install dependencies:

   `npm install`

2. Start the development server:

   `npm run dev`

3. Build for production:

   `npm run build`

4. Preview the production build locally:

   `npm run preview`

## Project Structure
- [index.html](index.html) — app entry
- [src/main.jsx](src/main.jsx) — React entry
- [src/App.jsx](src/App.jsx) — main app component
- [src/index.css](src/index.css) — global styles (Tailwind)
- [src/components/Header.jsx](src/components/Header.jsx) — top navigation/header
- [src/components/login.jsx](src/components/login.jsx) — login UI
- [src/components/Short.jsx](src/components/Short.jsx) — short/video snippet component
- [src/components/Video.jsx](src/components/Video.jsx) — single video component
- [src/components/VideoGrid.jsx](src/components/VideoGrid.jsx) — grid layout for videos

## Development Notes
- This project uses Tailwind utilities in `src/index.css` and the configuration in `tailwind.config.js`.
- Vite handles fast HMR during development.

## Contributing
Feel free to open issues or submit pull requests. Keep changes focused and use descriptive commit messages.

## License
This project has no license specified. Add a `LICENSE` file if you want to set one.
