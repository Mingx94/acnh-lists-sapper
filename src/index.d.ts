interface ApiCreature {
  id: number;
  'file-name': string;
  name: Name;
  availability: ApiAvailability;
  shadow: string;
  price: number;
  'price-cj': number;
  'catch-phrase': string;
  'museum-phrase': string;
  image_uri: string;
  icon_uri: string;
  'alt-catch-phrase'?: string[];
}

interface ApiAvailability {
  'month-northern': string;
  'month-southern': string;
  time: Time;
  isAllDay: boolean;
  isAllYear: boolean;
  location: Location;
  rarity: Rarity;
  'month-array-northern': MonthRange[];
  'month-array-southern': MonthRange[];
  'time-array': TimeRange[];
}

interface Creature {
  id: number;
  fileName: string;
  name: CamelName;
  availability: Availability;
  shadow: string;
  price: number;
  priceCj: number;
  catchPhrase: string;
  museumPhrase: string;
  imageUri: string;
  iconUri: string;
  altCatchPhrase?: string[];
}

interface Availability {
  monthNorthern: string;
  monthSouthern: string;
  time: Time;
  isAllDay: boolean;
  isAllYear: boolean;
  location: Location;
  rarity: Rarity;
  monthArrayNorthern: MonthRange[];
  monthArraySouthern: MonthRange[];
  timeArray: TimeRange[];
}
type Name = {
  [key in Locale]: string;
};
type CamelName = {
  [key in LocaleCamel]: string;
};

type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never;

type EnumerateInternal<A extends Array<unknown>, N extends number> = {
  0: A;
  1: EnumerateInternal<PrependNextNum<A>, N>;
}[N extends A['length'] ? 0 : 1];

type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[]
  ? E
  : never;

type NumRange<FROM extends number, TO extends number> = Exclude<
  Enumerate<TO>,
  Enumerate<FROM>
>;

type MonthRange = NumRange<1, 13>;
type TimeRange = NumRange<0, 24>;

export enum Location {
  Pier = 'Pier',
  Pond = 'Pond',
  River = 'River',
  RiverClifftop = 'River (Clifftop)',
  RiverClifftopPond = 'River (Clifftop) & Pond',
  RiverMouth = 'River (Mouth)',
  Sea = 'Sea',
  SeaWhenRainingOrSnowing = 'Sea (when raining or snowing)',
}

export enum Rarity {
  Common = 'Common',
  Rare = 'Rare',
  UltraRare = 'Ultra-rare',
  Uncommon = 'Uncommon',
}

export enum Time {
  Empty = '',
  The4Am9Pm = '4am - 9pm',
  The4Pm9Am = '4pm - 9am',
  The9Am4Pm = '9am - 4pm',
  The9Am4Pm9Pm4Am = '9am - 4pm & 9pm - 4am',
  The9Pm4Am = '9pm - 4am',
}

export enum Locale {
  NameUSen = 'name-USen',
  NameEUen = 'name-EUen',
  NameEUde = 'name-EUde',
  NameEUes = 'name-EUes',
  NameUSes = 'name-USes',
  NameEUfr = 'name-EUfr',
  NameUSfr = 'name-USfr',
  NameEUit = 'name-EUit',
  NameEUnl = 'name-EUnl',
  NameCNzh = 'name-CNzh',
  NameTWzh = 'name-TWzh',
  NameJPja = 'name-JPja',
  NameKRko = 'name-KRko',
  NameEUru = 'name-EUru',
}

export enum LocaleCamel {
  NameUSen = 'nameUSen',
  NameEUen = 'nameEUen',
  NameEUde = 'nameEUde',
  NameEUes = 'nameEUes',
  NameUSes = 'nameUSes',
  NameEUfr = 'nameEUfr',
  NameUSfr = 'nameUSfr',
  NameEUit = 'nameEUit',
  NameEUnl = 'nameEUnl',
  NameCNzh = 'nameCNzh',
  NameTWzh = 'nameTWzh',
  NameJPja = 'nameJPja',
  NameKRko = 'nameKRko',
  NameEUru = 'nameEUru',
}
