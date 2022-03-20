module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Bright-Blue': 'hsl(220, 98%, 61%)',
        'Check-Background': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        'Very-Dark-Blue': 'hsl(235, 21%,11%)',
        'Very-Dark-Desaturated-Blue': 'hsl(235,24%,19%)',
        'Light-Grayish-Blue': 'hsl(234, 39%, 85%)',
        'Light-Grayish-Blue(hover)': 'hsl(236, 33%,92%)',
        'Dark-Grayish-Blue': 'hsl(234, 11%, 52%)',
        'Very-Dark-Grayish-Blue': 'hsl(233, 14%, 35%)',
      }
    },
  },
  plugins: [],
}