export function userPrefersDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
