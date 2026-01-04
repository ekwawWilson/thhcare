# ⚡ Quick Setup - GitHub Deployment

## 🎯 Your Setup at a Glance

- ✅ **Git Repository:** Already initialized
- ✅ **GitHub Remote:** https://github.com/ekwawWilson/thhcare.git
- ✅ **Deployment Workflow:** Created in `.github/workflows/deploy.yml`
- ✅ **Database:** MySQL configured

## 🚀 5-Minute Setup

### Step 1: Add GitHub Secrets (3 minutes)

Go to: https://github.com/ekwawWilson/thhcare/settings/secrets/actions

Click **"New repository secret"** for each:

| Secret Name | Value | Where to Get It |
|------------|-------|----------------|
| `DATABASE_URL` | `mysql://aad740_thhcare:Year22026@mysql5036.site4now.net:3306/db_aad740_thhcare` | Already configured ✅ |
| `JWT_SECRET` | Generate random string | See below ⬇️ |
| `NEXT_PUBLIC_APP_URL` | `https://yourdomain.com` | Your domain |
| `FTP_SERVER` | `ftp.yourdomain.com` | SmarterASP Control Panel → FTP Accounts |
| `FTP_USERNAME` | Your FTP username | SmarterASP Control Panel → FTP Accounts |
| `FTP_PASSWORD` | Your FTP password | SmarterASP Control Panel → FTP Accounts |
| `SMTP_HOST` | `smtp.gmail.com` | Optional - for emails |
| `SMTP_PORT` | `587` | Optional - for emails |
| `SMTP_USER` | `your-email@gmail.com` | Optional - for emails |
| `SMTP_PASS` | Your app password | Optional - for emails |
| `EMAIL_FROM` | `noreply@transformationhomehealth.com` | Optional - for emails |

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 2: Get SmarterASP.NET FTP Credentials (1 minute)

1. Login to SmarterASP.NET Control Panel
2. Find **FTP Accounts** or **Hosting** section
3. Copy:
   - FTP Server (e.g., `ftp.yourdomain.com`)
   - FTP Username
   - FTP Password

### Step 3: Push to GitHub (1 minute)

```bash
# Stage all files
git add .

# Commit
git commit -m "Setup GitHub deployment workflow"

# Push (this triggers deployment)
git push origin master
```

### Step 4: Watch Deployment

Visit: https://github.com/ekwawWilson/thhcare/actions

You'll see your deployment running!

---

## 📋 Complete Secrets List

Copy this checklist and mark ✅ as you add each secret:

**Required:**
- [ ] DATABASE_URL
- [ ] JWT_SECRET
- [ ] NEXT_PUBLIC_APP_URL
- [ ] FTP_SERVER
- [ ] FTP_USERNAME
- [ ] FTP_PASSWORD

**Optional (for email functionality):**
- [ ] SMTP_HOST
- [ ] SMTP_PORT
- [ ] SMTP_USER
- [ ] SMTP_PASS
- [ ] EMAIL_FROM

**Optional (if SSH available):**
- [ ] SSH_HOST
- [ ] SSH_USERNAME
- [ ] SSH_PASSWORD
- [ ] SSH_PORT (usually 22)
- [ ] DEPLOY_PATH (usually /wwwroot)

---

## 🔄 How Auto-Deployment Works

```
You push to GitHub
    ↓
GitHub Actions runs automatically
    ↓
Builds your Next.js app
    ↓
Uploads to SmarterASP.NET via FTP
    ↓
Your site is updated! 🎉
```

**That's it!** Every `git push` updates your live site.

---

## 🆘 Don't Have SSH Access?

If SmarterASP.NET doesn't provide SSH, use the simpler FTP-only workflow:

```bash
# Rename the FTP-only workflow
mv .github/workflows/deploy-ftp-only.yml.example .github/workflows/deploy.yml

# This will overwrite the current deploy.yml
```

Then after each deployment, run manually on server:
```bash
npm install --production
npx prisma generate
npx prisma db push
```

---

## ✅ Verification Checklist

After first deployment:

- [ ] GitHub Actions shows ✅ green checkmark
- [ ] Visit your website - it loads
- [ ] Images display correctly
- [ ] Test contact form
- [ ] Test admin login
- [ ] Database queries work

---

## 📚 Full Documentation

- **Detailed Guide:** See [GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md)
- **Troubleshooting:** See GITHUB_DEPLOYMENT.md → Troubleshooting section
- **GitHub Actions:** https://github.com/ekwawWilson/thhcare/actions

---

## 🎯 Ready to Deploy?

1. ✅ Add all secrets to GitHub
2. ✅ Push your code
3. ✅ Watch it deploy automatically

**Let's do this!** 🚀

```bash
git add .
git commit -m "Deploy to production"
git push origin master
```
