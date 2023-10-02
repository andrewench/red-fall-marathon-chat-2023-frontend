import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'marathon-black': '#00010d',
        'marathon-red': '#e51515',
      },
      borderRadius: {
        'marathon-10': '10px',
        'marathon-15': '15px',
        'marathon-20': '20px',
      },
    },
  },
  plugins: [],
}
export default config
