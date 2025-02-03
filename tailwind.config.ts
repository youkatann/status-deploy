import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))',
  			},
			  purpleLight: '#C4A1FF',
			  purpleAccent: '#A388EE',
			  white: '#FFF',
			  beige: '#efece5',
			  greenLight: '#BAFCA2',
			  pinkLight: '#FFC0CB',
			  blueLight: '#A7DBD8',
			  roseLight: '#FFA07A',
			  roseBase: '#FF7A5C'
  		},
		boxShadow: {
			brutalism: '4px 6px 0 rgba(0, 0, 0, 1)',
			brutalismWhite: '4px 6px 0 rgb(255, 255, 255)',
			circle: '0px 60px 50px rgba(0, 0, 0, 0.75)'
		}
  	}
  },
  plugins: [require("tailwindcss-animate"),
	function ({ addUtilities }) {
		addUtilities({
			'.text-stroke-2': {
				'-webkit-text-stroke': '2px black',
			}
			})
			}
			],
} satisfies Config;
