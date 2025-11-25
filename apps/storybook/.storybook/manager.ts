import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import logo from './logo.svg';

const theme = create({
  base: 'light',
  brandTitle: 'FigUI3',
  brandUrl: 'https://github.com',
  brandImage: logo,
  brandTarget: '_self',

  // Colors
  colorPrimary: '#0D99FF',
  colorSecondary: '#9747FF',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e6e6e6',
  appBorderRadius: 5,

  // Text colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar
  barTextColor: '#000000',
  barSelectedColor: '#0D99FF',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e6e6e6',
  inputTextColor: '#000000',
  inputBorderRadius: 5,
});

addons.setConfig({
  theme,
});
