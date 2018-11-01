# Timer
SlimIO - NodeJS Driftless Interval Timer

![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![V1.0](https://img.shields.io/badge/version-1.0.0-blue.svg)
![0DEP](https://img.shields.io/badge/Dependencies-0-yellow.svg)

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @slimio/timer
# or
$ yarn add @slimio/timer
```

## Usage example

```js
const timer = require("@slimio/timer");

timer.setInterval(() => {
    console.log("hello world!");
}, 1000);
```
