# Contact Form Setup Instructions

Your contact form is now configured to send emails to `saisanmine.nov@gmail.com` using EmailJS.

## Setup Steps:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Configure EmailJS Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail and connect your Gmail account (`saisanmine.nov@gmail.com`)
4. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Set template variables:
   - `from_name`
   - `from_email` 
   - `subject`
   - `message`
   - `to_email` (set to saisanmine.nov@gmail.com)

5. Note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key**

### 5. Configure Environment Variables
1. Create a `.env` file in your project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

2. Replace the placeholder values with your actual EmailJS credentials

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your Gmail inbox for the message

## Alternative Options:

### Option 2: Formspree
If you prefer Formspree:
1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a form endpoint
3. Update the form action to POST to your Formspree endpoint

### Option 3: Netlify Forms
If deploying to Netlify:
1. Add `netlify` attribute to your form
2. Netlify will automatically handle form submissions

## Security Notes:
- EmailJS public key is safe to expose in frontend
- Consider rate limiting for production
- Monitor EmailJS usage to stay within free tier limits

The form will now send emails directly to `saisanmine.nov@gmail.com` when users submit messages!