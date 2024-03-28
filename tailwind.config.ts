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
      'header': '#D9E4EC',

      //background
      'background_d' : '#0d0f14',
      'background' : '#FFFFFF',

      //box

      //#e3e3e3
      //#e3e3e3
      //#919191
      //#6f6f6f
      //#262626

      //background 
      'button_d' : '#2f3649',
      'button_hover_d' : '#434D68',
      'button' : '#b7cfdc',
      'button_hover' : '#6aabd2',


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
