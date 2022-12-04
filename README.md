# shipe

Use Node in Shell pipelines

--------

## Installation

`npm i -g shipe`, or use on the fly with `npx shipe`

## Usage

`echo foo | shipe 'a => a.trim() + "bar"'` => `foobar`

More complex example:

```shell
~ echo .bashrc | npx shipe "a=>{const b=require('fs').readFileSync(a.trim(),'utf8').split('\n');return b[b.length - 2]}" | rev
npx: installed 1 in 1.057s
"nib/XIFERP_N$:"=+HTAP || ]] *":nib/XIFERP_N$:"* == :HTAP$: [[
~ 
```

[LICENSE](./LICENSE.md)
