# Deployment Guide: Getting Your Website on GitHub and vicvalentine.com

This guide will walk you through getting your portfolio website on GitHub and connected to your domain.

## Step 1: Push to GitHub

### 1.1 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `vicvalentine-portfolio` (or any name you prefer)
4. Set it to **Public** or **Private** (your choice)
5. **DO NOT** check "Add a README file" (we already have one)
6. Click **"Create repository"**

### 1.2 Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd /Users/victor/2025/website/20251227_vicvalentine

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/vicvalentine-portfolio.git

# Rename your main branch to 'main' (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password. For password, you'll need to use a **Personal Access Token** (not your regular password). See below if you need help creating one.

### 1.3 Create a Personal Access Token (if needed)

If GitHub asks for a password:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **"Generate new token (classic)"**
3. Give it a name like "Portfolio Website"
4. Select scopes: check **"repo"** (this gives full repository access)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 2: Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest way to deploy Next.js websites and offers free hosting with custom domains.

### 2.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** and choose **"Continue with GitHub"**
3. Authorise Vercel to access your GitHub account

### 2.2 Deploy Your Website

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories. Find `vicvalentine-portfolio` and click **"Import"**
3. Vercel will auto-detect Next.js settings (leave everything as default)
4. Click **"Deploy"**
5. Wait 1-2 minutes for deployment to complete
6. Your site will be live at: `https://vicvalentine-portfolio.vercel.app` (or similar)

---

## Step 3: Connect Your Domain (vicvalentine.com)

### 3.1 Add Domain in Vercel

1. In your Vercel project dashboard, go to **"Settings"** → **"Domains"**
2. Enter your domain: `vicvalentine.com` (and optionally `www.vicvalentine.com`)
3. Click **"Add"**
4. Vercel will show you DNS records you need to add

### 3.2 Configure DNS Records

You'll need to add DNS records at your domain registrar (where you bought vicvalentine.com). Common registrars: GoDaddy, Namecheap, Google Domains, etc.

**Vercel will show you something like:**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Steps:**
1. Log into your domain registrar
2. Find **"DNS Settings"** or **"Manage DNS"**
3. Add the records Vercel provided:
   - Add the **A record** for the root domain (@)
   - Add the **CNAME record** for www (if you want www.vicvalentine.com)
4. Save changes

### 3.3 Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually it's within 1-2 hours
- Vercel will show "Valid Configuration" when it's ready

### 3.4 Verify SSL Certificate

Vercel automatically provides free SSL certificates (HTTPS). Once DNS is configured, Vercel will automatically set up SSL for your domain.

---

## Alternative: Deploy to Netlify

If you prefer Netlify instead of Vercel:

1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **"Deploy site"**
6. Add custom domain in **Site settings** → **Domain management**

---

## Troubleshooting

### Git Push Issues
- **"Permission denied"**: Make sure you're using a Personal Access Token, not your password
- **"Repository not found"**: Check that the repository name matches exactly

### DNS Issues
- **"Domain not resolving"**: Wait longer for DNS propagation (can take up to 48 hours)
- **"SSL certificate pending"**: This happens automatically once DNS is configured correctly

### Build Errors
- Make sure all dependencies are in `package.json`
- Run `npm install` locally to test before deploying

---

## Quick Reference Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

---

## Next Steps After Deployment

1. **Update contact information** in `components/Contact.tsx` with your real email/phone
2. **Add images** - Create a `public/` folder and add photos of your drumming
3. **Set up form handling** - Connect the contact form to an email service
4. **Test everything** - Make sure all links work and the form submits correctly

---

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

