# 🚀 GitHub Deployment Guide - SmarterASP.NET

## Overview

This guide will help you set up automatic deployment from GitHub to SmarterASP.NET. Every time you push code to GitHub, it will automatically build and deploy to your server.

**Your Repository:** https://github.com/ekwawWilson/thhcare.git

---

## ⚙️ Setup Steps

### Step 1: Configure GitHub Secrets

GitHub Secrets store sensitive information like passwords and API keys securely.

1. **Go to your GitHub repository:**
   - Visit: https://github.com/ekwawWilson/thhcare
   - Click on **Settings** tab
   - In the left sidebar, click **Secrets and variables** → **Actions**
   - Click **New repository secret**

2. **Add the following secrets:**

#### Database Configuration
```
Name: DATABASE_URL
Value: mysql://aad740_thhcare:Year22026@mysql5036.site4now.net:3306/db_aad740_thhcare
```

#### Security
```
Name: JWT_SECRET
Value: havenbridge-production-secret-2025-CHANGE-THIS
```
⚠️ **Important:** Change this to a strong random string!

#### Application URL
```
Name: NEXT_PUBLIC_APP_URL
Value: https://yourdomain.com
```
Replace `yourdomain.com` with your actual domain

#### Email Configuration
```
Name: SMTP_HOST
Value: smtp.gmail.com

Name: SMTP_PORT
Value: 587

Name: SMTP_USER
Value: your-email@gmail.com

Name: SMTP_PASS
Value: your-app-password

Name: EMAIL_FROM
Value: noreply@transformationhomehealth.com
```

#### FTP Credentials (from SmarterASP.NET Control Panel)
```
Name: FTP_SERVER
Value: ftp.yourdomain.com
(Get this from SmarterASP.NET control panel)

Name: FTP_USERNAME
Value: your-ftp-username

Name: FTP_PASSWORD
Value: your-ftp-password
```

#### SSH Credentials (Optional but Recommended)
```
Name: SSH_HOST
Value: yourdomain.com or IP address

Name: SSH_USERNAME
Value: your-ssh-username

Name: SSH_PASSWORD
Value: your-ssh-password

Name: SSH_PORT
Value: 22

Name: DEPLOY_PATH
Value: /wwwroot
```

**Note:** If SmarterASP.NET doesn't provide SSH access, the deployment will use FTP only. You'll need to manually run `npm install` on the server the first time.

---

### Step 2: Get SmarterASP.NET Credentials

1. **Login to SmarterASP.NET Control Panel:**
   - Go to https://www.smarterasp.net/
   - Login to your account

2. **Get FTP Credentials:**
   - Navigate to **FTP Accounts** or **Hosting Spaces**
   - Note down:
     - FTP Server (e.g., `ftp.yourdomain.com`)
     - FTP Username
     - FTP Password
     - Port (usually 21)

3. **Get SSH Credentials (if available):**
   - Navigate to **SSH Access** or **Advanced Features**
   - Enable SSH if available
   - Note down SSH credentials

4. **Check Deployment Path:**
   - Common paths: `/wwwroot`, `/httpdocs`, or `/`
   - Check in File Manager to confirm

---

### Step 3: Update .gitignore

Make sure sensitive files are not committed to GitHub:

```bash
# Check .gitignore includes these
cat .gitignore
```

Should include:
```
.env
.env.local
.env.production
node_modules/
.next/
```

---

### Step 4: Commit and Push Recent Changes

You have uncommitted changes. Let's commit them:

```bash
# Stage all changes
git add .

# Commit with message
git commit -m "Configure MySQL database and update UI components"

# Push to GitHub
git push origin master
```

---

### Step 5: Monitor Deployment

1. **Watch GitHub Actions:**
   - Go to your repository
   - Click **Actions** tab
   - You'll see your deployment running
   - Click on the workflow run to see details

2. **Deployment Status:**
   - ✅ Green checkmark = Success
   - ❌ Red X = Failed (click to see error logs)
   - 🟡 Yellow circle = In progress

3. **First Deployment:**
   - Takes 3-5 minutes
   - Subsequent deployments are faster

---

## 🔄 How It Works

### Automatic Deployment Flow

```
1. You push code to GitHub (git push)
   ↓
2. GitHub Actions triggers automatically
   ↓
3. Workflow runs on GitHub's servers:
   - Checks out your code
   - Installs dependencies
   - Generates Prisma client
   - Builds Next.js app
   - Creates deployment package
   ↓
4. Deploys via FTP to SmarterASP.NET
   ↓
5. (Optional) Runs npm install via SSH
   ↓
6. Your site is live! 🎉
```

### What Gets Deployed

- `.next/` - Built application
- `public/` - Static assets
- `prisma/` - Database schema
- `package.json` & `package-lock.json` - Dependencies
- `.env` - Environment variables (generated from secrets)
- Configuration files

### What Doesn't Get Deployed

- `node_modules/` - Installed on server
- `.git/` - Git history
- `.env.local` - Local environment
- Development files

---

## 📝 Usage Instructions

### Deploy New Changes

```bash
# 1. Make your changes
# Edit files...

# 2. Test locally
npm run dev

# 3. Build and test
npm run build
npm start

# 4. Commit changes
git add .
git commit -m "Describe your changes"

# 5. Push to GitHub (triggers auto-deploy)
git push origin master
```

That's it! Deployment happens automatically.

### Manual Deployment

You can also trigger deployment manually:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Click **Deploy to SmarterASP.NET** workflow
4. Click **Run workflow** button
5. Select branch (master)
6. Click **Run workflow**

---

## 🔧 Configuration Options

### Change Deployment Branch

Edit `.github/workflows/deploy.yml`:

```yaml
on:
  push:
    branches:
      - main        # Change to your branch name
      - production  # Add multiple branches
```

### Skip Deployment

Add `[skip ci]` to your commit message:

```bash
git commit -m "Update README [skip ci]"
```

This commits changes without triggering deployment.

### Deploy Only Specific Files

Edit the `exclude` section in `.github/workflows/deploy.yml`:

```yaml
exclude: |
  **/.git*
  **/node_modules/**
  **/*.md  # Exclude markdown files
```

---

## 🐛 Troubleshooting

### Issue: Deployment Failed - Build Error

**Solution:**
1. Check GitHub Actions logs for errors
2. Fix errors locally
3. Test with `npm run build`
4. Commit and push again

### Issue: FTP Connection Failed

**Symptoms:** Error: "Failed to connect to FTP server"

**Solution:**
1. Verify FTP credentials in GitHub Secrets
2. Check FTP server address is correct
3. Ensure FTP port is 21
4. Test FTP connection using FileZilla

### Issue: SSH Connection Failed

**Symptoms:** SSH step fails in workflow

**Solution:**
1. Verify SmarterASP.NET supports SSH
2. Check SSH credentials in GitHub Secrets
3. If SSH not available, remove SSH step from workflow
4. Install dependencies manually via control panel

### Issue: Database Connection Error

**Symptoms:** Application crashes with database error

**Solution:**
1. Verify `DATABASE_URL` secret is correct
2. Test database connection from SmarterASP.NET control panel
3. Run `npx prisma db push` manually via SSH/control panel

### Issue: Environment Variables Not Working

**Solution:**
1. Check all secrets are added in GitHub
2. Secret names must match exactly (case-sensitive)
3. Re-run workflow after adding/updating secrets

### Issue: Files Not Updating on Server

**Solution:**
1. Clear browser cache
2. Check FTP deployment logs in GitHub Actions
3. Manually delete `.next/` folder on server
4. Re-run deployment

---

## 🔐 Security Best Practices

### 1. Protect Your Secrets

- ✅ Never commit `.env` files to GitHub
- ✅ Use GitHub Secrets for all sensitive data
- ✅ Rotate passwords regularly
- ✅ Use strong JWT_SECRET

### 2. Generate Strong JWT Secret

```bash
# Generate a random secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Use the output as your JWT_SECRET.

### 3. Secure Your Repository

- Enable branch protection for `master`
- Require pull request reviews
- Enable dependency alerts
- Set repository to private if needed

### 4. Monitor Deployments

- Review deployment logs regularly
- Set up GitHub notifications
- Monitor application errors

---

## 🎯 Advanced Configuration

### Multi-Environment Setup

Create separate workflows for staging and production:

**`.github/workflows/deploy-staging.yml`**
```yaml
name: Deploy to Staging
on:
  push:
    branches:
      - develop
```

**`.github/workflows/deploy-production.yml`**
```yaml
name: Deploy to Production
on:
  push:
    branches:
      - master
```

### Add Build Notifications

Get notified when deployments succeed or fail:

Add to workflow:
```yaml
- name: Notify on Success
  if: success()
  run: echo "Deployment successful!"

- name: Notify on Failure
  if: failure()
  run: echo "Deployment failed!"
```

### Run Tests Before Deploy

Add before the deploy step:
```yaml
- name: Run tests
  run: npm test

- name: Run linting
  run: npm run lint
```

---

## 📊 Monitoring Deployment

### Check Deployment Status

1. **GitHub Actions Page:**
   - https://github.com/ekwawWilson/thhcare/actions

2. **View Logs:**
   - Click on workflow run
   - Click on job name
   - See detailed logs for each step

3. **Deployment History:**
   - See all past deployments
   - Check which commits were deployed
   - Review deployment duration

### Verify Deployment

After deployment completes:

1. **Visit your website:** `https://yourdomain.com`
2. **Check pages load correctly**
3. **Test API endpoints:** `https://yourdomain.com/api/contact`
4. **Test admin panel:** `https://yourdomain.com/admin`
5. **Check database connections work**

---

## 🚨 Initial Deployment Checklist

Before first deployment:

- [ ] All GitHub Secrets configured
- [ ] FTP credentials verified
- [ ] Database is accessible
- [ ] `.gitignore` updated
- [ ] Code committed to GitHub
- [ ] Workflow file in `.github/workflows/`

After first deployment:

- [ ] Website loads at domain
- [ ] Images display correctly
- [ ] API routes respond
- [ ] Database queries work
- [ ] Admin login functional
- [ ] Forms submit successfully
- [ ] SSL certificate active (HTTPS)

---

## 📞 Support Resources

**SmarterASP.NET:**
- Support: https://www.smarterasp.net/support
- Knowledge Base: Check control panel
- Live Chat: Available in control panel

**GitHub Actions:**
- Documentation: https://docs.github.com/en/actions
- Community Forum: https://github.community/

**Your Repository:**
- https://github.com/ekwawWilson/thhcare

---

## 🎉 Quick Reference Commands

```bash
# Check git status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your message"

# Push and trigger deployment
git push origin master

# View remote repository
git remote -v

# Pull latest changes
git pull origin master

# Check deployment logs
# Visit: https://github.com/ekwawWilson/thhcare/actions
```

---

## ✨ Next Steps

1. **Complete Step 1:** Add all GitHub Secrets
2. **Complete Step 2:** Get SmarterASP.NET credentials
3. **Complete Step 3:** Verify .gitignore
4. **Complete Step 4:** Commit and push changes
5. **Complete Step 5:** Monitor first deployment

Good luck with your GitHub deployment! 🚀
