# Bucket List App - React Native Course Template

This is a hands-on learning template for teaching React web developers how to build React Native apps.

## 🎯 Course Overview

- **Duration**: 40 minutes
- **Target Audience**: React web developers new to React Native
- **Learning Style**: Progressive challenges with safety net (commented solutions)
- **App**: Bucket List tracker with completion tracking

## 📁 Project Structure

### Core Files Students Will Work With

```
app/(tabs)/
├── index.tsx          # Main "My List" tab (active items)
└── explore.tsx        # "Completed" tab (finished items)

components/
├── bucket-list-item.tsx    # Individual list item component
└── add-item-modal.tsx      # Modal for adding new items

hooks/
└── use-bucket-storage.ts   # Custom hook for AsyncStorage operations

types/
└── bucket-item.ts          # TypeScript interfaces
```

### Guide

- **CHECKLIST.md** - Step-by-step guide for students to follow

## 🎓 Teaching Approach

### Progressive Difficulty

1. **Steps 1-3** (Basic): List rendering, adding, deleting
2. **Steps 4-5** (Intermediate): Complex data structures, state management
3. **Step 6** (Advanced): Data persistence with AsyncStorage
4. **Step 7** (Polish): UI refinements
5. **Bonus** (Expert): Optional advanced features

### Learning Philosophy

- **Try First**: Each step has a challenge encouraging students to attempt implementation
- **Safety Net**: Commented-out solution code available if they get stuck
- **Web Comparisons**: Extensive comments comparing React Native to React web concepts
- **Familiar Territory**: Focuses on state management (familiar) while introducing RN specifics

## 🚀 How to Use This Template

### For Instructors

1. **Clone and share** this repository with students
2. Have students run:
   ```bash
   npm install
   npx expo start
   ```
3. Students can scan QR code with Expo Go app
4. Guide them through **CHECKLIST.md** step by step
5. Encourage trying before uncommenting solutions

### For Students

1. **Read CHECKLIST.md** - your step-by-step guide
2. **Open Expo Go** on your phone
3. **Scan QR code** when you run `npx expo start`
4. **Follow the checklist** - each step builds on the previous
5. **Try challenges first** - only uncomment hints if stuck!

## 🎯 Key Learning Outcomes

By completing this workshop, students will understand:

- ✅ React concepts translate directly to React Native
- ✅ Different UI primitives (`View`, `Text`, `Pressable` vs. `div`, `span`, `button`)
- ✅ Mobile-specific components (`FlatList`, `Modal`, `AsyncStorage`)
- ✅ Styling with `StyleSheet` vs CSS
- ✅ Navigation patterns with Expo Router
- ✅ Data persistence on mobile
- ✅ Form handling and user input

## 📚 Code Philosophy

### Commented Solutions

Most functionality is commented out with:
- `🎯 CHALLENGE:` - Try implementing this yourself!
- `📚 STEP X:` - Which checklist step this relates to
- `🌐 React Web Comparison:` - How this compares to web development

Example:
```typescript
/**
 * 🎯 CHALLENGE: Implement the delete function!
 * How would you filter out an item by ID?
 */
const deleteItem = async (id: string) => {
  // TODO: Implement this
  // Uncomment below if you get stuck:

  /*
  const updatedItems = items.filter(item => item.id !== id);
  await saveItems(updatedItems);
  */
};
```

### Web-to-Native Comparisons

Throughout the code, helpful comments like:

```typescript
/**
 * 🌐 React Web Comparison:
 * - Pressable is like <button> or onClick in web
 * - Use onPress instead of onClick
 * - Position absolute works the same as CSS!
 */
```

## ⚡ Quick Start for Testing

Want to see the finished app? Uncomment all the solution code:

1. In `hooks/use-bucket-storage.ts` - uncomment all function implementations
2. In `components/bucket-list-item.tsx` - uncomment `handleDelete` and `formatDate`
3. In `components/add-item-modal.tsx` - uncomment `handleAdd`
4. In `app/(tabs)/index.tsx` - uncomment the hook and filters
5. In `app/(tabs)/explore.tsx` - uncomment the hook and filters

## 🔧 Requirements

- Node.js 16+
- Expo Go app on iOS or Android device
- Or iOS Simulator / Android Emulator

## 📱 Testing on Device

1. Install Expo Go from App Store or Play Store
2. Run `npx expo start`
3. Scan QR code with:
   - iOS: Camera app
   - Android: Expo Go app

## 🎨 Customization Ideas

Encourage advanced students to:

- Add categories/tags to items
- Implement search/filter functionality
- Add images using expo-image-picker
- Create custom completion dates
- Add notes/comments to items
- Implement item editing
- Add animations with react-native-reanimated

## 🐛 Troubleshooting

**App won't load**
- Ensure phone and computer are on same WiFi
- Try restarting Metro bundler
- Clear Expo cache: `npx expo start -c`

**TypeScript errors**
- Run `npm install` to ensure all dependencies are installed
- Restart TypeScript server in your editor

**AsyncStorage not persisting**
- Check that `loadItems` and `saveItems` are implemented
- Check browser console for errors

## 📖 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Expo Router](https://docs.expo.dev/router/introduction/)

## 🙏 Credits

Built as a teaching template for React web developers learning React Native.
Template uses Expo SDK 54 with Expo Router for navigation.

---

**Happy Teaching! 🎉**
