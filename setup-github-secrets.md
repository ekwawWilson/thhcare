# 🔑 GitHub Secrets Setup Helper

## Copy-Paste Values for GitHub Secrets

Visit: https://github.com/ekwawWilson/thhcare/settings/secrets/actions

---

### Database Configuration

**Secret Name:** `DATABASE_URL`
**Value:**
```
mysql://aad740_thhcare:Year22026@mysql5036.site4now.net:3306/db_aad740_thhcare
```

---

### Security (Generate New!)

**Secret Name:** `JWT_SECRET`
**Value:** Run this command first:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Then copy the output and use it as the value.

---

### Application URL

**Secret Name:** `NEXT_PUBLIC_APP_URL`
**Value:** (Replace with your actual domain)
```
https://yourdomain.com
```

---

### FTP Configuration

Get these from SmarterASP.NET Control Panel → FTP Accounts:

**Secret Name:** `FTP_SERVER`
**Value:** (Example - replace with yours)
```
ftp.yourdomain.com
```

**Secret Name:** `FTP_USERNAME`
**Value:**
```
your-ftp-username-here
```

**Secret Name:** `FTP_PASSWORD`
**Value:**
```
your-ftp-password-here
```

---

### Email Configuration (Optional)

**Secret Name:** `SMTP_HOST`
**Value:**
```
smtp.gmail.com
```

**Secret Name:** `SMTP_PORT`
**Value:**
```
587
```

**Secret Name:** `SMTP_USER`
**Value:**
```
your-email@gmail.com
```

**Secret Name:** `SMTP_PASS`
**Value:**
```
your-gmail-app-password
```
*Note: Generate app password at https://myaccount.google.com/apppasswords*

**Secret Name:** `EMAIL_FROM`
**Value:**
```
noreply@transformationhomehealth.com
```

---

### SSH Configuration (Optional - if available)

**Secret Name:** `SSH_HOST`
**Value:**
```
yourdomain.com
```

**Secret Name:** `SSH_USERNAME`
**Value:**
```
your-ssh-username
```

**Secret Name:** `SSH_PASSWORD`
**Value:**
```
your-ssh-password
```

**Secret Name:** `SSH_PORT`
**Value:**
```
22
```

**Secret Name:** `DEPLOY_PATH`
**Value:**
```
/wwwroot
```

---

## ✅ Quick Checklist

Mark each as you add it to GitHub:

**Essential (Required):**
- [ ] DATABASE_URL
- [ ] JWT_SECRET
- [ ] NEXT_PUBLIC_APP_URL
- [ ] FTP_SERVER
- [ ] FTP_USERNAME
- [ ] FTP_PASSWORD

**Email (Optional but recommended):**
- [ ] SMTP_HOST
- [ ] SMTP_PORT
- [ ] SMTP_USER
- [ ] SMTP_PASS
- [ ] EMAIL_FROM

**SSH (Optional - only if available):**
- [ ] SSH_HOST
- [ ] SSH_USERNAME
- [ ] SSH_PASSWORD
- [ ] SSH_PORT
- [ ] DEPLOY_PATH

---

## 🎯 After Adding All Secrets

Run these commands:

```bash
# Add GitHub deployment files
git add .github/ GITHUB_DEPLOYMENT.md QUICK_SETUP.md

# Commit
git commit -m "Add GitHub deployment workflow"

# Push (triggers first deployment)
git push origin master
```

Then watch your deployment at:
https://github.com/ekwawWilson/thhcare/actions

---

## 📝 Notes

- Secrets are encrypted and hidden after saving
- You can update secrets anytime
- Updating a secret requires re-running the workflow
- Never commit actual secret values to your code
