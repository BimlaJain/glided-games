/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "20px",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1140px",
                    '2xl' : "1320px"
                },
            },
            colors: {
                "blue": '#1BABFE',
                "naturalblack": '#222222',
                "lightgray": '#D1E0E9',
                "offblack": "#01000B",

            },
        },
    },
    plugins: [],
}