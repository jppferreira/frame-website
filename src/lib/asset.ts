/** Prefix public assets with Vite `base` (needed for GitHub Pages `/frame-website/`). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  return `${base}${path.replace(/^\//, '')}`
}
