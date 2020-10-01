import type { Creature } from '..';

import { writable, derived } from 'svelte/store';
import { hemisphere } from './hemisphere';
import { hour } from './hour';
import { month } from './month';
import { dirPrice } from './dirPrice';

export const getFilters = (list: Creature[]) => {
  const search = writable<string>('');

  return {
    search,
    list: derived(
      [search, hemisphere, month, hour, dirPrice],
      ([$search, $hemisphere, $month, $hour, $dirPrice]) => {
        return list
          .filter(
            ({
              name: { nameTWzh },
              availability: {
                monthArrayNorthern,
                monthArraySouthern,
                timeArray,
              },
            }) => {
              const n = nameTWzh.includes($search);
              const mthArray =
                $hemisphere == 'north'
                  ? monthArrayNorthern
                  : monthArraySouthern;
              const m = $month != -1 ? mthArray.includes($month) : true;
              const h = $hour != -1 ? timeArray.includes($hour) : true;

              return n && m && h;
            }
          )
          .sort((a, b) => {
            return $dirPrice == 'asc' ? a.price - b.price : b.price - a.price;
          });
      }
    ),
  };
};

export const keys = {
  fish: 0,
  insects: 1,
};
