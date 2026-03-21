/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-color': 'var(--text-color)',
        'text-secondary': 'var(--text-secondary)',
        'accent': 'var(--accent-color)',
        'accent-hover': 'var(--accent-hover)',
        'accent-light': 'var(--accent-light)',
        'border-color': 'var(--border-color)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
