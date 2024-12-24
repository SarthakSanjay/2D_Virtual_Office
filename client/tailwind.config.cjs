/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customGray: '#242933',
                customRed: '#ec4c56',
                customLightGray: '#586171',
                customBlack: '#1A1A19',
                customDarkGreen: '#31511E',
                customLightGreen: '#859F3D',
                customTextGreen: '#F6FCDF'
            }
        },
    },
    plugins: [],
}
