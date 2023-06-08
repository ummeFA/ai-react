/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#74aa08",
        
"secondary": "#b137d3",
        
"accent": "#ead156",
        
"neutral": "#141c24",
        
"base-100": "#fcfcfd",
        
"info": "#6acdf0",
        
"success": "#3fd5b4",
        
"warning": "#b97d04",
        
"error": "#ed524a",
        },
      },
    ],
  },  
  plugins: [require("daisyui")],
}

