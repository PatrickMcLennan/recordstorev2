# recordStore

###### Version 2

## Front End

recordStore is made with TypeScript, React + Styled Components, tied together with Webpack.

#### Usage

`npm start` starts up the webpack-dev-server and opens a Chrome tab pointed at localhost:8080 for you. Hot reloading is ready to go.

`npm run build` compiles all of the code into `dist` for production. Minified, es5 JS is split into seperate files based on Vendor/Source code, and then split further. Each big vendor is split into it's own file, and source code is split via JS & CSS(-In-JS). Each file is then hashed and only rebuilt on changes to that code, allowing for optimal caching within the browser.
