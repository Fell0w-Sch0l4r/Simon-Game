/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/js/app.js"],
    theme: {
        extend: {
            fontFamily: {
                press: ['"Press Start 2P"'],
            },
        },
    },
    plugins: [],
};

