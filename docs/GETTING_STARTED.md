# Getting Started with the Theta Tau Website

This guide will walk you through the process of setting up your own copy of the website and deploying it with Vercel.

## Forking the Repository

1. **Create a GitHub Account**
   - If you don't have one already, sign up at [GitHub](https://github.com)

2. **Fork the Repository**
   - Go to the original repository at `https://github.com/[previous-website-chair-github-username]/theta-tau`
   - Click the "Fork" button in the top-right corner
   - Select your account as the destination for the fork
   - Wait for GitHub to complete the forking process

3. **Clone Your Fork Locally**
   ```bash
   git clone https://github.com/[your-username]/theta-tau.git
   cd theta-tau
   ```

## Setting Up Vercel

1. **Create a Vercel Account**
   - Go to [Vercel](https://vercel.com)
   - Sign up using your GitHub account
   - Choose the free tier for personal projects

2. **Import Your Repository**
   - Click "Add New Project" in Vercel dashboard
   - Select your forked theta-tau repository
   - Vercel will automatically detect it as a Next.js project

3. **Configure Project Settings**
   - Project Name: Choose a name (e.g., "theta-tau-website")
   - Framework Preset: Should automatically be set to Next.js
   - Root Directory: Leave as `.` (root)
   - Build Command: Leave as default
   - Output Directory: Leave as default

4. **Deploy**
   - Click "Deploy"
   - Wait for the initial deployment to complete
   - Vercel will provide you with a deployment URL

## Connecting Custom Domain (Optional)

1. **Add Custom Domain**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain name (e.g., "thetatau.org")
   - Follow Vercel's instructions for DNS configuration

2. **Configure DNS**
   - Log in to your domain registrar
   - Add the required DNS records provided by Vercel
   - Wait for DNS propagation (can take up to 48 hours)

## Automatic Deployments

Vercel will automatically deploy changes when you:
1. Push to the main branch of your repository
2. Create or merge a pull request

To make changes:
```bash
# Create a new branch for your changes
git checkout -b feature/my-changes

# Make your changes...

# Commit your changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin feature/my-changes
```

## Managing Environment Variables

1. **Local Environment**
   - Copy `.env.example` to `.env.local`
   - Fill in required environment variables

2. **Vercel Environment**
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add each required variable
   - Redeploy your project for changes to take effect

## Troubleshooting Deployment

1. **Build Failures**
   - Check the build logs in Vercel
   - Ensure all dependencies are properly listed in `package.json`
   - Verify environment variables are set correctly

2. **Preview Deployments**
   - Each pull request gets a preview deployment
   - Use these to verify changes before merging to main

3. **Rolling Back**
   - In Vercel dashboard, go to "Deployments"
   - Find the last working deployment
   - Click "..." → "Promote to Production"

## Best Practices

1. **Version Control**
   - Always create branches for new features
   - Write clear commit messages
   - Review changes before pushing

2. **Testing**
   - Test locally before pushing
   - Use preview deployments to verify changes
   - Check mobile responsiveness

3. **Security**
   - Never commit sensitive information
   - Use environment variables for secrets
   - Regularly update dependencies

## Need Help?

If you encounter any issues:
1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Review the [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
3. Contact the previous website chair
4. Reach out to the chapter technology committee
