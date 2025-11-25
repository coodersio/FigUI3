/**
 * Color Ramps
 *
 * Base color scales with 10 levels each.
 * 21 colors extracted from Figma UI3 design system.
 */

export type ColorRampLevel = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

export type ColorRamp = Record<ColorRampLevel, string>;

export interface ColorRamps {
  white: ColorRamp;
  black: ColorRamp;
  grey: ColorRamp;
  blue: ColorRamp;
  purple: ColorRamp;
  pink: ColorRamp;
  red: ColorRamp;
  orange: ColorRamp;
  yellow: ColorRamp;
  green: ColorRamp;
  violet: ColorRamp;
  teal: ColorRamp;
  persimmon: ColorRamp;
  pale_blue: ColorRamp;
  pale_purple: ColorRamp;
  pale_pink: ColorRamp;
  pale_red: ColorRamp;
  pale_yellow: ColorRamp;
  pale_green: ColorRamp;
  pale_violet: ColorRamp;
  pale_teal: ColorRamp;
  pale_persimmon: ColorRamp;
}

export const colorRamps: ColorRamps = {
  white: {
    100: '#ffffff0d',
    200: '#ffffff1a',
    300: '#ffffff33',
    400: '#ffffff66',
    500: '#ffffffb2',
    600: '#ffffffcc',
    700: '#ffffffd9',
    800: '#ffffffe5',
    900: '#fffffff2',
    1000: '#ffffff',
  },
  black: {
    100: '#0000000d',
    200: '#0000001a',
    300: '#00000033',
    400: '#0000004d',
    500: '#00000080',
    600: '#000000cc',
    700: '#000000d9',
    800: '#000000e5',
    900: '#000000f2',
    1000: '#000000',
  },
  grey: {
    100: '#f5f5f5',
    200: '#e6e6e6',
    300: '#d9d9d9',
    400: '#b3b3b3',
    500: '#757575',
    600: '#444444',
    700: '#383838',
    800: '#2c2c2c',
    900: '#1e1e1e',
    1000: '#111111',
  },
  blue: {
    100: '#f2f9ff',
    200: '#e5f4ff',
    300: '#bde3ff',
    400: '#80caff',
    500: '#0d99ff',
    600: '#007be5',
    700: '#0768cf',
    800: '#034ac1',
    900: '#093077',
    1000: '#0d193f',
  },
  purple: {
    100: '#f9f5ff',
    200: '#f1e5ff',
    300: '#e4ccff',
    400: '#d9b8ff',
    500: '#9747ff',
    600: '#8638e5',
    700: '#7c2bda',
    800: '#681abb',
    900: '#4b0d87',
    1000: '#2d0f46',
  },
  pink: {
    100: '#fff0fe',
    200: '#ffe0fc',
    300: '#ffbdf2',
    400: '#ff99e0',
    500: '#ff24bd',
    600: '#ea10ac',
    700: '#cb0b96',
    800: '#971172',
    900: '#5f114c',
    1000: '#451138',
  },
  red: {
    100: '#fff5f5',
    200: '#ffe2e0',
    300: '#ffc7c2',
    400: '#ffafa3',
    500: '#f24822',
    600: '#dc3412',
    700: '#bd2915',
    800: '#9f1f18',
    900: '#771208',
    1000: '#660e0b',
  },
  orange: {
    100: '#fff4e5',
    200: '#ffe0c2',
    300: '#fcd19c',
    400: '#ffc470',
    500: '#ffa629',
    600: '#fc9e24',
    700: '#f79722',
    800: '#dd7c0e',
    900: '#ce7012',
    1000: '#8a480f',
  },
  yellow: {
    100: '#fffbeb',
    200: '#fff1c2',
    300: '#ffe8a3',
    400: '#ffd966',
    500: '#ffcd29',
    600: '#ffc21a',
    700: '#fab815',
    800: '#eba611',
    900: '#dd940e',
    1000: '#b86200',
  },
  green: {
    100: '#ebffee',
    200: '#cff7d3',
    300: '#aff4c6',
    400: '#85e0a3',
    500: '#14ae5c',
    600: '#009951',
    700: '#008043',
    800: '#036838',
    900: '#024626',
    1000: '#083a23',
  },
  violet: {
    100: '#f5f5ff',
    200: '#ebebff',
    300: '#d3d1ff',
    400: '#b4b2ff',
    500: '#4d49fc',
    600: '#443deb',
    700: '#3d32e2',
    800: '#3620df',
    900: '#2f15ac',
    1000: '#1d1254',
  },
  teal: {
    100: '#ebfbff',
    200: '#cef0f8',
    300: '#b6ecf7',
    400: '#75d7f0',
    500: '#00a2c2',
    600: '#0087a8',
    700: '#047195',
    800: '#085a78',
    900: '#093c53',
    1000: '#0e2f43',
  },
  persimmon: {
    100: '#fff2eb',
    200: '#ffdfcc',
    300: '#ffbb9e',
    400: '#ffa27a',
    500: '#ff5c16',
    600: '#e24c0c',
    700: '#c53e0d',
    800: '#aa370d',
    900: '#842d0b',
    1000: '#611d0a',
  },
  pale_blue: {
    100: '#f1f5f8',
    200: '#e3ecf2',
    300: '#d2dae4',
    400: '#afbccf',
    500: '#667799',
    600: '#536383',
    700: '#4a5878',
    800: '#394360',
    900: '#252d41',
    1000: '#121721',
  },
  pale_purple: {
    100: '#f4f1f8',
    200: '#ede7f3',
    300: '#e0d4ed',
    400: '#c5b2dc',
    500: '#7f699b',
    600: '#6b5884',
    700: '#604d75',
    800: '#473956',
    900: '#33293d',
    1000: '#1a141f',
  },
  pale_pink: {
    100: '#f6eef4',
    200: '#f2e3ee',
    300: '#e8cee1',
    400: '#daaace',
    500: '#ab5998',
    600: '#86507a',
    700: '#724667',
    800: '#51344a',
    900: '#33252f',
    1000: '#1b1318',
  },
  pale_red: {
    100: '#faedeb',
    200: '#f8e5e2',
    300: '#f3cfc9',
    400: '#eba99d',
    500: '#d4583b',
    600: '#a55440',
    700: '#864537',
    800: '#60332a',
    900: '#412621',
    1000: '#1f1514',
  },
  pale_yellow: {
    100: '#fff5eb',
    200: '#fdeece',
    300: '#f5dfa8',
    400: '#e8cd7d',
    500: '#ad7f00',
    600: '#906800',
    700: '#7a5800',
    800: '#5c4100',
    900: '#3a2a10',
    1000: '#211a12',
  },
  pale_green: {
    100: '#f1f8f2',
    200: '#daecdf',
    300: '#c3e0cc',
    400: '#9fc1aa',
    500: '#678e79',
    600: '#5c806d',
    700: '#517361',
    800: '#476656',
    900: '#2f483c',
    1000: '#172b22',
  },
  pale_violet: {
    100: '#f1f1f8',
    200: '#e7e7f3',
    300: '#d4d4ed',
    400: '#b3b2dc',
    500: '#6a699b',
    600: '#595884',
    700: '#4e4d75',
    800: '#393956',
    900: '#29293d',
    1000: '#14141f',
  },
  pale_teal: {
    100: '#f1f6f8',
    200: '#e3eef2',
    300: '#cedee4',
    400: '#a3c2cc',
    500: '#518394',
    600: '#436c7a',
    700: '#3c606d',
    800: '#2f4c56',
    900: '#1f3238',
    1000: '#101a1e',
  },
  pale_persimmon: {
    100: '#faefeb',
    200: '#f8e9e2',
    300: '#f3d6c9',
    400: '#ebb49d',
    500: '#d4693b',
    600: '#a55e40',
    700: '#864e37',
    800: '#603a2a',
    900: '#412b21',
    1000: '#1f1714',
  },
};
