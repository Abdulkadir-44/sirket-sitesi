import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: {
                    primary: '#3b82f6', // blue-500
                    background: '#ffffff', // white
                    text: '#1f2937', // gray-800
                },
                dark: {
                    primary: '#f97316', // orange-500
                    background: '#1f2937', // gray-800
                    text: '#f3f4f6', // gray-100
                },
            },
            fontFamily: {
                newsreader: ['var(--font-newsreader)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                heading: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config