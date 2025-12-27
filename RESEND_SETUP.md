# Resend.com Setup Guide

Your contact form is now configured to use Resend to send emails to `drums@vicvalentine.com`. Follow these steps to complete the setup:

## Step 1: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (free tier includes 3,000 emails/month)
3. Verify your email address

## Step 2: Get Your API Key

1. Once logged in, go to **API Keys** in the sidebar
2. Click **Create API Key**
3. Give it a name like "Portfolio Website"
4. **Copy the API Key immediately** - you won't be able to see it again!
5. Save it somewhere safe

## Step 3: Verify Your Domain (Recommended)

For production use, you should verify your domain:

1. Go to **Domains** in your Resend dashboard
2. Click **Add Domain**
3. Enter `vicvalentine.com`
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually a few minutes)

**Note:** For testing, you can use `onboarding@resend.dev` as the sender, but you'll need to verify your domain for production.

## Step 4: Update the API Route (After Domain Verification)

Once your domain is verified, update `app/api/contact/route.ts`:

Change this line:
```typescript
from: 'Portfolio Contact <onboarding@resend.dev>',
```

To:
```typescript
from: 'Portfolio Contact <noreply@vicvalentine.com>',
```

Or use any email address from your verified domain.

## Step 5: Add Environment Variable

1. Create a file called `.env.local` in your project root (if it doesn't exist)
2. Add this line with your actual API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

3. Replace `re_your_actual_api_key_here` with your actual Resend API key

## Step 6: Restart Your Development Server

After adding the environment variable:

```bash
# Stop your current dev server (Ctrl+C)
npm run dev
```

## Step 7: Test the Form

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox at `drums@vicvalentine.com`
4. You should receive the form submission!

## Step 8: Add to Vercel (For Production)

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your Resend API key value
4. Redeploy your site

## Important Notes

- **Never commit `.env.local` to GitHub** - it's already in `.gitignore`
- The API key must be kept secret - never expose it in client-side code
- For production, verify your domain to use your own email address as the sender
- Resend free tier: 3,000 emails/month, 100 emails/day

## Troubleshooting

- **Form not sending?** Check the browser console and server logs for errors
- **Not receiving emails?** Check your spam folder and verify your API key is correct
- **Environment variable not working?** Make sure it's named `RESEND_API_KEY` and restart your dev server
- **Domain verification issues?** Make sure DNS records are added correctly and wait a few minutes for propagation

## Need Help?

- [Resend Documentation](https://resend.com/docs)
- [Resend Support](https://resend.com/support)

