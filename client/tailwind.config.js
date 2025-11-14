/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',  // Neon Green
        accent: '#ff00ff',   // Hot Pink
        bgDark: '#0f0f1a',   // Deep Void
        card: '#1a1a2e',     // Subtle Shadow
        text: '#e0e0ff',     // Soft Glow
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px #00ff88' },
          'to': { boxShadow: '0 0 20px #00ff88, 0 0 30px #00ff88' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],  // Dark by default — pure neon dreams
    darkTheme: "dark",
  },
}