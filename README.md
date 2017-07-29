# bitcoin

> BitCoin Demo for Dun & Bradstreet

Vue.js application that hits the blockchain.info (https://blockchain.info/ticker) service and shows last, buy, and sell prices for each currency.  Data can be refreshed by pressing the "Refresh" button.  This demo uses the Dun & Bradstreet design guide with the responsive header and footer and data table as provided by the D&B product design guide (https://productdesign.dnb.com/developers/).  There are css transitions that make the data red when it's loaded or refreshed, and it will then fade to black.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
