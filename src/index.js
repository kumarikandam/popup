/* eslint-env browser */

/**
 * Opens a popup in the middle of the screen.
 * @param {string} url The URL to open.
 * @param {string} title The window title.
 * @param {number} [width] The width of the popup.
 * @param {number} [height] The height of the popup.
 */
export default function popup (url, title, width, height) {
  const { top: {
    outerHeight, screenY, outerWidth, screenX,
  } } = window
  const attrs = []
  if (width) {
    const x = outerWidth / 2 + screenX - (width / 2)
    const w = `width=${width}`
    const t = `left=${x}`
    attrs.push(w, t)
  }
  if (height) {
    const y = outerHeight / 2 + screenY - (height / 2)
    const t = `top=${y-50}`
    const h = `height=${height}`
    attrs.push(t, h)
  }
  const w = window.open(url, title, attrs.join(','))
  return w
}