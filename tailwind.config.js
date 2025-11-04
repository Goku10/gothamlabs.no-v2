/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FACC15',
        accent: '#22D3EE',
        gotham: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          850: '#111827',
          900: '#0B0F14',
          950: '#05070A',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'gotham': '14px',
      },
      boxShadow: {
        'gotham': '0 4px 16px rgba(5, 7, 10, 0.15)',
        'glow-primary': '0 0 20px rgba(250, 204, 21, 0.3)',
        'glow-accent': '0 0 20px rgba(34, 211, 238, 0.3)',
      },
      maxWidth: {
        'gotham': '1200px',
      },
      gridTemplateColumns: {
        'gotham': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        'gotham': '24px',
      },
    },
  },
  plugins: [],
};
