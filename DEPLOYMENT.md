# GitHub Pages Deployment Guide

This guide will walk you through deploying your Next.js portfolio to GitHub Pages.

## 🚀 Quick Start (Recommended)

### 1. Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/Portfolio.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Automatic Deployment
- Every push to the `main` branch will automatically trigger deployment
- Your site will be available at: `https://yourusername.github.io/Portfolio`

## 🔧 Manual Deployment

### Option 1: Using the Deploy Script
```bash
# Make sure you're on the main branch
git checkout main

# Run the deployment script
./deploy.sh
```

### Option 2: Manual Steps
```bash
# Build the project
npm run build

# Create .nojekyll file
touch out/.nojekyll

# Create or switch to gh-pages branch
git checkout --orphan gh-pages

# Remove all files except .git
git rm -rf .

# Copy built files
cp -r out/* .

# Add and commit
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages

# Switch back to main
git checkout main
```

## ⚙️ Configuration Details

### Next.js Configuration (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',           // Static export
  trailingSlash: true,        // Required for GitHub Pages
  images: {
    unoptimized: true,        // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
}
```

### GitHub Actions (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on push to main
- Uses Node.js 18
- Deploys to GitHub Pages environment

## 🔍 Troubleshooting

### Common Issues

#### 1. 404 Errors
- Ensure `trailingSlash: true` is set in `next.config.js`
- Check that base path matches your repository name

#### 2. Assets Not Loading
- Verify `assetPrefix` is correctly set
- Check that images are in the `public` folder

#### 3. Build Failures
- Run `npm run build` locally to check for errors
- Ensure all dependencies are installed

#### 4. GitHub Actions Failures
- Check the Actions tab in your repository
- Verify repository permissions for GitHub Pages

### Debugging Steps
```bash
# Test build locally
npm run build

# Check generated files
ls -la out/

# Test locally (if you have a static server)
npx serve out/
```

## 📝 Custom Domain (Optional)

If you want to use a custom domain:

1. Add your domain to `public/CNAME`:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider

3. Enable custom domain in GitHub Pages settings

## 🔄 Updating Your Site

### Automatic Updates
- Simply push changes to the `main` branch
- GitHub Actions will automatically rebuild and deploy

### Manual Updates
```bash
# Make your changes
# Build and deploy
./deploy.sh
```

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minimize Bundle Size**: Remove unused dependencies
3. **Enable Compression**: GitHub Pages automatically compresses assets
4. **Use CDN**: Consider using a CDN for better global performance

## 🛡️ Security Considerations

1. **Environment Variables**: Don't commit sensitive data
2. **API Keys**: Use environment variables for any API keys
3. **Dependencies**: Regularly update dependencies for security patches

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure all configuration files are correct
4. Test the build locally first

---

**Note**: Replace `yourusername` with your actual GitHub username throughout this guide. 