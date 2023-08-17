import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'backgroud': '#121120',
        'button-header': '#82828A33',
      },
      backgroundImage: {
        'efect': "url('/efect.svg')",
      },
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
export default config
