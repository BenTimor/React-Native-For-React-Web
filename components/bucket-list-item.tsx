import { StyleSheet, Pressable, View, Alert } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { IconSymbol } from './ui/icon-symbol';
import { BucketItem } from '@/types/bucket-item';
import { useThemeColor } from '@/hooks/use-theme-color';

/**
 * Individual Bucket List Item Component
 *
 * 🌐 React Web Comparison:
 * - <View> is like <div> - a container element
 * - <Text> is required for any text (no direct text nodes allowed!)
 * - <Pressable> is like <button> or onClick handlers
 * - StyleSheet.create() is like CSS-in-JS (similar to styled-components)
 *
 * Key differences from web:
 * 1. Use onPress instead of onClick
 * 2. All styles use camelCase (backgroundColor not background-color)
 * 3. No CSS units - numbers are in density-independent pixels
 * 4. Flexbox by default (display: flex is implicit)
 */

interface BucketListItemProps {
  item: BucketItem;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function BucketListItem({
  item,
  onToggleComplete,
  onDelete,
}: BucketListItemProps) {
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');

  /**
   * 📚 STEP 3: Handle delete with confirmation
   *
   * 🌐 React Web Comparison:
   * - Alert.alert() is like window.confirm() in web
   * - But it's more powerful with customizable buttons!
   */
  const handleDelete = () => {
    // TODO: Show confirmation dialog before deleting
    // Uncomment the code below if you get stuck:

    /*
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => onDelete(item.id) },
      ]
    );
    */
  };

  /**
   * 📚 STEP 7: Format the completion date nicely
   *
   * 🎯 CHALLENGE: Can you format the date to show "Completed on Jan 15, 2024"?
   * Hint: Use JavaScript's Date object, same as in React web!
   */
  const formatDate = (isoString: string) => {
    // TODO: Format the date nicely
    // Uncomment the code below if you get stuck:

    /*
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    */

    return isoString; // Temporary return
  };

  return (
    <ThemedView style={styles.container}>
      {/*
        📚 STEP 5: Checkbox/Toggle Button

        🌐 React Web: In web you might use <input type="checkbox">
        🎯 React Native: We use Pressable with custom styling!
      */}
      <Pressable
        onPress={() => onToggleComplete(item.id)}
        style={[
          styles.checkbox,
          item.completed && { backgroundColor: tintColor },
        ]}
      >
        {item.completed && (
          <IconSymbol name="checkmark" size={18} color="white" />
        )}
      </Pressable>

      {/* Item content */}
      <View style={styles.content}>
        <ThemedText
          style={[
            styles.title,
            item.completed && styles.completedText,
          ]}
        >
          {item.title}
        </ThemedText>

        {/* 📚 STEP 4: Show description if it exists */}
        {item.description && (
          <ThemedText
            style={[
              styles.description,
              item.completed && styles.completedText,
            ]}
          >
            {item.description}
          </ThemedText>
        )}

        {/* Show completion date for completed items */}
        {item.completed && item.completedAt && (
          <ThemedText style={styles.completedDate}>
            Completed on {formatDate(item.completedAt)}
          </ThemedText>
        )}
      </View>

      {/* 📚 STEP 3: Delete button */}
      <Pressable onPress={handleDelete} style={styles.deleteButton}>
        <IconSymbol name="trash" size={20} color={iconColor} />
      </Pressable>
    </ThemedView>
  );
}

/**
 * Styles using StyleSheet
 *
 * 🌐 React Web Comparison:
 * This is similar to CSS-in-JS libraries, but with some differences:
 * - No units (16 instead of '16px')
 * - CamelCase properties (backgroundColor instead of background-color)
 * - Flexbox by default (every View has display: flex implicitly)
 * - Limited CSS properties (no transforms, animations need Reanimated)
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Like CSS: flex-direction: row
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1, // Like CSS: flex: 1 (takes remaining space)
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },
  completedText: {
    textDecorationLine: 'line-through', // Like CSS: text-decoration: line-through
    opacity: 0.5,
  },
  completedDate: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
    fontStyle: 'italic',
  },
  deleteButton: {
    padding: 8,
  },
});
