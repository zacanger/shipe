# shipe

Use Node in Shell pipelines

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

--------

## Installation

`npm i -g shipe`, or use on the fly with `npx shipe`

## Usage

`echo foo | shipe 'a => a.trim() + "bar"'` => `foobar`

More complex example:

```shell
~ echo .bashrc | npx shipe "a=>{const b=require('fs').readFileSync(a.trim(),'utf8').split('\n');return b[b.length - 2]}" | rev
npx: installed 1 in 1.057s
if
~ 
```

[LICENSE](./LICENSE.md)
