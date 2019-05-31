# Timer
![V1.0](https://img.shields.io/badge/version-1.0.1-blue.svg)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![0DEP](https://img.shields.io/badge/Dependencies-0-yellow.svg)

SlimIO - Node.js Driftless Interval Timer. This package is inspired by [driftless](https://github.com/dbkaplun/driftless)

> ⚠️ This package is experimental (Please dont use it outside).

## Requirements
- Node.js v10 or higher

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
timer.clearInterval(timerId);
```

## API

### timer.setInterval(handler: Function, intervalMs: number): number
Create a new interval. Same API as Node.js !

### timer.clearInterval(intervalId: number): void
Clear a given interval id (the number returned by setInterval).

## Dependencies
This project have no dependencies.

## License
MIT
