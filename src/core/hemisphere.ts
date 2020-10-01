import { writable } from 'svelte/store';

export const hemisphere = writable<'north' | 'south'>('north');
