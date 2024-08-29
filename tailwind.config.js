/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#16161a',
        backgroundColor1: 'rgb(40, 44, 51)',
        backgroundColor2: 'rgb(54, 59, 69)',
        primaryLight: 'rgba(85, 121, 255, 0.7)',
        menuBG: '#94a1b2',
        stroke: '#94a1b2',
        projectHeaderStroke: 'rgba(78, 85, 99)',
        font: '#94a1b2',
        primary: 'rgb(85, 121, 255)',
        lightBorder: 'rgba(255, 255, 255, 0.05)',
        link: 'rgb(85, 121, 255)',
        listBG: '#242629',
        listItemHeadline: '#fffffe',
        headLine: '#fffffe',
        lighter: 'rgba(85, 121, 255, 0.7)',
        inlineCodeFont: '#d9d7e0',
        inlineCodeBG: 'rgba(114, 125, 154, 0.3)',
        listItemFont: '#94a1b2',
        hoverContact: '#2c4399',
      },
      fontFamily: {
        sans: ['Khula', 'sans-serif'], // Añadir Khula como fuente predeterminada
      },
    },
  },
  plugins: [],
}
