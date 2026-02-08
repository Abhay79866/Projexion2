import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366F1', // Indigo 500
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#818CF8', // Indigo 400
                    foreground: '#FFFFFF',
                },
                cta: {
                    DEFAULT: '#10B981', // Emerald 500
                    foreground: '#FFFFFF',
                },
                background: '#F5F3FF', // Violet 50
                text: '#1E1B4B', // Indigo 950
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        function ({ addUtilities }) {
            addUtilities({
                '.glass': {
                    'backdrop-filter': 'blur(12px)',
                    'background-color': 'rgba(255, 255, 255, 0.7)',
                    'border': '1px solid rgba(255, 255, 255, 0.2)',
                    'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
                '.glass-dark': {
                    'backdrop-filter': 'blur(12px)',
                    'background-color': 'rgba(15, 23, 42, 0.7)',
                    'border': '1px solid rgba(255, 255, 255, 0.1)',
                    'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                },
            })
        }
    ],
}
