/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                todo: {
                    black: '#131815',
                    green: '#00763A',
                    blue: {
                        1: '#06AED5',
                        2: '#023E87',
                        3: '#4242be',
                        4: '#4646b8d2',
                    },
                    purple: {
                        1: '#755486',
                        2: '#31004A',
                        3: '#BFB0C7',
                    },
                    grey: {
                        1: '#C4C5C4',
                        2: '#F3F3F5',
                        3: '#4F5452',
                        4: '#6E7270',
                        5: '#9FA2A0',
                        6: '#F5F5F5',
                        7: '#131815',
                    },
                },
            },
        },
    },
    plugins: [],
};
