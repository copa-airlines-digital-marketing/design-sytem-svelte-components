import { create } from '@storybook/theming/create';
import logo from './../static/logo.png'

export default create({
  base: 'light',
  brandTitle: 'Copa Airlines Storybook',
  brandUrl: 'https://www.copaair.com',
  brandImage: logo,
  brandTarget: '_self',
  fontBase: 'Gilroy, sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: '#666',
  barSelectedColor: '#0032A0',
  barHoverColor: '#0E68FF',
  barBg: '#EFF5FF',

  appBg: '#EFF5FF',
  appContentBg: '#EFF5FF',
  appPreviewBg: '#FCFCFC',
  appBorderColor: '#DBDAD8',
  appBorderRadius: 0,

  // Text colors
  textColor: '#666',
  textInverseColor: '#333',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#CCCCCB',
  inputTextColor: '#333',
  inputBorderRadius: 2,

  //
  colorPrimary: '#00A3E0',
  colorSecondary: '#0032A0',
});