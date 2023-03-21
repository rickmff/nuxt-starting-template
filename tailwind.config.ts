/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        blue: '#073293',
        'blue-soft': '#8398CA',
        orange: '#FA6800',
        white: '#ffffff',
        'gray-soft': '#F7F8FD'
      },
      fontFamily: {
        sans: ['inter', 'sans-serif'],
        serif: ['inter', 'serif']
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem'
        },
        borderRadius: {
          '5xl': '5px'
        }
      }
    }
  }
}
