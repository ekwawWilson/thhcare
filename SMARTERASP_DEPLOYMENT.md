# SmarterASP.NET Deployment - Ready to Deploy!

## ✅ Setup Complete

All required files have been configured according to SmarterASP.NET's official Next.js deployment guide:

- ✅ [app.js](app.js) - Custom server entry point
- ✅ [web.config](web.config) - IIS/iisnode configuration
- ✅ [.github/workflows/deploy.yml](.github/workflows/deploy.yml) - GitHub Actions workflow
- ✅ Database configured (MySQL)
- ✅ Environment variables ready

## 🚀 Deploy Now

### Step 1: Add GitHub Secrets

Go to: https://github.com/ekwawWilson/thhcare/settings/secrets/actions

Add these secrets (click "New repository secret" for each):

**Required:**
```
DATABASE_URL = mysql://aad740_thhcare:Year22026@mysql5036.site4now.net:3306/db_aad740_thhcare
JWT_SECRET = [Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"]
NEXT_PUBLIC_APP_URL = https://yourdomain.com
FTP_SERVER = [Get from SmarterASP.NET Control Panel]
FTP_USERNAME = [Get from SmarterASP.NET Control Panel]
FTP_PASSWORD = [Get from SmarterASP.NET Control Panel]
```

**Optional (for email):**
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-gmail-app-password
EMAIL_FROM = noreply@transformationhomehealth.com
```

### Step 2: Get FTP Credentials

1. Login to SmarterASP.NET Control Panel
2. Navigate to **FTP Accounts** or **Hosting Spaces**
3. Copy:
   - FTP Server (e.g., `ftp.yourdomain.com`)
   - FTP Username
   - FTP Password

### Step 3: Push to GitHub (Triggers Deployment)

```bash
# Add all files
git add .

# Commit changes
git commit -m "Configure deployment for SmarterASP.NET"

# Push to GitHub (this automatically triggers deployment)
git push origin master
```

### Step 4: Monitor Deployment

Watch your deployment at:
https://github.com/ekwawWilson/thhcare/actions

The deployment will:
1. ✅ Build Next.js application
2. ✅ Generate Prisma client
3. ✅ Package all files (excluding node_modules)
4. ✅ Deploy via FTP to your server

### Step 5: Install Dependencies on Server

After FTP deployment completes, you MUST install dependencies on the server:

**Option 1 - Control Panel Terminal (Recommended):**
1. Login to SmarterASP.NET Control Panel
2. Find Terminal/Console (see SERVER_SETUP_GUIDE.md for help)
3. Run these commands:
   ```bash
   cd h:\root\home\arochabrace-001\www\homehealth
   npm install --production
   npx prisma generate
   npx prisma db push
   ```

**Option 2 - Use Installation Script:**
```bash
cd h:\root\home\arochabrace-001\www\homehealth
bash install-deps.sh
npx prisma db push
```

**Option 3 - Contact Support:**
If you can't find terminal access, contact SmarterASP.NET support and ask them to run:
```bash
cd h:\root\home\arochabrace-001\www\homehealth && npm install --production && npx prisma generate && npx prisma db push
```

**Option 4 - Deploy node_modules via FTP (Slow but Works):**
If support can't help and you have no terminal access, use the alternative workflow:
- See **[DEPLOY_WITH_MODULES.md](DEPLOY_WITH_MODULES.md)** for instructions
- Takes 20-40 minutes but uploads everything including node_modules
- No npm install needed on server!

### Step 6: Configure SmarterASP.NET Control Panel

1. **Enable Node.js:**
   - Go to Application Settings
   - Enable Node.js runtime
   - Set Node.js version to 18.x or higher

2. **Set Environment Variable:**
   - Add environment variable: `PORT`
   - Value: `3000` (or port specified by SmarterASP.NET)

3. **Restart Application:**
   - Click "Restart Application" or "Recycle Application Pool"

### Step 7: Verify Deployment

Visit your domain:
- Main site: `https://yourdomain.com`
- API test: `https://yourdomain.com/api/contact`
- Admin panel: `https://yourdomain.com/admin`

## 📋 What Gets Deployed

The GitHub Actions workflow automatically deploys:

```
✅ .next/              (Built Next.js app)
✅ public/             (Static assets: images, fonts)
✅ prisma/             (Database schema)
✅ app.js              (Server entry point)
✅ web.config          (IIS configuration)
✅ .env                (Generated from GitHub Secrets)
✅ package.json        (Dependencies list)
✅ package-lock.json   (Locked versions)
✅ install-deps.sh     (Installation script)
```

**Note:** `node_modules` is NOT deployed via FTP (too slow). You'll run `npm install` on the server instead.

## 🔄 Future Deployments

Every time you push to GitHub, it will automatically:
1. Build the latest code
2. Deploy to your server
3. Your site updates automatically

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Your changes"
git push origin master
# Deployment happens automatically!
```

## 🐛 Troubleshooting

### Deployment Failed

1. Check GitHub Actions logs: https://github.com/ekwawWilson/thhcare/actions
2. Verify all secrets are added correctly
3. Check FTP credentials are correct

### Site Not Loading

1. Verify Node.js is enabled in SmarterASP.NET control panel
2. Check PORT environment variable is set
3. Restart application in control panel
4. Check error logs in control panel

### Database Connection Error

1. Verify DATABASE_URL secret is correct
2. Run `npx prisma db push` via SSH or control panel terminal
3. Check database is accessible from server

### 500 Internal Server Error

1. Check Node.js version is 18.x or higher
2. Verify web.config points to `app.js`
3. Check application logs in control panel
4. Restart application

## 📞 Support

**SmarterASP.NET:**
- Live Chat: In control panel (bottom right)
- Email: support@smarterasp.net
- Ticket: Control Panel → Support

**GitHub Actions:**
- https://github.com/ekwawWilson/thhcare/actions

## ✨ Next Steps

1. ✅ Files are configured and ready
2. ⏳ Add GitHub Secrets
3. ⏳ Push to GitHub
4. ⏳ Enable Node.js in SmarterASP.NET
5. ⏳ Visit your live site!

Good luck with your deployment! 🚀
