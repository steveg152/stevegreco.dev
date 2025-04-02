type Theme = 'theme-light' | 'dark' | 'system'

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'theme-light'
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) return savedTheme as Theme
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'theme-light'
}

export function setTheme(theme: Theme) {
  if (typeof window === 'undefined') return
  localStorage.setItem('theme', theme)
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
}

export function initializeTheme() {
  if (typeof window === 'undefined') return
  const theme = getTheme()
  setTheme(theme)
}
