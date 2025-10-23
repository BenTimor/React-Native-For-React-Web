# Bucket List App - React Native Workshop Checklist

Welcome to the React Native workshop! In this 40-minute hands-on session, you'll build a **Bucket List** app where users can track things they want to do, mark them as complete, and view their accomplishments.

## 🎯 What You'll Build

A mobile app with two tabs:
- **My List**: Active bucket list items
- **Completed**: Items you've already done (with completion dates!)

## 🌐 For React Web Developers

Good news! You already know most of what you need:
- **Same React concepts**: useState, useEffect, components, props
- **Same patterns**: Custom hooks, component composition, conditional rendering
- **Different primitives**: `<View>` instead of `<div>`, `<Text>` instead of text nodes, `onPress` instead of `onClick`

## ⏱️ Time Allocation (40 minutes total)

- **Steps 1-3** (15 min): Basic list functionality
- **Steps 4-5** (10 min): Item structure and completion
- **Step 6** (8 min): Data persistence
- **Step 7** (7 min): Polish and empty states
- **Advanced** (bonus): For quick learners

---

## 📋 Core Features (35 minutes)

### ✅ Step 1: Display a Basic List (5 min)

**Goal**: Render a simple list of text items

**What to do**:
1. Open `app/(tabs)/index.tsx`
2. Look for the comment `📚 STEP 1`
3. Create a simple array of bucket list items (just strings for now):
   ```typescript
   const items = ['Visit Tokyo', 'Learn to surf', 'Write a book'];
   ```
4. Try rendering them using `FlatList` - it's like `.map()` in web but optimized for mobile!
5. **Challenge**: Can you figure out the FlatList syntax before uncommenting hints?

**Key Learning**:
- `FlatList` vs `.map()` - both iterate over arrays, but FlatList is optimized for mobile
- Components are JSX, just like React web!

**Check your work**: You should see a basic list of text items on screen

---

### ✅ Step 2: Add New Items (5 min)

**Goal**: Allow users to add new bucket list items using local state

**What to do**:
1. Still in `app/(tabs)/index.tsx`, find `📚 STEP 2: Use local state`
2. Comment out the STEP 1 hardcoded array
3. **🎯 CHALLENGE - Try implementing yourself first!** You already know this from React web:
   - Implement `addItem`: Create item object, add to array with `[...items, newItem]`
   - Implement `deleteItem`: Filter out item by id
   - Implement `toggleComplete`: Map over items, update the matching one
4. If you get stuck, uncomment the solution code inside each function
5. Comment out the "TEMPORARY: Empty placeholder" section
6. In `components/add-item-modal.tsx`, implement the `handleAdd` function:
   - Check if title is not empty (`title.trim()`)
   - Call `onAdd(title.trim(), description.trim() || undefined)`
   - Clear form: `setTitle('')` and `setDescription('')`
   - Close modal: `onClose()`

**Key Learning**:
- Modal component in React Native (built-in!)
- TextInput is like `<input>` but uses `onChangeText` instead of `onChange`
- State management is EXACTLY the same as React web
- **Note**: This local state only works for one tab. In STEP 6, we'll switch to a shared hook!

**Check your work**: Tap the + button, add an item, it should appear in the list. The "Completed" tab won't work yet - that's ok!

---

### ✅ Step 3: Delete Items (5 min)

**Goal**: Remove items from the list

**What to do**:
1. Open `hooks/use-bucket-storage.ts`, find `📚 STEP 3`
2. Implement the `deleteItem` function
   - **Challenge**: How would you filter out an item by ID?
   - This is EXACTLY like React web - use `.filter()`!
3. Open `components/bucket-list-item.tsx`, find `📚 STEP 3`
4. Implement the `handleDelete` function to show a confirmation dialog
5. Uncomment the `renderItem` function in `index.tsx` to use the real `BucketListItem` component

**Key Learning**:
- `Alert.alert()` is React Native's version of `window.confirm()`
- Array operations (filter, map) work exactly the same as web

**Check your work**: Tap the trash icon, confirm deletion, item should disappear

---

### ✅ Step 4: Add Description Field (7 min)

**Goal**: Make items more detailed with descriptions

**What to do**:
1. Good news - the description input already exists in `AddItemModal`!
2. Check out `components/bucket-list-item.tsx`
3. Notice how it conditionally renders the description if it exists
4. Try adding a new item with both title AND description

**Key Learning**:
- Conditional rendering (`&&` operator) works the same as React web
- `multiline` prop on TextInput creates a textarea-like experience

**Check your work**: Add an item with a description, you should see both title and description displayed

---

### ✅ Step 5: Mark Items as Done/Undone (8 min)

**Goal**: Toggle completion status with dates

**What to do**:
1. Open `hooks/use-bucket-storage.ts`, find `📚 STEP 5`
2. Implement `toggleComplete` function
   - **Challenge**: Use `.map()` to update the specific item
   - When completing: set `completed: true` and `completedAt: new Date().toISOString()`
   - When uncompleting: set `completed: false` and `completedAt: undefined`
3. Open `app/(tabs)/index.tsx`, uncomment the filter:
   ```typescript
   const activeItems = items.filter(item => !item.completed);
   ```
4. Open `app/(tabs)/explore.tsx` (the Completed tab)
5. Find `📚 STEP 5` and uncomment:
   - The hook usage
   - The `completedItems` filter
   - The `renderItem` function
6. Test by marking items complete - they should disappear from "My List" and appear in "Completed"!

**Key Learning**:
- Same data, different filters = different views (React pattern!)
- `.map()` for updating items works exactly like web
- ISO date strings are the same across web and mobile

**Check your work**:
- Mark an item complete in "My List" - it should disappear
- Switch to "Completed" tab - item should appear there with completion date
- Tap the checkbox again to mark as incomplete - it moves back!

---

### ✅ Step 6: Save Data with AsyncStorage (8 min)

**Goal**: Persist data so it survives app restarts

**What to do**:
1. Open `hooks/use-bucket-storage.ts`, find `📚 STEP 6`
2. Implement `loadItems` function:
   - Use `AsyncStorage.getItem(STORAGE_KEY)`
   - Parse the JSON string
   - Handle the case when there's no data yet
3. Implement `saveItems` function:
   - Use `AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))`
4. **Challenge**: The loading happens in `useEffect` - just like fetching data in React web!

**Key Learning**:
- AsyncStorage is like localStorage but ASYNCHRONOUS
- Must use async/await (unlike localStorage.getItem which is synchronous)
- useEffect works exactly the same as React web

**Check your work**:
- Add some items
- Close and restart the app (shake device → "Reload")
- Your items should still be there!

---

### ✅ Step 7: Polish the UI (7 min)

**Goal**: Add nice touches - empty states, date formatting, icons

**What to do**:
1. Empty states are already implemented! Check them out in both tabs
2. Open `components/bucket-list-item.tsx`, find `📚 STEP 7`
3. Implement `formatDate` function to show nice dates like "Jan 15, 2024"
4. **Challenge**: Use JavaScript's `Date` object - same as web!

**Key Learning**:
- Date formatting works the same as web
- Icons come from SF Symbols (iOS) / Material Icons (Android)
- Empty states improve UX - same pattern as web

**Check your work**: Completed items should show nicely formatted dates

---

## 🚀 Advanced Features (For Quick Learners)

If you finish early, try these challenges:

### 🔹 Edit Existing Items

**Challenge**: Allow users to edit title/description of existing items

**Hints**:
- Add an "edit" button to `BucketListItem`
- Reuse the `AddItemModal` component but pre-fill with existing data
- Implement the `updateItem` function in `use-bucket-storage.ts`

---

### 🔹 Custom Completion Date

**Challenge**: Let users set a specific date when they completed something

**Hints**:
- Look into `expo-date-picker` or use a TextInput for date
- Modify the `toggleComplete` function to accept an optional date parameter

---

### 🔹 Add Photos to Items

**Challenge**: Let users add preview images to bucket list items

**Hints**:
- Use `expo-image-picker` (already installed!)
- Store the image URI in the `imageUri` field
- Use `<Image>` component from `expo-image` to display

**Code to get you started**:
```typescript
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    // result.assets[0].uri contains the image URI
  }
};
```

---

### 🔹 Add Notes/Comments

**Challenge**: Allow adding notes to items

**Hints**:
- Add a `notes` field to your item type (already in the TypeScript interface!)
- Add another TextInput to the modal
- Display notes in the item details

---

## 🎓 Key Takeaways

By the end of this workshop, you've learned:

✅ **React Native uses the same React you know**
- useState, useEffect, custom hooks - all identical!
- Component composition, props, conditional rendering - same patterns!

✅ **Different primitives, same concepts**
- `<View>` = `<div>`
- `<Text>` = text content (must wrap all text!)
- `<Pressable>` = clickable elements
- `onPress` = `onClick`

✅ **Mobile-specific optimizations**
- FlatList for efficient list rendering
- AsyncStorage for mobile persistence
- Modal as a built-in component

✅ **Styling differences**
- StyleSheet.create() instead of CSS files
- CamelCase properties
- No units (just numbers)
- Flexbox by default

---

## 🐛 Common Issues & Solutions

**Problem**: App won't load after changes
- **Solution**: Shake device → Reload, or restart Metro bundler

**Problem**: "Cannot read property 'map' of undefined"
- **Solution**: Make sure you initialized your items array: `const [items, setItems] = useState([])`

**Problem**: Items disappear after reload
- **Solution**: Check that you implemented the AsyncStorage `loadItems` and `saveItems` functions

**Problem**: TypeScript errors about types
- **Solution**: Make sure you're using the `BucketItem` type from `@/types/bucket-item`

---

## 📚 Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage Docs](https://react-native-async-storage.github.io/async-storage/)

---

## 🎉 Congratulations!

You've built a real React Native app! The skills you learned here apply to any React Native project:
- State management
- Data persistence
- Navigation
- List rendering
- Form handling

**Next steps**: Try building your own app idea, or explore more advanced topics like animations, gestures, and native modules!
