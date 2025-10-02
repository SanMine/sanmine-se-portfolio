# EmailJS Troubleshooting Guide

## Common Issues and Solutions:

### 1. Template Variable Mismatch
Your EmailJS template must have these exact variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

### 2. Service Configuration
Make sure your Gmail service is properly connected in EmailJS dashboard.

### 3. Template Content
Here's a working template example:

```
Subject: New Contact from Portfolio: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### 4. Quick Test
Try this simple test in your browser console (F12):

```javascript
emailjs.send('service_hsdecxb', 'template_t8rts9v', {
  from_name: 'Test User',
  from_email: 'test@example.com',
  subject: 'Test Subject',
  message: 'This is a test message'
}, 'P7PKwZAA6p4Tplfgb').then(
  function(response) {
    console.log('SUCCESS!', response.status, response.text);
  },
  function(error) {
    console.log('FAILED...', error);
  }
);
```

### 5. Check EmailJS Dashboard
1. Go to EmailJS dashboard
2. Check your email service is connected
3. Verify template exists and has correct variables
4. Test the template with sample data

Let me know what error message you see in the browser console!