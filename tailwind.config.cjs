/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--rob-roy-300)',
        'primary-50': 'var(--rob-roy-50)',
        'primary-100': 'var(--rob-roy-100)',
        'primary-200': 'var(--rob-roy-200)',
        'primary-300': 'var(--rob-roy-300)',
        'primary-400': 'var(--rob-roy-400)',
        'primary-500': 'var(--rob-roy-500)',
        'primary-600': 'var(--rob-roy-600)',
        'primary-700': 'var(--rob-roy-700)',
        'primary-800': 'var(--rob-roy-800)',
        'primary-900': 'var(--rob-roy-900)',

        secondary: 'var(--blue-smoke-400)',
        'secondary-50': 'var(--blue-smoke-50)',
        'secondary-100': 'var(--blue-smoke-100)',
        'secondary-200': 'var(--blue-smoke-200)',
        'secondary-300': 'var(--blue-smoke-300)',
        'secondary-400': 'var(--blue-smoke-400)',
        'secondary-500': 'var(--blue-smoke-500)',
        'secondary-600': 'var(--blue-smoke-600)',
        'secondary-700': 'var(--blue-smoke-700)',
        'secondary-800': 'var(--blue-smoke-800)',
        'secondary-900': 'var(--blue-smoke-900)',
        'secondary-950': 'var(--blue-smoke-950)',
      },
    },
  },
  plugins: [],
}
