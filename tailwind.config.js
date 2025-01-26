/**  @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src//*.{js,jsx,ts,tsx}",
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
                    "2xl": "1360px",
                },
            },
            colors: {
                "purple": '#815ccb',
                "blue": "#1BABFE",
            },
            fontSize: {
                "custom-xl": '22px',
                "custom-4xl": '40px',
            },
            lineHeight: {
                'custom-xl': '127%',
                'custom-2xl': '156%',
                'custom-3xl': '164%',
                'custom-4xl': '179%',

            },

        },
    },
    plugins: [],
}