# React Native Quick Reference - For React Web Developers

## 🔄 React Web → React Native Translation

### Components

| React Web | React Native | Notes |
|-----------|--------------|-------|
| `<div>` | `<View>` | Container element |
| `<p>`, `<span>`, `<h1>` | `<Text>` | ALL text must be in `<Text>` |
| `<button>` | `<Pressable>` or `<TouchableOpacity>` | Touchable elements |
| `<input>` | `<TextInput>` | Text input field |
| `<img>` | `<Image>` | From `react-native` or `expo-image` |
| `<ul>`/`<li>` + `.map()` | `<FlatList>` | Optimized list rendering |
| `<a>` | `<Link>` (Expo Router) | Navigation links |

### Events

| React Web | React Native |
|-----------|--------------|
| `onClick` | `onPress` |
| `onChange` | `onChangeText` (TextInput) |
| `onSubmit` | No direct equivalent - use button `onPress` |
| `onMouseEnter/Leave` | `onPressIn/Out` or use Gesture Handler |

### Styling

| CSS | StyleSheet | Example |
|-----|------------|---------|
| `background-color` | `backgroundColor` | `backgroundColor: 'red'` |
| `font-size: 16px` | `fontSize: 16` | No units! Just numbers |
| `margin-top` | `marginTop` | `marginTop: 10` |
| `display: flex` | *(implicit)* | All Views use flexbox by default |
| `flex-direction: column` | `flexDirection: 'column'` | Column is default! |
| `text-decoration: line-through` | `textDecorationLine: 'line-through'` | |

### Data Storage

| Web | React Native |
|-----|--------------|
| `localStorage.getItem('key')` | `await AsyncStorage.getItem('key')` |
| `localStorage.setItem('key', value)` | `await AsyncStorage.setItem('key', value)` |
| Synchronous | **Asynchronous** - must use `async/await` |

## ⚡ Common Patterns

### Rendering a List

**React Web:**
```jsx
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

**React Native:**
```jsx
<FlatList
  data={items}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={item => item.id}
/>
```

### Form Input

**React Web:**
```jsx
<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
```

**React Native:**
```jsx
<TextInput
  value={text}
  onChangeText={setText}  // Direct text, no event!
/>
```

### Conditional Styling

**React Web:**
```jsx
<div className={isActive ? 'active' : 'inactive'}>
```

**React Native:**
```jsx
<View style={[styles.base, isActive && styles.active]}>
```

### Click/Press Handler

**React Web:**
```jsx
<button onClick={() => handleClick()}>
  Click me
</button>
```

**React Native:**
```jsx
<Pressable onPress={() => handleClick()}>
  <Text>Press me</Text>
</Pressable>
```

## 🎨 Styling Gotchas

### No CSS Units
```jsx
// ❌ Wrong
fontSize: '16px'

// ✅ Right
fontSize: 16
```

### Flexbox Differences
```jsx
// In RN, flexDirection is 'column' by default (not 'row'!)
// To get horizontal layout:
flexDirection: 'row'
```

### No Shorthand
```jsx
// ❌ Wrong
margin: '10px 20px'

// ✅ Right
marginVertical: 10,
marginHorizontal: 20,
```

### Text Styles Only on Text
```jsx
// ❌ Wrong - fontSize on View won't work
<View style={{ fontSize: 16 }}>
  <Text>Hello</Text>
</View>

// ✅ Right
<View>
  <Text style={{ fontSize: 16 }}>Hello</Text>
</View>
```

## 🔨 Common Hooks (Same as Web!)

These work EXACTLY the same:

- ✅ `useState` - Local state
- ✅ `useEffect` - Side effects, lifecycle
- ✅ `useCallback` - Memoize functions
- ✅ `useMemo` - Memoize values
- ✅ `useContext` - Context API
- ✅ `useReducer` - Complex state
- ✅ `useRef` - References

## 📱 Mobile-Specific Concepts

### Platform Detection
```jsx
import { Platform } from 'react-native';

Platform.OS === 'ios'     // true on iOS
Platform.OS === 'android' // true on Android
Platform.OS === 'web'     // true on web

// Conditional values
const padding = Platform.select({
  ios: 20,
  android: 16,
  default: 18
});
```

### Safe Area (Notches, etc.)
```jsx
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={{ flex: 1 }}>
  {/* Your content */}
</SafeAreaView>
```

### Keyboard Handling
```jsx
import { KeyboardAvoidingView, Platform } from 'react-native';

<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
  {/* Your form */}
</KeyboardAvoidingView>
```

## 🚀 Performance Tips

### Use FlatList for Long Lists
```jsx
// ❌ Slow for long lists
{items.map(item => <Item key={item.id} />)}

// ✅ Optimized - only renders visible items
<FlatList
  data={items}
  renderItem={({ item }) => <Item item={item} />}
/>
```

### Avoid Inline Functions in Render
```jsx
// ❌ Creates new function every render
<Pressable onPress={() => doSomething()}>

// ✅ Better
const handlePress = useCallback(() => doSomething(), []);
<Pressable onPress={handlePress}>
```

### Use React.memo for Pure Components
```jsx
const Item = React.memo(({ item }) => (
  <View><Text>{item.name}</Text></View>
));
```

## 🐛 Debugging

### Console Logging
```jsx
// Same as web!
console.log('Debug:', value);
console.warn('Warning!');
console.error('Error!');
```

### React DevTools
```bash
# Shake device (or Cmd+D iOS / Cmd+M Android)
# Select "Debug Remote JS"
# Open Chrome DevTools
```

### View Element Inspector
```
# Shake device → "Show Element Inspector"
# Tap elements to see their properties
```

## 📦 Must-Know Packages

- **@react-native-async-storage/async-storage** - Local storage
- **expo-router** - File-based navigation
- **react-native-reanimated** - Smooth animations
- **react-native-gesture-handler** - Touch gestures
- **expo-image-picker** - Pick photos
- **expo-camera** - Camera access

## ⚠️ Common Errors

### "Invariant Violation: Text strings must be rendered within a <Text> component"
```jsx
// ❌ Wrong
<View>Hello</View>

// ✅ Right
<View><Text>Hello</Text></View>
```

### "Objects are not valid as a React child"
```jsx
// ❌ Wrong - trying to render object
<Text>{user}</Text>

// ✅ Right
<Text>{user.name}</Text>
```

### "undefined is not an object (evaluating 'item.name')"
```jsx
// Check your data exists!
<Text>{item?.name || 'No name'}</Text>
```

## 🎯 Quick Tips

1. **All text needs `<Text>`** - Even single characters!
2. **No units in styles** - Just numbers (like `fontSize: 16`)
3. **Column by default** - Flexbox defaults to column, not row
4. **Async everything** - Storage, images, permissions all async
5. **Platform differences** - Test on both iOS and Android
6. **Reload with shake** - Physical shake or Cmd+D/Cmd+M

## 🔍 Need Help?

- Shake device → "Show Element Inspector"
- Check console with `console.log()`
- Google: "react native [your question]"
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)

---

**Remember: You already know React! This is just a different rendering target.** 🚀
