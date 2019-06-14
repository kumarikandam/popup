# @lemuria/popup

[![npm version](https://badge.fury.io/js/%40lemuria%2Fpopup.svg)](https://npmjs.org/package/@lemuria/popup)

`@lemuria/popup` is The Function To Open A Popup.

```sh
yarn add @lemuria/popup
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import popup from '@lemuria/popup'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

```## popup => Window
[
  ["url", "string"],
  ["title", "string"],
  ["width", "?number"],
  ["height", "?number"],
  ["features", "Object="],
]
```

Opens a popup in the middle of the screen, and returns the reference to the window.

```js
import popup from '@lemuria/popup'

const editor = popup('/admin/editor', 'Editor', 900, 650, {
  menubar: 'yes',
})
```
<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

Window features are copyright of [MDN authors](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a>   2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>