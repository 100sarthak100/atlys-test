/** @type {import('tailwindcss').Config} */

const loginScreenColors = {
  customGray: '#27292D',
  titleGray: '#6B6C70',
  inputLabelColor: '#C5C7CA',
  inputBorderColor: '#35373B',
  inputTextColor: '#7F8084'
}

const dashboardColors = {
  postDescBgColor: '#191920',
  postBtnColor: '#4A96FF',
  customBgColor1: '#131319'
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: '#141319',
        ...loginScreenColors,
        ...dashboardColors
      },
    },
  },
  plugins: [],
}

