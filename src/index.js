/* eslint-env browser */

/**
 * Opens a popup in the middle of the screen by setting width/left and height/top properties according to the arguments. See https://developer.mozilla.org/en-US/docs/Web/API/Window/open for all features.
 * @param {string} url The URL to open.
 * @param {string} title The window title.
 * @param {?number} [width] The width of the popup. Pass null to disable.
 * @param {?number} [height] The height of the popup. Pass null to disable.
 * @param {!Object<string, string>} [features] Window features.
 */
export default function popup (url, title, width, height, features = {}) {
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
  const wf = Object.keys(features).map((key) => {
    const val = features[key]
    const s = `${key}=${val}`
    return s
  })
  attrs.push(...wf)
  const w = window.open(url, title, attrs.join(','))
  return w
}