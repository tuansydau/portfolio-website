import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        array: ['Array-Regular', 'sans-serif'],
        arrayWide: ['Array-Wide', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        poppinsThin: ['Poppins-Thin', 'sans-serif'],
        poppinsLight: ['Poppins-Light', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
