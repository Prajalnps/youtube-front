## installing tailwind dependencies
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

## change the tailwind.config.js file to 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

## import to index.css file

@tailwind base;
@tailwind components;
@tailwind utilities;

# DONE #


