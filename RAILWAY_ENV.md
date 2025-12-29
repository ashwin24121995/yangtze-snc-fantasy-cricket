# Railway Environment Variables Guide

This document lists all environment variables needed for Railway deployment.

## Required Environment Variables

### Database
```
DATABASE_URL=mysql://user:password@host:3306/yangtze_snc
```
- Get from Railway MySQL plugin or external database
- Format: `mysql://user:password@host:port/database`

### Authentication & Security
```
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
```
- Generate a random string (32+ characters)
- Used for signing session cookies
- Command to generate: `openssl rand -base64 32`

### Cricket API
```
CRICKET_API_KEY=your-cricket-api-key
```
- Get from https://cricketdata.org or similar cricket API provider
- Required for fetching live match data and player information

### Application Configuration
```
VITE_APP_TITLE=YANGTZE SNC - Learn Fantasy Cricket
VITE_APP_LOGO=/logo-main.png
PORT=3000
NODE_ENV=production
```

## ⚠️ Manus-Specific Variables (Not Available on Railway)

The following variables are Manus platform-specific and will NOT work on Railway:

### OAuth (Requires Alternative)
```
VITE_APP_ID=
OAUTH_SERVER_URL=
VITE_OAUTH_PORTAL_URL=
OWNER_OPEN_ID=
OWNER_NAME=
```
**Action Required:** Implement alternative authentication (e.g., NextAuth.js, Passport.js, or custom JWT auth)

### Built-in Services (Requires Alternative)
```
BUILT_IN_FORGE_API_URL=
BUILT_IN_FORGE_API_KEY=
VITE_FRONTEND_FORGE_API_KEY=
VITE_FRONTEND_FORGE_API_URL=
```
**Action Required:** Replace with:
- **LLM:** OpenAI API, Anthropic Claude, or similar
- **Storage:** AWS S3, Cloudinary, or Railway volumes
- **Notifications:** SendGrid, Twilio, or custom implementation

### Analytics (Optional)
```
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
```
**Action Required:** Use Google Analytics, Plausible, or remove analytics features

## Setting Environment Variables in Railway

1. Go to your Railway project dashboard
2. Click on your service
3. Go to "Variables" tab
4. Click "New Variable"
5. Add each variable one by one

## Critical Changes Needed for Railway

### 1. Authentication System
The current Manus OAuth will not work. You need to:
- Remove Manus OAuth dependencies from `server/_core/auth.ts`
- Implement alternative auth (email/password, Google OAuth, etc.)
- Update user registration and login flows

### 2. File Storage
The current S3 storage uses Manus credentials. You need to:
- Set up your own AWS S3 bucket or use Railway volumes
- Update `server/storage.ts` with your S3 credentials
- Or switch to Cloudinary/Uploadcare

### 3. LLM Integration
The current LLM uses Manus API. You need to:
- Get OpenAI API key or similar
- Update `server/_core/llm.ts` to use your API
- Or remove AI features

### 4. Database Migration
Railway uses PostgreSQL by default, but this app uses MySQL:
- Option 1: Use Railway MySQL (recommended)
- Option 2: Convert schema to PostgreSQL (requires code changes)
- Option 3: Use external MySQL (PlanetScale, AWS RDS)

## Deployment Checklist

- [ ] Set up Railway MySQL database
- [ ] Add all environment variables in Railway dashboard
- [ ] Implement alternative authentication
- [ ] Set up your own S3 or file storage
- [ ] Replace Manus LLM with OpenAI or remove AI features
- [ ] Update OAuth callback URLs
- [ ] Test database connection
- [ ] Run database migrations (`pnpm db:push`)
- [ ] Deploy and test

## Support

For Railway-specific issues, refer to:
- Railway Documentation: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
