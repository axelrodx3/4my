# 🚀 Quick Email Setup

## The Issue
Your contact form is failing because Gmail credentials aren't configured yet.

## Quick Fix (2 minutes)

### Step 1: Create Environment File
Create a file called `.env.local` in your project root with:

```bash
GMAIL_USER=myca.anise@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 2: Get Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Enter "Portfolio Contact Form"
4. Copy the 16-character password
5. Replace `your_app_password_here` with this password

### Step 3: Test
1. Restart your server: `npm run dev`
2. Try the contact form
3. Check your Gmail inbox!

## Current Status
- ✅ Code is ready and working
- ✅ API route is functional
- ⏳ Just needs Gmail credentials

The error "Missing credentials for PLAIN" means the Gmail setup is incomplete.
