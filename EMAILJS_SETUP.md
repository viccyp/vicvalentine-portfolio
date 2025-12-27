# EmailJS Setup Guide

Your contact form is now configured to use EmailJS to send emails to `drums@vicvalentine.com`. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **EmailJS** (recommended for simplicity)
4. Follow the setup instructions for your chosen provider
5. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
From: {{from_name}}
Email: {{from_email}}
Service: {{service}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key** - you'll need this later

## Step 5: Add Environment Variables

1. Create a file called `.env.local` in your project root (if it doesn't exist)
2. Add these three lines with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys from EmailJS

## Step 6: Restart Your Development Server

After adding the environment variables:

```bash
# Stop your current dev server (Ctrl+C)
npm run dev
```

## Step 7: Test the Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox at `drums@vicvalentine.com`
4. You should receive the form submission!

## Important Notes

- **Never commit `.env.local` to GitHub** - it's already in `.gitignore`
- The environment variables need to be added to your hosting platform (Vercel) as well:
  - Go to your Vercel project settings
  - Navigate to **Environment Variables**
  - Add the three `NEXT_PUBLIC_*` variables with your EmailJS values
  - Redeploy your site

## Troubleshooting

- **Form not sending?** Check the browser console for errors
- **Not receiving emails?** Check your spam folder and verify your EmailJS service is connected correctly
- **Environment variables not working?** Make sure they start with `NEXT_PUBLIC_` and restart your dev server

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

