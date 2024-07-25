import { defineConfig } from 'histoire'
import { defaultColors } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  setupFile: '/src/histoire-setup.ts',
  plugins: [
    HstSvelte(),
  ],
  theme: {
    title: 'Copa Web Desing Sytem Svelte',
    logo: {
      square: './static/favicon.png',
      light: './static/cm-logo-anhil.png',
      dark: './static/cm-logo-white.png'
    },
    favicon: './static/favicon.png',
    colors: {
      gray: defaultColors.stone,
      primary: {
        '50': '#ebf6ff',
        '100': '#d1ebff',
        '200': '#aeddff',
        '300': '#76caff',
        '400': '#35acff',
        '500': '#0782ff',
        '600': '#005cff',
        '700': '#0043ff',
        '800': '#0036d7',
        '900': '#0032a0',
      }
    },
  },
  responsivePresets: [
    {
      label: 'Mobile (Small / XS)',
      width: 320,
      height: 560,
    },
    {
      label: 'Mobile (Medium / XS )',
      width: 360,
      height: 640,
    },
    {
      label: 'Mobile (Large / XS)',
      width: 414,
      height: 896,
    },
    {
      label: 'Tablet (MD)',
      width: 768,
      height: 1024,
    },
    {
      label: 'Laptop (Small / MD)',
      width: 1024,
      height: 768,
    },
    {
      label: 'Laptop (Medium / MD)',
      width: 1366,
      height: 768,
    },
    {
      label: 'Desktop (Regular / LG)',
      width: 1920,
      height: 1080,
    },
  ],
  backgroundPresets: [
    {
      label: 'Transparent',
      color: 'transparent',
      contrastColor: '#333'
    },
    {
      label: 'White',
      color: '#fff',
      contrastColor: '#333'
    },
    {
      label: 'Black',
      color: '#000',
      contrastColor: '#fff'
    },
    {
      label: 'Paper',
      color: '#FCFCFC',
      contrastColor: '#333'
    },
    {
      label: 'Light Blue',
      color: '#EFF5FF',
      contrastColor: '#333'
    },
    {
      label: 'Primary ultra dark',
      color: '#001A66',
      contrastColor: '#fff'
    },
  ],
})
