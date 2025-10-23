# Bucket List App - React Native Workshop Template

A hands-on learning template for teaching React web developers how to build React Native apps. Students build a functional **Bucket List** app in 40 minutes!

## 🎯 Overview

This workshop teaches React web developers React Native through a progressive, hands-on project. Students build a real app while learning mobile-specific concepts.

**App Features:**
- ✅ Add bucket list items with descriptions
- ✅ Mark items as complete/incomplete
- ✅ View active and completed items in separate tabs
- ✅ Data persists using AsyncStorage
- ✅ Clean, polished UI with empty states

## 🚀 Quick Start

### Students: Pre-Workshop Setup

**Complete these steps BEFORE the workshop:**

1. **Install Node.js** (v16+)
   ```bash
   node --version  # Should be 16.x or higher
   ```

2. **Install Expo Go** on your phone/tablet
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

3. **Clone and setup project**
   ```bash
   git clone [YOUR-REPO-URL]
   cd react-next-template
   npm install
   ```

4. **Test the app**
   ```bash
   npx expo start
   ```
   Scan QR code with Expo Go app

## 🏗️ Project Structure

```
react-next-template/
├── app/(tabs)/
│   ├── index.tsx         # "My List" tab (active items)
│   └── explore.tsx       # "Completed" tab
├── components/
│   ├── bucket-list-item.tsx    # Individual item component
│   └── add-item-modal.tsx      # Add item modal
├── hooks/
│   └── use-bucket-storage.ts   # AsyncStorage hook
├── types/
│   └── bucket-item.ts          # TypeScript interfaces
```

## 🎓 Learning Approach

### Progressive Challenges
Each step includes:
- 🎯 **Challenge**: "Try implementing this yourself!"
- 💡 **Hints**: Comments guiding the approach
- ✅ **Solution**: Commented-out working code

### Web Comparisons
Extensive comments comparing to React web:
```typescript
/**
 * 🌐 React Web Comparison:
 * - <Pressable> is like <button> or onClick
 * - Use onPress instead of onClick
 * - Styling works like CSS-in-JS
 */
```

### Focus Areas
1. **State Management** (familiar territory - same as web!)
2. **Component Structure** (same React patterns)
3. **Native Primitives** (View, Text, FlatList)
4. **Mobile-Specific** (AsyncStorage, Modal, Platform)

## 🛠️ Technologies

- **Expo SDK 54** - React Native development platform
- **Expo Router** - File-based navigation
- **TypeScript** - Type safety
- **AsyncStorage** - Data persistence
- **Expo Go** - Testing on real devices

## 📖 Key Concepts Taught

✅ React concepts transfer directly to React Native
✅ Different UI primitives (View vs div, Text vs span)
✅ Mobile-optimized components (FlatList)
✅ Touch interactions (onPress vs onClick)
✅ Styling with StyleSheet (vs CSS)
✅ Data persistence on mobile (AsyncStorage)
✅ Navigation patterns with tabs

## 🎯 Learning Outcomes

After this workshop, students can:
- Build basic React Native apps using Expo
- Understand React Native vs React web differences
- Use core RN components (View, Text, FlatList, Pressable)
- Implement state management with hooks
- Persist data with AsyncStorage
- Navigate between screens
- Style components with StyleSheet

## 🔧 Development

### Start the app
```bash
npx expo start
```

### Clear cache
```bash
npx expo start -c
```

### Run on specific platform
```bash
npx expo start --ios
npx expo start --android
npx expo start --web
```

### Type checking
```bash
npx tsc --noEmit
```

## 🎨 Advanced Features (Bonus)

For quick learners who finish early:
- Edit existing items
- Add photos with expo-image-picker
- Custom completion dates
- Notes/comments on items
- Categories and tags
- Search/filter functionality


## 🆘 Troubleshooting

### Can't connect to app
- Ensure phone and computer on same WiFi
- Try tunnel mode: `npx expo start --tunnel`
- Use web version: Press `w` in terminal

### Metro bundler issues
```bash
npx expo start -c  # Clear cache
```

### Dependencies issues
```bash
rm -rf node_modules
npm install
```

## 📚 Resources

### Official Documentation
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

### Community
- [Expo Discord](https://chat.expo.dev)
- [r/reactnative](https://reddit.com/r/reactnative)
- [React Native Community](https://github.com/react-native-community)

### Learning
- [React Native Express](https://www.reactnative.express/)
- [Expo Examples](https://docs.expo.dev/tutorial/introduction/)

## 🙌 Credits

Built as a teaching template for React web developers learning React Native.
Uses Expo SDK 54 with Expo Router for navigation.

## 📄 License

Feel free to use this template for your workshops and courses!
