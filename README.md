# @lemuria/popup

[![npm version](https://badge.fury.io/js/%40lemuria%2Fpopup.svg)](https://npmjs.org/package/@lemuria/popup)

`@lemuria/popup` is The Function To Open A Popup.

```sh
yarn add @lemuria/popup
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`Popup(url, title, width=, height=, features=): Window`](#popupurl-stringtitle-stringwidth-numberheight-numberfeatures-objectstring-string-window)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import Popup from '@lemuria/popup'
```

The package publishes both `main` and `module` fields, where `main` exports a _CommonJS_ module (require), and `module` exports an _ES6_ module (import).

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>Popup</ins>(</code><sub><br/>&nbsp;&nbsp;`url: string,`<br/>&nbsp;&nbsp;`title: string,`<br/>&nbsp;&nbsp;`width=: ?number,`<br/>&nbsp;&nbsp;`height=: ?number,`<br/>&nbsp;&nbsp;`features=: !Object<string, string>,`<br/></sub><code>): <i>Window</i></code>
Opens a popup in the middle of the screen by setting width/left and height/top properties according to the arguments. See https://developer.mozilla.org/en-US/docs/Web/API/Window/open for all features. Returns the reference to the window.

 - <kbd><strong>url*</strong></kbd> <em>`string`</em>: The URL to open.
 - <kbd><strong>title*</strong></kbd> <em>`string`</em>: The window title.
 - <kbd>width</kbd> <em>`?number`</em> (optional): The width of the popup. Enables horizontal centering.
 - <kbd>height</kbd> <em>`?number`</em> (optional): The height of the popup. Enables vertical centering.
 - <kbd>features</kbd> <em><code>!Object&lt;string, string&gt;</code></em> (optional): Window features. When compiling with Closure Compiler, some properties might need to appear in quotes, e.g., `{ 'status': 'no' }` as there are no externs for them.

```js
import Popup from '@lemuria/popup'

const editor = Popup('/admin/editor', 'Editor', 900, 650, {
  menubar: 'yes',
})
```
<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

Window features are copyright of [MDN authors](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a>   2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img width="100" src="https://raw.githubusercontent.com/idiocc/cookies/master/wiki/arch4.jpg"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>