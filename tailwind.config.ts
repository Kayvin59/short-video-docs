import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@coinbase/onchainkit/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    colors: {
      // #0052FF
      black: '#000',
      blue: {
        base: '#0052FF',
        950: '#263238',
      },
      gray: {
        100: '#f3f4f6',
        900: '#1f2937',
      },
    },
  },
  plugins: [],
};

export default config;
