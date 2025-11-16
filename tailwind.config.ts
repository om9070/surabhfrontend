import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        din: ["DIN", "sans-serif"],
        din_medium: ["DIN-Medium", "sans-serif"],
        din_sm: ["DIN-sm", "sans-serif"]
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        white: '#FFFFFF',
        lightGray: '#EFEFEF',
        black: '#000000',
        blue: {
          DEFAULT: '#4273F5',  
          light: '#6FA3F8',   
          dark: '#0A66D1',     
      },
        gray: '#8D8D8D',
        mediumGray: '#707070',
        darkGray: '#CFCBCB',
      },
      fontSize: {
        sm: ['14px', '20px'],
        //base: ['14.34px', '34.01px'],
        'base': ['14.34px', {
          lineHeight: '34.01px',
          letterSpacing: '1.43px',
        }],
        "custom": ['29.34px', {
          letterSpacing: '0.88px',
          // lineHeight: '136.01px',
        }],
        'heading': ['36px', {
          letterSpacing: '8px',
          lineHeight: '60px',
        }],
        'itemsHeading': ['35px', {
          lineHeight: '110px',
          letterSpacing: '12.25px',
        }],
        //xl: ['88.34px', '136.01px'],
        '2xl': ['54px', {
          lineHeight: '60px',
          letterSpacing: '16px',
        }],
        'main_title': ['40px', {
          lineHeight: '70px',
          letterSpacing: '10px',
        }],
        'mobile_hero': ['46px', {
          lineHeight: '70px',
          letterSpacing: '12px',
        }],
        '3xl': ['30px', {
          lineHeight: '36px',
          letterSpacing: '4px',
        }],
        'checkout_title': ['24px', {
          lineHeight: '40px',
          letterSpacing: '8px',
        }],
      }
    },
  },
  
  plugins: [],
}

export default config
