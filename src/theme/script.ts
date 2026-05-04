export const themeScript = `(function() {
  try {
    const isDark =
      localStorage.theme === 'dark' ||
      ((!('theme' in localStorage) || localStorage.theme === 'system') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

    if (isDark) {
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#09090b');
      }
    }
  } catch (_) {}
})();`;
