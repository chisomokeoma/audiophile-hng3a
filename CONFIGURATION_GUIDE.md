# Configuration Guide for Convex and Resend

This guide will help you set up Convex (database) and Resend (email service) for the checkout system.

## 📋 Prerequisites

- Node.js installed
- npm or yarn package manager
- A GitHub account (for Convex)
- An email account (for Resend)

---

## 🔵 Step 1: Configure Convex (Database)

### 1.1 Install Convex CLI

```bash
npm install -g convex
```

### 1.2 Initialize Convex in Your Project

```bash
cd /Users/chisomokeoma/Documents/hng3-audiofile
npx convex dev
```

This will:

- Open your browser to sign in with GitHub
- Create a new Convex project
- Generate your `NEXT_PUBLIC_CONVEX_URL`
- Create a `.env.local` file with the URL

### 1.3 Verify Convex Setup

After running `npx convex dev`, you should see:

- A `.env.local` file created with `NEXT_PUBLIC_CONVEX_URL`
- The Convex dashboard opens in your browser
- A success message in the terminal

**Note:** Keep the `npx convex dev` terminal running while developing. It syncs your schema changes.

---

## 📧 Step 2: Configure Resend (Email Service)

### 2.1 Sign Up for Resend

1. Go to https://resend.com
2. Click "Sign Up" or "Get Started"
3. Sign up with your email or GitHub account

### 2.2 Create an API Key

1. Once logged in, go to the **API Keys** section in the dashboard
2. Click **"Create API Key"**
3. Give it a name (e.g., "Audiophile Project")
4. Copy the API key (you'll only see it once!)

### 2.3 Add API Key to Environment Variables

Add the Resend API key to your `.env.local` file:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Note:** If you don't have a `.env.local` file yet, create one in the project root.

---

## 🔧 Step 3: Complete Environment Variables

Create or update your `.env.local` file in the project root with all required variables:

```env
# Convex Configuration
NEXT_PUBLIC_CONVEX_URL=https://your-project-name.convex.cloud

# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# App URL (for email links)
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

**Important Notes:**

- Replace `your-project-name` with your actual Convex project name
- Replace `re_xxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual Resend API key
- Update the port number if your app runs on a different port

---

## ✅ Step 4: Verify Configuration

### 4.1 Restart Your Development Server

After setting up environment variables:

```bash
# Stop the current dev server (Ctrl+C)
npm run dev
```

### 4.2 Test the Checkout Flow

1. Add items to your cart
2. Go to the checkout page
3. Fill out the form
4. Submit the order

You should see:

- ✅ Order saved in Convex dashboard
- ✅ Confirmation email sent to the customer's email
- ✅ Order confirmation page displayed

---

## 🐛 Troubleshooting

### Convex Issues

**Error: "Provided address was not an absolute URL"**

- Make sure `NEXT_PUBLIC_CONVEX_URL` is set in `.env.local`
- The URL should start with `https://`
- Restart your dev server after adding the URL

**Error: "Convex client not available"**

- Run `npx convex dev` to initialize Convex
- Check that `.env.local` exists and has the correct URL

### Resend Issues

**Error: "Email not sent"**

- Verify `RESEND_API_KEY` is set correctly in `.env.local`
- Check your Resend dashboard for API key status
- Make sure you're using a valid email address for testing

**Error: "Unauthorized"**

- Your API key might be invalid or expired
- Create a new API key in Resend dashboard
- Update `.env.local` with the new key

### General Issues

**Environment variables not loading**

- Make sure `.env.local` is in the project root (same level as `package.json`)
- Restart your dev server after changing `.env.local`
- Check that variable names match exactly (case-sensitive)

---

## 📝 Quick Reference

### Environment Variables Needed

```env
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

### Commands to Remember

```bash
# Start Convex development
npx convex dev

# Start Next.js development server
npm run dev

# Check Convex dashboard
# Opens automatically or visit: https://dashboard.convex.dev
```

---

## 🎉 You're Done!

Once configured, your checkout system will:

- ✅ Save orders to Convex database
- ✅ Send confirmation emails via Resend
- ✅ Display order confirmation pages

Happy coding! 🚀
