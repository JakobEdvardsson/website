import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      //header
      'header_d' : '#1b1f2a',
      'header': '#d4d4d4',

      //background
      'background_d' : '#0d0f14',
      'background' : '#fafafa',

      //box


      //background
      'popcolor' : '#F54B64',
      'light_grey': '#4e596f',
      'lighter_grey': '#c4c8d3',

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
