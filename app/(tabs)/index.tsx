import { useState } from 'react';
import { StyleSheet, FlatList, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useBucketStorage } from '@/hooks/use-bucket-storage';
import { BucketListItem } from '@/components/bucket-list-item';
import { AddItemModal } from '@/components/add-item-modal';
import { useThemeColor } from '@/hooks/use-theme-color';

/**
 * 🎯 MY BUCKET LIST - Main Tab
 *
 * This screen shows all ACTIVE (not completed) bucket list items.
 *
 * 🌐 React Web Comparison:
 * The structure is similar to a React web app:
 * - We use useState for local UI state (modal visibility)
 * - We use a custom hook (useBucketStorage) for data management
 * - We render lists of items
 *
 * Key differences:
 * - FlatList instead of .map() for better performance
 * - No <div>, <p>, <button> - we use View, Text, Pressable
 * - Styling with StyleSheet instead of CSS
 */

export default function MyBucketListScreen() {
  /**
   * 📚 STEP 2: State for controlling the Add Item modal
   *
   * 🌐 React Web: This is EXACTLY like React web! No difference.
   * You use useState the same way you always have.
   */
  const [modalVisible, setModalVisible] = useState(false);

  // ==========================================
  // 📚 STEP 1: Start with hardcoded data
  // ==========================================
  // Uncomment this for Step 1 to see a simple hardcoded list:
  /*
  const items = [
    { id: '1', title: 'Visit Tokyo', completed: false, createdAt: new Date().toISOString() },
    { id: '2', title: 'Learn to surf', completed: false, createdAt: new Date().toISOString() },
    { id: '3', title: 'Write a book', completed: false, createdAt: new Date().toISOString() },
  ];
  */

  // ==========================================
  // 📚 STEP 2: Add items with useState
  // ==========================================
  // 🎯 CHALLENGE: Try implementing this yourself!
  // You already know this from React web - it's the same useState!
  //
  // Uncomment the code below to get started:
  /*
  const [items, setItems] = useState<any[]>([]);

  const addItem = (title: string, description?: string) => {
    // 🎯 TODO: Implement adding a new item
    // Think: How do you add to an array in React? (Hint: spread operator [...items, newItem])
    //
    // Your item needs: id, title, description, completed: false, createdAt
    // Generate id with: Date.now().toString()
    // Get current date with: new Date().toISOString()
    //
    // Uncomment the solution below if you get stuck:
    // const newItem = {
    //   id: Date.now().toString(),
    //   title,
    //   description,
    //   completed: false,
    //   createdAt: new Date().toISOString(),
    // };
    // setItems([...items, newItem]);
  };
  */
 
  // ==========================================
  // 📚 STEP 3: Add delete functionality
  // ==========================================
  // 🎯 CHALLENGE: Implement delete yourself!
  // Hint: Use .filter() to remove an item by id - same as React web!
  //
  // Uncomment and implement:
  /*
  const deleteItem = (id: string) => {
    // 🎯 TODO: Filter out the item with the given id
    // Uncomment below if you get stuck:
    // setItems(items.filter(item => item.id !== id));
  };
  */

  // ==========================================
  // 📚 STEP 5: Add toggle complete functionality
  // ==========================================
  // 🎯 CHALLENGE: Implement toggling completion status!
  // Hint: Use .map() to update a specific item - just like React web!
  //
  // Uncomment and implement:
  /*
  const toggleComplete = (id: string) => {
    // 🎯 TODO: Use .map() to update the item with the given id
    // When marking complete: set completed: true and completedAt: new Date().toISOString()
    // When marking incomplete: set completed: false and completedAt: undefined
    //
    // Uncomment below if you get stuck:
    // setItems(items.map(item => {
    //   if (item.id === id) {
    //     return {
    //       ...item,
    //       completed: !item.completed,
    //       completedAt: !item.completed ? new Date().toISOString() : undefined,
    //     };
    //   }
    //   return item;
    // }));
  };
  */

  // ==========================================
  // 📚 STEP 6: Use AsyncStorage for persistence
  // ==========================================
  // Uncomment this for Step 6 to save data that survives app restarts:
  /*
  const { items, isLoading, addItem, deleteItem, toggleComplete } = useBucketStorage();
  */

  // TEMPORARY: Empty placeholders - replace these as you complete each step!
  const items: any[] = [];
  const isLoading = false;
  const addItem = (_title: string, _description?: string) => {}; // Implement in STEP 2
  const deleteItem = (_id: string) => {}; // Implement in STEP 3
  const toggleComplete = (_id: string) => {}; // Implement in STEP 5

  const tintColor = useThemeColor({}, 'tint');

  /**
   * Filter to show only ACTIVE items (not completed)
   * Completed items will be shown in the "Completed" tab
   *
   * 🎯 CHALLENGE: How would you filter an array to show only incomplete items?
   * Uncomment the code below if you get stuck:
   */
  // const activeItems = items.filter(item => !item.completed);

  // TEMPORARY: Use all items for now
  const activeItems = items;

  /**
   * 📚 STEP 7: Empty state - What to show when there are no items
   *
   * 🌐 React Web: Same pattern as web - conditionally render different UI
   */
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <IconSymbol name="list.bullet" size={64} color="#ccc" />
      <ThemedText style={styles.emptyText}>No bucket list items yet!</ThemedText>
      <ThemedText style={styles.emptySubtext}>
        Tap the + button below to add your first item
      </ThemedText>
    </View>
  );

  /**
   * 📚 STEP 1: Render each item
   *
   * 🌐 React Web Comparison:
   * FlatList is like using .map() but optimized for mobile!
   * - Only renders visible items (virtual scrolling)
   * - Better performance for long lists
   * - Built-in pull-to-refresh and infinite scroll support
   *
   * In React web you might do:
   *   items.map(item => <ItemComponent key={item.id} item={item} />)
   *
   * In React Native with FlatList:
   *   <FlatList data={items} renderItem={({ item }) => <ItemComponent item={item} />} />
   */
  const renderItem = ({ item }: { item: any }) => (
    <BucketListItem
      item={item}
      onToggleComplete={toggleComplete}
      onDelete={deleteItem}
    />
  );

  /**
   * Show loading state while data is being loaded from AsyncStorage
   *
   * 🌐 React Web: Same pattern - show loading UI while fetching data
   */
  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title">My Bucket List</ThemedText>
        <ThemedText style={styles.subtitle}>
          {activeItems.length} {activeItems.length === 1 ? 'item' : 'items'} to do
        </ThemedText>
      </View>

      {/*
        📚 STEP 1: List of items using FlatList

        🎯 CHALLENGE: Try using FlatList!
        Key props to know:
        - data: array of items to render
        - renderItem: function that renders each item
        - keyExtractor: function to get unique key (like 'key' prop in .map())
        - ListEmptyComponent: what to show when list is empty
      */}
      <FlatList
        data={activeItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyState}
      />

      {/*
        📚 STEP 2: Floating Add Button

        🌐 React Web Comparison:
        - Pressable is like <button> or onClick in web
        - Use onPress instead of onClick
        - Position absolute works the same as CSS!
      */}
      <Pressable
        style={[styles.addButton, { backgroundColor: tintColor }]}
        onPress={() => setModalVisible(true)}
      >
        <IconSymbol name="plus" size={28} color="white" />
      </Pressable>

      {/* 📚 STEP 2: Add Item Modal */}
      <AddItemModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={addItem}
      />
    </ThemedView>
  );
}

/**
 * Styles using StyleSheet
 *
 * 🌐 React Web Comparison:
 * - Similar to CSS-in-JS (like styled-components or emotion)
 * - Use camelCase property names
 * - Numbers are in density-independent pixels (no 'px' suffix)
 * - Flexbox works mostly the same, with some small differences
 * - flex: 1 is very common (means "take all available space")
 */
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full screen height
  },
  header: {
    padding: 20,
    paddingTop: 60, // Extra top padding for status bar
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 4,
  },
  listContent: {
    padding: 16,
    paddingBottom: 100, // Extra space for floating button
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 8,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute', // Like CSS position: absolute
    bottom: 32,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28, // Half of width/height for perfect circle
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Shadows in React Native
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
});
