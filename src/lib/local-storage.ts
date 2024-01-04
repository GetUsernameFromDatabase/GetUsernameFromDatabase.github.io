import { Duration } from 'luxon';

import type { RootState } from '@/store';

export type StorageKeyToValueType = {
  'main-store': RootState;
};
export type AvailableStorageKey = keyof StorageKeyToValueType;
type StoredItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  /** Unix time from `Date.now()` */
  timestamp: number;
  /** time to live */
  ttl: number;
};

/**
 * @param ttl (milliseconds) if this is `<= 0` then the data will never expire at least by our code
 */
export function saveStoreStateToLocaleStorage<
  Key extends keyof StorageKeyToValueType,
>(
  key: Key,
  value: StorageKeyToValueType[Key],
  ttl: Duration = Duration.fromMillis(0),
) {
  const ttlInMs = ttl.as('milliseconds');
  const item: StoredItem = {
    data: value,
    timestamp: Date.now(),
    ttl: ttlInMs > 0 ? ttlInMs : 0,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getFromLocaleStorage(
  key: AvailableStorageKey,
): undefined | object {
  const storedItem = localStorage.getItem(key);
  if (!storedItem) return;
  // Would like to use StorageKeyToValueType[Key] as return type but
  //  circular reference protection will not allow such heresy
  const { data, ttl, timestamp } = JSON.parse(storedItem) as StoredItem;
  if (ttl <= 0 || Date.now() < timestamp + ttl) return data;
  // data expired
  localStorage.removeItem(key);
}
