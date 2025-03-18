import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      blue: {
        base: '#0052FF',
      },
    },
  },
  plugins: [],
};

export default config;
