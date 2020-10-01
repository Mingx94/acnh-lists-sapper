import { writable } from 'svelte/store';
import type { MonthRange } from '..';

const now = new Date();
export const month = writable<MonthRange | -1>(
  (now.getMonth() + 1) as MonthRange
);
