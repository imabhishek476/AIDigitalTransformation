# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Get started for free"
3. Sign in with your Google account
4. Click "Start measuring"

## Step 2: Set up Property

1. **Account Details**:
   - Account name: "NexiFront"
   - Choose your country/region
   - Accept terms of service

2. **Property Details**:
   - Property name: "NexiFront Website"
   - Reporting time zone: Choose your timezone
   - Currency: Choose your currency

3. **Business Information**:
   - Industry category: "Technology" or "Professional Services"
   - Business size: Choose appropriate size
   - Usage intentions: Select "Get baseline reports", "Measure customer engagement", "Examine user behavior"

## Step 3: Set up Data Stream

1. Choose "Web" platform
2. **Website URL**: Enter your domain (e.g., `https://yourdomain.com`)
3. **Stream name**: "NexiFront Main Website"
4. Click "Create stream"

## Step 4: Get Your Measurement ID

After creating the data stream, you'll see:
- **Measurement ID**: This looks like `G-XXXXXXXXXX`
- Copy this ID - this is what you need!

## Step 5: Add to Your Replit Project

1. In your Replit project, go to the "Secrets" tab in the sidebar
2. Add a new secret:
   - **Key**: `VITE_GA_MEASUREMENT_ID`
   - **Value**: Your measurement ID (e.g., `G-XXXXXXXXXX`)
3. Click "Add Secret"

## Step 6: Restart Your Application

After adding the secret, your application will automatically restart and Google Analytics will be active.

## What Gets Tracked

Your website will automatically track:
- Page views and navigation
- Contact form submissions
- Demo interactions
- Scroll depth (25%, 50%, 75%, 90%)
- User engagement metrics
- Core Web Vitals performance

## Viewing Your Data

1. Go back to Google Analytics
2. Select your property "NexiFront Website"
3. Data will start appearing within 24-48 hours
4. Use "Realtime" reports to see immediate activity

## Important Notes

- It may take 24-48 hours for data to appear in reports
- The "Realtime" section shows current activity immediately
- All tracking is GDPR compliant and respects user privacy
- No personal information is collected without consent

## Troubleshooting

If analytics aren't working:
1. Check that your Measurement ID is correctly formatted (`G-XXXXXXXXXX`)
2. Verify the secret key name is exactly `VITE_GA_MEASUREMENT_ID`
3. Ensure your application has restarted after adding the secret
4. Check browser console for any errors