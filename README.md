# deno npm global window bug

Chnages to the `window` object cannot be read from inside an npm package.

## Steps to reproduce

1. Clone this repo
2. Run `deno run -A foo.js`

If successful the string ´"it works"` should have been printed to the console.
