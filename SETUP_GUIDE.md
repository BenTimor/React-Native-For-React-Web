# Setup Guide - React Native Workshop Preparation

Please complete these steps **BEFORE** the workshop to ensure we can start coding immediately!

## ⏱️ Estimated Time: 15-20 minutes

---

## ✅ Step 1: Install Node.js (5 min)

### Check if you have Node.js
Open your terminal and run:
```bash
node --version
```

**You need**: Node.js version 16 or higher

### Don't have it? Install Node.js
Download from: https://nodejs.org/
- Choose the **LTS** (Long Term Support) version
- Follow the installation wizard

### Verify installation
```bash
node --version
npm --version
```

---

## ✅ Step 2: Install Expo Go App (2 min)

### On Your Phone or Tablet

**iOS (iPhone/iPad):**
- Open App Store
- Search for "Expo Go"
- Install the app
- Open it once to verify it works

**Android:**
- Open Play Store
- Search for "Expo Go"
- Install the app
- Open it once to verify it works

**Why?** Expo Go lets you run the app on your actual device without needing Xcode or Android Studio!

---

## ✅ Step 3: Get the Workshop Code (3 min)

### Option A: Git Clone (Recommended)
```bash
git clone [YOUR-REPO-URL]
cd react-next-template
```

### Option B: Download ZIP
- Go to the repository URL
- Click "Code" → "Download ZIP"
- Extract to a folder
- Open terminal in that folder

---

## ✅ Step 4: Install Dependencies (5 min)

In the project directory, run:
```bash
npm install
```

This will download all required packages. **Wait for it to complete!**

---

## ✅ Step 5: Test the App (5 min)

### Start the development server
```bash
npx expo start
```

You should see:
- A QR code in your terminal
- Text saying "Metro waiting on..."
- A URL like `exp://192.168.1.x:8081`

### Connect your phone

**iOS:**
1. Open the Camera app
2. Point at the QR code
3. Tap the notification to open in Expo Go

**Android:**
1. Open Expo Go app
2. Tap "Scan QR Code"
3. Scan the code from your terminal

### ✅ Success! You should see:
- "My Bucket List" screen
- An empty state message
- A blue + button at the bottom

### ❌ Not working? See troubleshooting below

---

## 🔧 Troubleshooting

### QR Code won't scan

**Check WiFi:**
- Phone and computer MUST be on the same WiFi network
- Disconnect from VPN if you're using one

**Try Tunnel Mode:**
```bash
npx expo start --tunnel
```
This is slower but works across different networks.

### "Metro Bundler failed to start"

**Clear cache and retry:**
```bash
npx expo start -c
```

### "Unable to resolve module"

**Reinstall dependencies:**
```bash
rm -rf node_modules
npm install
```

### Port already in use

**Kill the process:**
```bash
# Find process using port 8081
lsof -ti:8081

# Kill it (Mac/Linux)
lsof -ti:8081 | xargs kill

# Or just change the port
npx expo start --port 8082
```

### Firewall blocking connection

**Allow Node/Expo through firewall:**
- Windows: Windows Defender → Allow an app
- Mac: System Preferences → Security → Firewall → Options

### Still stuck?

**Use the web version:**
```bash
npx expo start
# Press 'w' for web
```
This opens in your browser - not ideal but works!

---

## 📱 Recommended: Install a Simulator (Optional)

### iOS Simulator (Mac only)
1. Install Xcode from App Store (large download!)
2. Open Xcode → Preferences → Components → Install a simulator
3. Run `npx expo start` and press `i` to open iOS simulator

### Android Emulator (All platforms)
1. Install Android Studio: https://developer.android.com/studio
2. Open Android Studio → Tools → AVD Manager
3. Create a new Virtual Device
4. Run `npx expo start` and press `a` to open Android emulator

**Note**: Physical device is usually easier and faster!

---

## 📝 Pre-Workshop Checklist

Before the workshop starts, verify:

- [ ] Node.js installed (v16+)
- [ ] Expo Go app installed on phone
- [ ] Project downloaded/cloned
- [ ] `npm install` completed successfully
- [ ] App opens on your phone via QR code
- [ ] You can see the "My Bucket List" screen
- [ ] You have a code editor installed (VS Code recommended)

---

## 🎒 What to Bring to Workshop

1. **Laptop** with:
   - Code editor (VS Code, WebStorm, etc.)
   - Terminal access
   - Project already set up (from above steps!)

2. **Phone/Tablet** with:
   - Expo Go app installed
   - Charged battery (bring charger!)
   - Connected to same WiFi as laptop

3. **Enthusiasm** to learn React Native! 🚀

---

## 📚 Optional: Familiarize Yourself

If you have extra time before the workshop:

- [ ] Read `QUICK_REFERENCE.md` - Web vs Native comparison
- [ ] Skim `CHECKLIST.md` - See what we'll build
- [ ] Review React hooks if rusty (useState, useEffect)
- [ ] Explore the code structure

---

## 🆘 Getting Help

**Before Workshop:**
- Email the instructor with setup issues
- Check Expo documentation: https://docs.expo.dev/

**During Workshop:**
- Raise your hand for help
- Check with a neighbor
- Refer to `QUICK_REFERENCE.md`

---

## ✨ You're Ready!

If you've completed all steps above, you're all set for the workshop!

See you there! 🎉

---

## 🔗 Quick Links

- [Node.js Download](https://nodejs.org/)
- [Expo Go - iOS](https://apps.apple.com/app/expo-go/id982107779)
- [Expo Go - Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [VS Code Download](https://code.visualstudio.com/)
