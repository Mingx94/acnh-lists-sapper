import { writable } from 'svelte/store';
import type { TimeRange } from '..';

const now = new Date();
export const hour = writable<TimeRange | -1>(now.getHours() as TimeRange);
