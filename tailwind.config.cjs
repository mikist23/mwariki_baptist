module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        surface: '#ffffff',
        surfaceAlt: '#f8fafc',
        ink: '#0f172a',
        muted: '#475569',
        accentSoft: '#fff7e6',
        borderSoft: '#e2e8f0',
        success: '#0f766e',
        warning: '#b45309',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      spacing: {
        section: '6.5rem',
        shell: '1.5rem',
      },
      borderRadius: {
        xl2: '1rem',
        xl3: '1.5rem',
      },
      boxShadow: {
        soft: '0 18px 40px -24px rgba(15, 23, 42, 0.22)',
        elevated: '0 30px 70px -42px rgba(15, 23, 42, 0.32)',
      },
      maxWidth: {
        prose: '70ch',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
