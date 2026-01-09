# Railway Deployment Guide

This guide will help you deploy the YANGTZE SNC Fantasy Cricket platform to Railway.

## Prerequisites

1. A Railway account (sign up at https://railway.app)
2. A MySQL database (Railway provides MySQL add-on)
3. A Cricket API key from https://cricketdata.org

## Step 1: Prepare Your Database

1. In Railway, create a new MySQL database service
2. Copy the `DATABASE_URL` connection string from Railway
3. The format should be: `mysql://user:password@host:port/database_name`

## Step 2: Set Environment Variables in Railway

Add the following environment variables in your Railway project settings:

```
DATABASE_URL=mysql://user:password@host:port/database_name
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
CRICKET_API_KEY=your-cricket-api-key-from-cricketdata-org
NODE_ENV=production
PORT=3000
```

**Important:** Generate a strong random string for `JWT_SECRET`. You can use:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 3: Deploy to Railway

### Option A: Deploy from GitHub

1. Push your code to GitHub
2. In Railway, click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will automatically detect the configuration and deploy

### Option B: Deploy using Railway CLI

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Initialize project:
   ```bash
   railway init
   ```

4. Deploy:
   ```bash
   railway up
   ```

## Step 4: Run Database Migrations

After deployment, run the database migrations:

```bash
railway run pnpm db:push
```

Or connect to your Railway project and run:
```bash
pnpm db:push
```

## Step 5: Verify Deployment

1. Railway will provide you with a public URL (e.g., `your-app.up.railway.app`)
2. Visit the URL and test:
   - Homepage loads correctly
   - User registration works
   - User login works
   - Team creation works
   - Contest system works

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Ensure MySQL service is running in Railway
- Check that database migrations have been applied

### Build Failures
- Check Railway build logs for specific errors
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Runtime Errors
- Check Railway deployment logs
- Verify all environment variables are set correctly
- Ensure `JWT_SECRET` is properly configured

## Custom Domain (Optional)

1. In Railway project settings, go to "Settings" → "Domains"
2. Click "Add Domain"
3. Follow instructions to configure DNS records
4. Railway will automatically provision SSL certificate

## Monitoring

Railway provides built-in monitoring:
- View logs in real-time
- Monitor resource usage (CPU, Memory)
- Set up alerts for downtime

## Cost Optimization

- Railway offers $5/month free tier
- Monitor your usage to stay within free tier limits
- Consider upgrading if you need more resources

## Support

For Railway-specific issues, visit:
- Railway Documentation: https://docs.railway.app
- Railway Discord: https://discord.gg/railway

For application issues, check the application logs in Railway dashboard.
