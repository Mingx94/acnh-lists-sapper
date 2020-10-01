import { get, writable } from 'svelte/store';

export const dirPrice = writable<'asc' | 'desc'>('asc');

export const toggleDir = () =>
  dirPrice.update((prev) => (prev == 'asc' ? 'desc' : 'asc'));
