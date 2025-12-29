# Railway Deployment Guide for YANGTZE SNC

This guide will help you deploy the YANGTZE SNC Fantasy Cricket platform to Railway.

## ⚠️ Important Warning

**This application was built for the Manus platform and uses Manus-specific services.** Deploying to Railway will require significant modifications:

1. **Authentication:** Manus OAuth must be replaced with alternative auth
2. **File Storage:** Manus S3 must be replaced with your own storage
3. **LLM Services:** Manus AI APIs must be replaced with OpenAI or similar
4. **Database:** Ensure MySQL compatibility or convert to PostgreSQL

**Recommended:** Use Manus built-in hosting for zero-configuration deployment.

---

## Prerequisites

- GitHub account
- Railway account (sign up at https://railway.app)
- Cricket API key (from https://cricketdata.org or similar)
- AWS S3 account (for file storage) OR Cloudinary account
- OpenAI API key (if using AI features) OR remove AI features

---

## Step 1: Push Code to GitHub

### 1.1 Initialize Git Repository

```bash
cd /path/to/yangtze-snc-fantasy-cricket
git init
git add .
git commit -m "Initial commit - YANGTZE SNC Fantasy Cricket"
```

### 1.2 Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `yangtze-snc-fantasy-cricket`
3. **Do NOT** initialize with README, .gitignore, or license

### 1.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/yangtze-snc-fantasy-cricket.git
git branch -M main
git push -u origin main
```

---

## Step 2: Set Up Railway Project

### 2.1 Create New Project

1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `yangtze-snc-fantasy-cricket` repository
5. Railway will automatically detect the project

### 2.2 Add MySQL Database

1. In your Railway project, click "New"
2. Select "Database" → "MySQL"
3. Railway will create a MySQL instance
4. Copy the `DATABASE_URL` from the MySQL service variables

---

## Step 3: Configure Environment Variables

### 3.1 Add Required Variables

Go to your service → Variables tab and add:

#### Database
```
DATABASE_URL=<copy from Railway MySQL service>
```

#### Security
```
JWT_SECRET=<generate with: openssl rand -base64 32>
```

#### Cricket API
```
CRICKET_API_KEY=<your cricket API key>
```

#### Application
```
VITE_APP_TITLE=YANGTZE SNC - Learn Fantasy Cricket
VITE_APP_LOGO=/logo-main.png
PORT=3000
NODE_ENV=production
```

### 3.2 Optional Variables

If you're keeping analytics:
```
VITE_ANALYTICS_ENDPOINT=<your analytics endpoint>
VITE_ANALYTICS_WEBSITE_ID=<your website ID>
```

---

## Step 4: Code Modifications Required

### 4.1 Remove Manus OAuth (Critical)

The current authentication uses Manus OAuth which won't work on Railway.

**Option A: Implement Email/Password Auth**

1. Install dependencies:
```bash
pnpm add bcryptjs @types/bcryptjs
```

2. Update `server/_core/auth.ts`:
   - Remove Manus OAuth imports
   - Implement email/password login
   - Update session management

3. Update `client/src/contexts/AuthContext.tsx`:
   - Remove Manus OAuth redirect
   - Implement email/password forms

**Option B: Use NextAuth.js**

1. Install NextAuth:
```bash
pnpm add next-auth
```

2. Configure providers (Google, GitHub, Email, etc.)
3. Update authentication flow throughout the app

### 4.2 Replace File Storage

Update `server/storage.ts`:

**Option A: Use Your Own S3**
```typescript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function storagePut(key: string, data: Buffer, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    Body: data,
    ContentType: contentType,
  });
  
  await s3Client.send(command);
  return {
    key,
    url: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${key}`,
  };
}
```

**Option B: Use Cloudinary**
```bash
pnpm add cloudinary
```

### 4.3 Replace LLM Services (If Used)

Update `server/_core/llm.ts`:

```typescript
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function invokeLLM({ messages }: { messages: any[] }) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages,
  });
  
  return response;
}
```

Add environment variable:
```
OPENAI_API_KEY=<your OpenAI API key>
```

### 4.4 Remove Manus-Specific Code

Files to review and modify:
- `server/_core/auth.ts` - Remove Manus OAuth
- `server/_core/llm.ts` - Replace with OpenAI
- `server/_core/notification.ts` - Implement email notifications
- `server/storage.ts` - Replace with your S3
- `client/src/contexts/AuthContext.tsx` - Update auth flow

---

## Step 5: Deploy

### 5.1 Trigger Deployment

1. Push your code changes to GitHub:
```bash
git add .
git commit -m "Configure for Railway deployment"
git push
```

2. Railway will automatically detect changes and redeploy

### 5.2 Run Database Migrations

Railway will run `pnpm db:push` during build (configured in `railway.json`)

### 5.3 Monitor Deployment

1. Go to Railway dashboard
2. Click on your service
3. View "Deployments" tab
4. Check logs for any errors

---

## Step 6: Post-Deployment Configuration

### 6.1 Set Up Custom Domain (Optional)

1. Go to your service → Settings
2. Click "Generate Domain" for a Railway subdomain
3. Or add your custom domain:
   - Click "Custom Domain"
   - Enter your domain
   - Add DNS records as instructed

### 6.2 Configure SSL

Railway automatically provides SSL for all domains.

### 6.3 Test Your Deployment

1. Visit your Railway URL
2. Test user registration (with new auth system)
3. Test team creation
4. Test match selection
5. Verify database connections

---

## Troubleshooting

### Build Fails

**Error:** `pnpm: command not found`
- Railway should auto-detect pnpm from `package.json`
- If not, add `"packageManager": "pnpm@9.0.0"` to `package.json`

**Error:** Database connection failed
- Verify `DATABASE_URL` is correctly set
- Check MySQL service is running
- Ensure database migrations ran successfully

### Runtime Errors

**Error:** OAuth redirect fails
- You haven't replaced Manus OAuth yet
- Follow Step 4.1 to implement alternative auth

**Error:** File upload fails
- You haven't configured S3 or alternative storage
- Follow Step 4.2 to set up storage

**Error:** LLM features don't work
- You haven't replaced Manus AI APIs
- Follow Step 4.3 or remove AI features

### Database Issues

**Error:** `Table doesn't exist`
```bash
# SSH into Railway container (if available) or run locally:
pnpm db:push
```

**Error:** Connection timeout
- Check if Railway MySQL service is running
- Verify `DATABASE_URL` format is correct
- Ensure your IP is not blocked (Railway handles this automatically)

---

## Performance Optimization

### 1. Enable Caching

Add Redis for session storage:
```bash
# In Railway, add Redis database
# Update session management to use Redis
```

### 2. CDN for Static Assets

Use Railway's built-in CDN or Cloudflare:
- Static files are automatically served with caching headers
- Consider moving images to Cloudinary for better performance

### 3. Database Indexing

Ensure indexes are set up in `drizzle/schema.ts`:
```typescript
// Add indexes for frequently queried fields
export const matches = mysqlTable("matches", {
  // ... fields
}, (table) => ({
  statusIdx: index("status_idx").on(table.status),
  matchDateIdx: index("match_date_idx").on(table.matchDate),
}));
```

---

## Monitoring & Logging

### Railway Logs

View logs in Railway dashboard:
1. Go to your service
2. Click "Logs" tab
3. Filter by severity (info, warn, error)

### Error Tracking

Consider adding Sentry:
```bash
pnpm add @sentry/node @sentry/tracing
```

---

## Cost Estimation

Railway pricing (as of 2024):
- **Hobby Plan:** $5/month
  - 512MB RAM
  - Shared CPU
  - 1GB storage
  - Good for development/testing

- **Pro Plan:** $20/month
  - 8GB RAM
  - Dedicated CPU
  - 100GB storage
  - Good for production

- **MySQL Database:** ~$5-10/month additional

**Total estimated cost:** $10-30/month depending on usage

---

## Alternative: Use Manus Hosting

**Recommended approach** - No code changes needed:

1. Click "Publish" button in Manus UI
2. Your site is live at `https://[prefix].manus.space`
3. Add custom domain in Settings → Domains
4. Zero configuration, all services work out of the box

**Benefits:**
- ✅ No code modifications required
- ✅ OAuth, storage, LLM all work automatically
- ✅ Integrated database and secrets management
- ✅ Free SSL and custom domains
- ✅ One-click rollback to any checkpoint

---

## Support

- **Railway Docs:** https://docs.railway.app
- **Railway Discord:** https://discord.gg/railway
- **Railway Status:** https://status.railway.app

For Manus-specific questions:
- **Manus Help:** https://help.manus.im
