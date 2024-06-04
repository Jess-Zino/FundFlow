/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': {'min': '768px', 'max': '1024px'}, // Custom tablet breakpoint
        'phone': {'max': '767px'}, // Custom phone breakpoint
    },
    clipPath: {
      'rect-to-hex': 'polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%)',
    },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-rect-to-hex': {
          clipPath: 'polygon(0% 0%, 100% 0%, 70% 50%, 100% 100%, 0% 100%)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

