const { _Popup } = require('./depack')

/**
 * Opens a popup in the middle of the screen by setting width/left and height/top properties according to the arguments. See https://developer.mozilla.org/en-US/docs/Web/API/Window/open for all features. Returns the reference to the window.
 * @param {string} url The URL to open.
 * @param {string} title The window title.
 * @param {?number=} [width] The width of the popup. Enables horizontal centering.
 * @param {?number=} [height] The height of the popup. Enables vertical centering.
 * @param {!Object<string, string>=} [features] Window features. When compiling with Closure Compiler, some properties might need to appear in quotes, e.g., `{ 'status': 'no' }` as there are no externs for them.
 * @return {Window}
 */
function Popup(url, title, width, height, features) {
  return _Popup(url, title, width, height, features)
}

module.exports = Popup()