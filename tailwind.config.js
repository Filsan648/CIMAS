/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    	extend: {

    		fontFamily: {
    			roboto: [
    				'Roboto',
    				'sans-serif'
    			]
    		},
    		animation: {
    			shine: 'shine var(--duration) infinite linear',
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
    		},
    		keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
    		}
    	}
    },
    plugins: [],
  };
  