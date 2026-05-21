# Personal Portfolio - Single Page App

A modern, responsive personal portfolio website built with vanilla JavaScript, CSS Modules, and Webpack.

## Features

- **Single Page Application (SPA)** - Fast navigation without page reloads
- **Vanilla JavaScript** - No framework dependencies
- **CSS Modules** - Scoped styling to prevent conflicts
- **Webpack** - Modern build tool with dev server
- **Responsive Design** - Works on all devices
- **Multiple Pages** - Home, About, Projects, Contact

## Project Structure

```
personal-site/
├── public/
│   └── index.html          # Main HTML entry point
├── src/
│   ├── pages/              # Page components
│   │   ├── home.js
│   │   ├── about.js
│   │   ├── projects.js
│   │   └── contact.js
│   ├── styles/             # CSS Modules
│   │   ├── app.module.css
│   │   └── pages/
│   │       ├── home.module.css
│   │       ├── about.module.css
│   │       ├── projects.module.css
│   │       └── contact.module.css
│   ├── app.js              # Main app component
│   ├── router.js           # SPA routing logic
│   └── index.js            # Entry point
├── webpack.config.js       # Webpack configuration
├── .babelrc                # Babel configuration
├── .gitignore              # Git ignore file
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Endalk5/personal-site.git
cd personal-site
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:8080`

### Other Commands

- **Development build with watch mode:**
  ```bash
  npm run dev
  ```

- **Production build:**
  ```bash
  npm run build
  ```

## Customization

### Update Your Information

1. **Home Page** - Edit `src/pages/home.js`
2. **About Section** - Edit `src/pages/about.js`
3. **Projects** - Edit `src/pages/projects.js` and add your projects
4. **Contact** - Edit `src/pages/contact.js` and update your email
5. **Styling** - Modify CSS Module files in `src/styles/`

### Add New Pages

1. Create a new file in `src/pages/` (e.g., `blog.js`)
2. Create corresponding CSS module in `src/styles/pages/` (e.g., `blog.module.css`)
3. Add the page function to `src/router.js`
4. Add navigation link in `src/app.js`

## Technologies Used

- **Webpack** - Module bundler
- **Babel** - JavaScript transpiler
- **CSS Modules** - Scoped CSS
- **HTML5** - Semantic markup
- **ES6+** - Modern JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Build for production:
```bash
npm run build
```

The `dist` folder contains your production-ready files. Deploy to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

MIT

## Author

Endalk5
