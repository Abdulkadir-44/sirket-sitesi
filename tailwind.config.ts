import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    // TailwindCSS v4'te darkMode farklı
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    900: '#1e3a8a',
                },
                dark: {
                    'background': '#111827', // gray-900
                    'text': '#f9fafb', // gray-50
                },
                orange: {
                    'accent': '#f97316', // orange-500
                    'hover': '#ea580c', // orange-600
                }
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