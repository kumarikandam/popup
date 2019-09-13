const { _Popup } = require('./depack')

/**
 * @methodType {_lemuria.Popup}
 */
function Popup(url, title, width, height, features) {
  return _Popup(url, title, width, height, features)
}

module.exports = Popup()