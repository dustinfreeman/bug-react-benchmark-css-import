# bug-react-benchmark-css-import

This is a minimal example showing css import issues I'm having with [react-benchmark](https://github.com/Rowno/react-benchmark), which uses webpack. Please help!?

For normal development, I use yarn, and I can start the app successfully with:

```
$ yarn
$ yarn start
```

However, when I attempt to run the benchmark like so:

```
$ react-benchmark --debug src/index.tsx
```

I get the following import error:

```
✖ Compiling bundle
/Users/dustinfreeman/Documents/Code/bug-react-benchmark-css-import/src/index.css 1:5
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> body {
|   font: 14px 'Century Gothic', Futura, sans-serif;
|   margin: 20px;
 @ /Users/dustinfreeman/Documents/Code/bug-react-benchmark-css-import/src/index.tsx 3:0-21
 @ ./client.js
 ```

 I've tried a few variations to set the css loader `webpack.config.js` and I can't seem to get it to work.

