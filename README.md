# Do Vuong Phuc - Portfolio Website

<p>
    <img alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img alt="bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
    <img alt="github-pages" src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white">
</p>

A personal portfolio website built with React JS and deployed on GitHub Pages.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phuc16102001/phuc16102001.github.io.git
cd phuc16102001.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 📦 Build

To create a production build:

```bash
npm run build
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment. Every push to the `main` or `master` branch will automatically:

1. Build the React app
2. Deploy to GitHub Pages

**Setup Steps:**

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select **GitHub Actions** as the source
3. Push your code to the `main` branch

### Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

This uses the `gh-pages` package to deploy the `build` folder to the `gh-pages` branch.

## 📁 Project Structure

```
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── img/                  # Images and logos
│   └── assets/               # Resume and other static files
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Work.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Awards.jsx
│   │   ├── Publications.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── custom.css
│   ├── App.jsx
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
└── package.json
```

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Bootstrap 5** - CSS framework
- **Animate.css** - CSS animations
- **Font Awesome** - Icons
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## Contribution

This repository is built by [phuc16102001](https://www.github.com/phuc16102001).
