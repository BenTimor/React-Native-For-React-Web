/**
 * Type definitions for Bucket List items
 *
 * 🌐 React Web Comparison:
 * This is just like defining TypeScript interfaces in React web apps!
 * The main difference is we're defining types for mobile app data.
 */

export interface BucketItem {
  id: string;
  title: string;
  description?: string;
  imageUri?: string;
  completed: boolean;
  completedAt?: string; // ISO date string
  createdAt: string; // ISO date string
  notes?: string;
}

/**
 * Helper type for creating new items
 * (Excludes auto-generated fields like id and createdAt)
 */
export type NewBucketItem = Omit<BucketItem, 'id' | 'createdAt'>;
