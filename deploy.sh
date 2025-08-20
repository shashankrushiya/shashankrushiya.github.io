#!/bin/bash

# Deploy script for GitHub Pages (root deployment)
echo " Starting deployment to GitHub Pages..."

# Build the project
echo " Building the project..."
npm run build

# Create .nojekyll file to bypass Jekyll processing
echo " Creating .nojekyll file..."
touch out/.nojekyll

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
    echo " Updating gh-pages branch..."
    git checkout gh-pages
    git pull origin gh-pages
else
    echo " Creating gh-pages branch..."
    git checkout --orphan gh-pages
fi

# Remove all files except .git
git rm -rf .

# Copy built files to root
echo " Copying built files..."
cp -r ../out/* .

# Add all files
git add .

# Commit changes
echo " Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
echo " Pushing to GitHub Pages..."
git push origin gh-pages --force

# Switch back to main branch
git checkout main

echo " Deployment completed!"
echo " Site should be available at: https://shashankrushiya.github.io/" 
