# 🔧 Server Setup Guide - Running npm install on SmarterASP.NET

## Quick Decision Tree

**Do you have SSH access?**
- ✅ Yes → Use Option 1 (SSH)
- ❌ No → Continue below

**Does File Manager have a Terminal button?**
- ✅ Yes → Use Option 2 (Control Panel Terminal)
- ❌ No → Continue below

**Want the easiest option (slower)?**
- ✅ Yes → Use Option 3 (Upload node_modules)
- ❌ No → Use Option 4 (Contact Support)

---

## Option 1: SSH Access ⚡ (Fastest)

### Check if you have SSH:
1. Login to SmarterASP.NET Control Panel
2. Look for: **SSH**, **Terminal**, **Shell**, or **Command Line**

### If SSH is available:

**Connect via SSH:**
```bash
ssh your-username@yourdomain.com
# Enter password when prompted
```

**Run setup commands:**
```bash
# Navigate to your app
cd /wwwroot

# Install dependencies
npm install --production

# Generate Prisma client
npx prisma generate

# Initialize database
npx prisma db push

# Verify installation
ls -la node_modules/@prisma/client
```

**Check Node.js version:**
```bash
node --version  # Should be 14.x or higher
npm --version
```

---

## Option 2: Control Panel Terminal 🖥️ (Easy)

### Find the Terminal:

1. **Login to SmarterASP.NET**
2. **Go to File Manager** or **Files** section
3. **Look for terminal options:**
   - Button labeled "Terminal", "Console", "CMD"
   - Right-click menu option
   - Advanced tools section

### Common locations:
- **Plesk:** Files → File Manager → (Terminal icon at top)
- **cPanel:** File Manager → (Terminal button)
- **Custom Panel:** Tools → Terminal or Advanced → Console

### Run commands:
```bash
cd /wwwroot
npm install --production
npx prisma generate
npx prisma db push
```

---

## Option 3: Upload node_modules 📦 (Slowest but Works)

### If no terminal access, upload manually:

**Step 1: Install locally**
```bash
cd "/home/wilsonjunior/Documents/Transformation Home Health LLC/havenbridge-platform"

# Clean install
rm -rf node_modules
npm install --production

# Generate Prisma
npx prisma generate
```

**Step 2: Create deployment package**
```bash
# Create a folder with only node_modules
mkdir server-dependencies
cp -r node_modules server-dependencies/
cp -r node_modules/.prisma server-dependencies/node_modules/ 2>/dev/null || true
```

**Step 3: Upload via FTP**

Using FileZilla:
1. Connect to your FTP server
2. Navigate to `/wwwroot/`
3. Upload the `node_modules/` folder
4. ⏰ This takes 15-30 minutes due to many files

**Optional: Create ZIP first**
```bash
cd server-dependencies
zip -r ../node_modules.zip node_modules
```
Then:
1. Upload `node_modules.zip` via FTP
2. Extract on server using File Manager
3. Faster than uploading individual files

---

## Option 4: Contact Support 💬 (Recommended if stuck)

### Request help from SmarterASP.NET:

**Via Live Chat:**
1. Login to control panel
2. Look for chat icon (usually bottom right)
3. Say: "I need to run npm install on my server for a Node.js app"

**Via Email:**
```
To: support@smarterasp.net
Subject: Run npm commands on my server

Hi SmarterASP.NET Support,

I've deployed a Next.js application and need to run these commands:

cd /wwwroot
npm install --production
npx prisma generate
npx prisma db push

Can you either:
1. Run these for me, or
2. Enable SSH/terminal access for my account

Account: [your username/email]
Domain: [your domain]

Thank you!
```

**Via Support Ticket:**
1. Login to control panel
2. Support → Create Ticket
3. Use same message as above

---

## Option 5: Check for Kudu Console 🔍

### If using Windows hosting:

**Try Kudu URL:**
```
https://yourdomain.scm.azurewebsites.net/DebugConsole
```
Or:
```
https://yourdomain.scm.smarterasp.net/DebugConsole
```

**In Control Panel:**
- Look for **Advanced Tools**
- Look for **Kudu Services**
- Look for **Debug Console**

**If Kudu works:**
1. Navigate to site folder
2. Run PowerShell or CMD commands:
```powershell
cd D:\home\site\wwwroot
npm install --production
npx prisma generate
npx prisma db push
```

---

## 🔍 Still Can't Find Terminal Access?

### Check These Locations in Control Panel:

**Common Panel Names:**
- [ ] SSH Access
- [ ] Terminal
- [ ] Shell Access
- [ ] Command Line
- [ ] Console
- [ ] Web SSH
- [ ] Remote Access
- [ ] Advanced Tools
- [ ] Kudu Services
- [ ] Debug Console

**In File Manager:**
- [ ] Terminal button (top toolbar)
- [ ] Console option (right-click menu)
- [ ] Advanced button
- [ ] Tools menu

**In Settings/Advanced:**
- [ ] SSH Settings
- [ ] Developer Tools
- [ ] Advanced Features
- [ ] Application Settings

---

## 📋 After Running npm install

### Verify Installation:

**Check files exist:**
```bash
ls -la /wwwroot/node_modules
ls -la /wwwroot/node_modules/@prisma/client
```

**Check package versions:**
```bash
npm list --depth=0
```

**Test Prisma:**
```bash
npx prisma --version
```

### Restart Application:

1. **In Control Panel:**
   - Look for **Restart Application**
   - Or **Recycle Application Pool**
   - Or **Restart Node.js App**

2. **Test your site:**
   - Visit: `https://yourdomain.com`
   - Check if pages load
   - Test database connections

---

## 🆘 Troubleshooting

### npm: command not found

**Solution:**
- Node.js not installed or not in PATH
- Contact support to install Node.js
- Check Node.js version requirements

### Permission Denied

**Solution:**
```bash
# Try with sudo (if available)
sudo npm install --production

# Or change ownership
sudo chown -R $USER:$USER /wwwroot
```

### Out of Memory

**Solution:**
```bash
# Increase memory limit
node --max-old-space-size=4096 $(which npm) install --production
```

### Prisma Error

**Solution:**
```bash
# Generate Prisma client manually
npx prisma generate

# Check DATABASE_URL
echo $DATABASE_URL
```

---

## ✅ Complete Setup Checklist

After deployment, verify:

- [ ] `node_modules/` folder exists
- [ ] `node_modules/@prisma/client/` exists
- [ ] Database tables created
- [ ] Website loads at domain
- [ ] API routes work
- [ ] Admin panel accessible
- [ ] No console errors

---

## 🎯 Quick Reference

**Essential Commands:**
```bash
# Navigate to app
cd /wwwroot

# Install dependencies
npm install --production

# Generate Prisma
npx prisma generate

# Push database schema
npx prisma db push

# Restart app (varies by panel)
# Check control panel for restart option
```

**If all else fails:**
1. Upload `node_modules` via FTP
2. Contact SmarterASP.NET support
3. Request SSH access for future

---

## 📞 SmarterASP.NET Support Contacts

- **Live Chat:** In control panel (bottom right)
- **Email:** support@smarterasp.net
- **Ticket:** Control Panel → Support → New Ticket
- **Phone:** Check control panel for number
- **Knowledge Base:** https://www.smarterasp.net/support

They're usually very helpful with Node.js deployments!

---

**Need help choosing an option?**
Start with Option 2 (Control Panel Terminal) - it's the easiest if available.
If not, contact support (Option 4) - they can help quickly.
