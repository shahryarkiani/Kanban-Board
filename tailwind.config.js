/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [],
  safelist: [
      'border-lime-500',
      'border-orange-500',
      'border-yellow-400',
      'bg-lime-500',
      'bg-orange-500',
      'bg-yellow-400',
      'bg-slate-300',
      'justify-center',
      'justify-normal'
  ]
}

