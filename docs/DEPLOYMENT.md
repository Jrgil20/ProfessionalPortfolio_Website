# Deployment Guide for Professional Portfolio

This document outlines how to deploy this React portfolio application to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed locally
3. Node.js and npm installed

## Deployment Options

### Option 1: Automated Deployment with GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys the application to GitHub Pages whenever changes are pushed to the main branch.

1. Push your code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/professional-portfolio.git
git push -u origin main
```

2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
   - Build your application
   - Deploy it to the `gh-pages` branch

3. Configure GitHub Pages Settings:
   - Navigate to your repository on GitHub
   - Go to "Settings" > "Pages"
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder
   - Click "Save"

Your site will be published at: `https://yourusername.github.io/professional-portfolio/`

### Option 2: Manual Deployment

The project is also configured for manual deployment using the `gh-pages` package:

1. Push your code to GitHub as described above
2. Run the deploy script locally:
```bash
npm run deploy
```

3. Configure GitHub Pages Settings as described in Option 1.

## Troubleshooting

### 404 Errors on Page Refresh

Since this app uses client-side routing with React Router, you might encounter 404 errors when refreshing pages. To fix this:

1. Create a `404.html` file in the `public` directory with a script that redirects to the main page
2. Or use HashRouter instead of BrowserRouter in your React application

### Custom Domain

To use a custom domain:
1. Add your domain in GitHub repository settings
2. Update the `homepage` field in `package.json` to your custom domain
3. Create CNAME record with your DNS provider
4. Add a CNAME file in the `public` directory with your domain