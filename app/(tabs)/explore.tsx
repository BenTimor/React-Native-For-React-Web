import { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useBucketStorage } from '@/hooks/use-bucket-storage';
import { BucketListItem } from '@/components/bucket-list-item';

/**
 * 🎯 COMPLETED ITEMS - Second Tab
 *
 * This screen shows all COMPLETED bucket list items with their completion dates.
 *
 * 🌐 React Web Comparison:
 * This is very similar to the first tab, but filtered differently!
 * Notice how we reuse the same components (BucketListItem, useBucketStorage)
 * but just filter the data differently. Same patterns as React web!
 */

export default function CompletedScreen() {
  // ==========================================
  // 📚 STEP 5: Use local state (same as index.tsx)
  // ==========================================
  // Copy the same state and functions from index.tsx STEP 2!
  // This lets both tabs work with the same local state pattern.
  // Uncomment this for Step 5:
  /*
  const [items, setItems] = useState<any[]>([]);
  const isLoading = false;

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id: string) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
          completedAt: !item.completed ? new Date().toISOString() : undefined,
        };
      }
      return item;
    }));
  };
  */

  // ==========================================
  // 📚 STEP 6: Use AsyncStorage for persistence
  // ==========================================
  // Uncomment this for Step 6 to share data with the first tab:
  /*
  const { items, isLoading, toggleComplete, deleteItem } = useBucketStorage();
  */

  // TEMPORARY: Empty placeholder until you uncomment one of the above
  const items: any[] = [];
  const isLoading = false;
  const toggleComplete = async (_id: string) => {};
  const deleteItem = async (_id: string) => {};

  /**
   * 📚 STEP 5: Filter to show only COMPLETED items
   *
   * 🎯 CHALLENGE: How would you filter to show only completed items?
   * This is the opposite filter from the main tab!
   *
   * Uncomment the code below if you get stuck:
   */
  // const completedItems = items.filter(item => item.completed);

  // TEMPORARY: Use all items for now
  const completedItems = items;

  /**
   * 📚 STEP 7: Empty state for when no items are completed yet
   */
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <IconSymbol name="checkmark.circle" size={64} color="#ccc" />
      <ThemedText style={styles.emptyText}>No completed items yet!</ThemedText>
      <ThemedText style={styles.emptySubtext}>
        Mark items as complete to see them here
      </ThemedText>
    </View>
  );

  /**
   * 📚 STEP 5: Render each completed item
   *
   * 🌐 React Web: Same pattern as the first tab!
   * We're reusing the BucketListItem component for both tabs.
   * This is component reusability - same as React web!
   */
  const renderItem = ({ item }: { item: any }) => (
    // TODO: Render the BucketListItem component
    // Uncomment the code below if you get stuck:

    /*
    <BucketListItem
      item={item}
      onToggleComplete={toggleComplete}
      onDelete={deleteItem}
    />
    */

    // TEMPORARY placeholder
    <ThemedView style={styles.itemPlaceholder}>
      <ThemedText>{item.title}</ThemedText>
    </ThemedView>
  );

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
        <ThemedText type="title">Completed</ThemedText>
        <ThemedText style={styles.subtitle}>
          {completedItems.length} {completedItems.length === 1 ? 'item' : 'items'} completed
        </ThemedText>
      </View>

      {/*
        📚 STEP 5: List of completed items

        🌐 React Web: Same FlatList component as the first tab!
        Notice how the structure is almost identical - same patterns everywhere.
      */}
      <FlatList
        data={completedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyState}
      />
    </ThemedView>
  );
}

/**
 * Styles - very similar to the main tab!
 *
 * 🌐 React Web: In a real app, you might extract common styles
 * to a shared file, just like you would in React web with CSS modules
 * or styled-components themes!
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 4,
  },
  listContent: {
    padding: 16,
  },
  itemPlaceholder: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
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
});
