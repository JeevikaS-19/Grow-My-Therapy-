/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#E0E5E9",
                slate: "#2D3339",
                accent: "#C28E7E",
            },
            fontFamily: {
                sans: ['Satoshi', 'sans-serif'],
                serif: ['Bricolage Grotesque', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
