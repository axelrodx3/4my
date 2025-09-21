# 🔒 Security Setup Guide

## Important: Protecting Your Personal Information

This portfolio is designed to be **safe for public repositories** while keeping your personal information secure.

### ✅ What's Already Protected:

1. **Environment Variables**: All sensitive data uses `process.env` variables
2. **Gitignore**: `.env*` files are ignored and won't be committed
3. **No Database**: Contact form uses mailto links (client-side only)
4. **Static Content**: All personal info is in `src/config/site.ts` (safe for public)

### 🛡️ How to Set Up Your Environment Variables:

1. **Create `.env.local` file** in your project root:
```bash
# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=myca.anise@gmail.com
NEXT_PUBLIC_PHONE=7422549756
NEXT_PUBLIC_LOCATION=Northridge, California

# Social Media (add when ready)
NEXT_PUBLIC_INSTAGRAM=
NEXT_PUBLIC_TWITTER=
NEXT_PUBLIC_LINKEDIN=
NEXT_PUBLIC_GITHUB=
```

2. **Never commit `.env.local`** - it's already in `.gitignore`

3. **For Vercel deployment**, add these same variables in your Vercel dashboard under Settings > Environment Variables

### 🔐 Security Features:

- **Contact Form**: Uses `mailto:` links (no server-side processing)
- **No Backend**: Everything is static and client-side
- **Environment Variables**: Sensitive data is not hardcoded
- **Public Repo Safe**: All code can be safely shared publicly

### 📝 What's Safe to Share:

- All code in this repository
- The `src/config/site.ts` file (contains your public info)
- Any documentation files

### ⚠️ What to Keep Private:

- Your `.env.local` file
- Any files with your actual phone number or email hardcoded
- Personal photos or sensitive documents

## 🚀 Deployment Checklist:

1. ✅ Create `.env.local` with your real contact info
2. ✅ Test the contact form locally
3. ✅ Add environment variables to Vercel
4. ✅ Deploy and test on live site
5. ✅ Verify contact form works correctly

Your portfolio is now secure and ready for public sharing! 🎉
