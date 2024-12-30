/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroud: '#f1f3f4',
        secondaryBackground: '#f5f5f5',
        hearderColor: '#5f6368',
        textColor: '#3c4043',
      },
    },
  },
  plugins: [],
};
