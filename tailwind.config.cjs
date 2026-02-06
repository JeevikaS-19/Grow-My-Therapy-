/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#e8ebed",
                navy: "#2c3f70",
                authorityRed: "#a5231c",
                cardBlue: "#c8d4e5",
            },
            fontFamily: {
                sans: ['Lora', 'serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
};
