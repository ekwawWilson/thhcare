# Deploy With node_modules (Alternative Methods)

## When to Use This

Use these methods if:
- ✅ SmarterASP.NET support can't/won't run `npm install` for you
- ✅ You don't have terminal/console access in control panel
- ✅ You can't find a way to install dependencies on the server

## 🎯 RECOMMENDED: Deploy Compressed (Fast & Reliable)

**Best option!** This compresses node_modules into a single zip file before uploading.

### Why This Is Better:
- ✅ Fast upload (5-10 minutes instead of 30-40 minutes)
- ✅ Reliable (no connection resets)
- ✅ Single file upload (node_modules.zip ~50-150 MB)
- ⚠️ Requires extracting zip on server (easy with File Manager)

## 🚀 Method 1: Deploy Compressed (RECOMMENDED)

### Step 1: Run Compressed Deployment

Visit: https://github.com/ekwawWilson/thhcare/actions/workflows/deploy-compressed.yml

1. Click **"Run workflow"** button
2. Select branch: `master` or `main`
3. Click **"Run workflow"** (green button)

### Step 2: Wait (5-10 minutes)

The deployment will:
1. ✅ Build your Next.js app (2-3 minutes)
2. ✅ Compress node_modules into zip (1-2 minutes)
3. ✅ Upload via FTP including node_modules.zip (2-5 minutes)

**Much faster and more reliable!** ⚡

### Step 3: Extract on Server

After deployment completes, extract node_modules on the server:

**Option A - Using File Manager (Easiest):**
1. Login to SmarterASP.NET Control Panel
2. Go to File Manager
3. Navigate to: `h:\root\home\arochabrace-001\www\homehealth\`
4. Find `node_modules.zip`
5. Right-click → **Extract All** or **Extract Here**
6. Wait for extraction to complete (2-5 minutes)
7. Double-click `extract-modules.bat` to run Prisma generate
8. Delete `node_modules.zip` to save space

**Option B - Using Control Panel Terminal:**
```bash
cd h:\root\home\arochabrace-001\www\homehealth
extract-modules.bat
```

**Option C - PowerShell Command:**
```powershell
cd h:\root\home\arochabrace-001\www\homehealth
powershell -Command "Expand-Archive -Path node_modules.zip -DestinationPath . -Force"
npx prisma generate
del node_modules.zip
```

---

## 🐌 Method 2: Deploy Uncompressed (Backup Option)

**Only use if compressed method doesn't work!**

### Step 1: Run Uncompressed Deployment

Visit: https://github.com/ekwawWilson/thhcare/actions/workflows/deploy-with-modules.yml

1. Click **"Run workflow"** button
2. Select branch: `master` or `main`
3. Click **"Run workflow"** (green button)

### Step 2: Wait (30-60 minutes)

This uploads thousands of individual files. It's slow and may fail with connection errors.

⚠️ **Warning:** This method often gets "ECONNRESET" errors. Use Method 1 (compressed) instead!

### Step 4: Configure Server

After deployment completes:

1. **Login to SmarterASP.NET Control Panel**

2. **Enable Node.js:**
   - Go to Application Settings → Application Pools
   - Enable Node.js runtime
   - Set Node.js version to 18.x or higher

3. **Set Environment Variable (if needed):**
   - Some hosts auto-set PORT, but if not:
   - Add environment variable: `PORT`
   - Value: `3000` or `8080`

4. **Restart Application:**
   - Click "Restart Application" or "Recycle Application Pool"

5. **Database Migration (if you can):**
   - If you have ANY terminal access:
     ```bash
     cd h:\root\home\arochabrace-001\www\homehealth
     npx prisma db push
     ```
   - If not, contact support to run just this one command

### Step 5: Verify

Visit your site at your domain. The error should be gone! ✨

## ⚡ For Faster Deployments Later

If you later gain terminal access or support helps you run npm install, switch back to the faster deployment:

**File:** [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

That workflow is 10-20x faster because it doesn't upload node_modules.

## 🐛 Troubleshooting

### FTP Upload Times Out After 30-45 Minutes

If the upload times out, the server might have too many files. Try:

1. **Delete old deployments** via FTP to free up space
2. **Increase timeout** in [deploy-with-modules.yml](.github/workflows/deploy-with-modules.yml#L11):
   ```yaml
   timeout-minutes: 90  # Increase to 90 minutes
   ```
3. **Contact SmarterASP.NET** and ask if they can increase FTP upload limits

### Still Getting "Cannot find module" Error

After deployment completes:

1. **Check node_modules uploaded:**
   - Use FTP client or File Manager
   - Navigate to: `h:\root\home\arochabrace-001\www\homehealth\`
   - Verify `node_modules` folder exists with many subfolders

2. **Check Node.js is enabled:**
   - SmarterASP.NET Control Panel → Application Settings
   - Ensure "Enable Node.js" is checked

3. **Restart application:**
   - Control Panel → Restart Application

### Upload Stuck at 99%

This is normal! FTP can appear stuck while finishing up. If it's been stuck for more than 10 minutes:

1. Check GitHub Actions logs for errors
2. Cancel and re-run the workflow
3. The second time is usually faster (only uploads changed files)

## 📊 Deployment Comparison

| Method | Time | Requires |
|--------|------|----------|
| **deploy.yml** (fast) | 2-5 min | Terminal access or support help |
| **deploy-with-modules.yml** (slow) | 20-40 min | Nothing! Just FTP access |

## 💡 Recommendation

1. **First deployment:** Use `deploy-with-modules.yml` (this file) to get your site working
2. **After it works:** Try to get terminal access or support help
3. **Future deployments:** Switch to fast `deploy.yml` method

---

Good luck! The slow upload is worth it to get your site working. 🚀
