# 📧 EmailJS Setup Guide

## How to Set Up Direct Email Sending

Your contact form is now configured to send emails directly to `myca.anise@gmail.com` using EmailJS. Here's how to complete the setup:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (since you're using Gmail)
4. Connect your Gmail account (`myca.anise@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### Step 5: Update Environment Variables

Update your `.env.local` file with the actual values:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out and submit a test message
4. Check your Gmail inbox for the message

## 🎉 That's It!

Once configured, your contact form will:
- ✅ Send emails directly to `myca.anise@gmail.com`
- ✅ Show loading state while sending
- ✅ Display success/error messages
- ✅ Work without a backend server
- ✅ Be completely secure

## 📧 Email Format

Messages will arrive in your inbox with:
- **Subject**: "Portfolio Contact: [their subject]"
- **From**: Their name and email
- **Message**: Their full message
- **Footer**: Indicates it came from your portfolio

## 🔒 Security

- EmailJS handles all the email sending securely
- No sensitive data is stored on your site
- Free tier allows 200 emails/month
- Upgrade for more if needed

Your contact form is now fully functional! 🚀
