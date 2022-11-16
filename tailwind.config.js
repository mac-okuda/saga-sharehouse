const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {

 darkMode: false, // or 'media' or 'class'
 theme: {
  fontFamily: {
   sans: [
    '"Noto Sans JP"',
    '"ヒラギノ角ゴ ProN"',
    'Hiragino Kaku Gothic ProN',
    "メイリオ",
    'Meiryo',
    'sans-serif'
   ],
   min: [
    '游明朝',
    'YuMincho',
    '"Times New Roman"',
    '"ヒラギノ明朝 ProN W3"',
    '"Hiragino Mincho ProN"',
    '"MS P明朝"',
    '"MS PMincho"',
    'serif'
   ],
  },
  extend: {
    typography: {
        DEFAULT: {
          css: {
            color: '#333',
            maxWidth: '100%',
          },
        },
      },
    colors: {
      main01:"#33333",
      accent:"#A75B4B",
      main:"#93BABF",
    },
    fontSize: {
      '28p': '1.75rem',
    },
    spacing: {
      '88': '22rem',
      '128': '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  function({addComponents}) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        }
      })
    },
  ],
}
