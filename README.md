# Timer
SlimIO - NodeJS Driftless Interval Timer. This package is inspired by [driftless](https://github.com/dbkaplun/driftless)

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

## Why

Node.js timer (interval and timeout) drift with the time. This package aim to implement a no-drift setInterval.

## Usage example

```js
const timer = require("@slimio/timer");

const timerId = timer.setInterval(() => {
    console.log("hello world!");
}, 1000);

// Later...
timer.clearTimer(timerId);
```

## ROADMAP
- complete package with `slimio/is` to check argument ?
- complete with better test
