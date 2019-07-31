# Timer
![Version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/SlimIO/Timer/master/package.json?token=Aeue0P3eryCYRikk9tHZScyXOpqtMvFIks5ca-XwwA%3D%3D&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SlimIO/Timer/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![dep](https://img.shields.io/david/SlimIO/Timer.svg)
![size](https://img.shields.io/github/repo-size/SlimIO/Timer.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/SlimIO/Timer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/SlimIO/Timer?targetFile=package.json)
[![Build Status](https://travis-ci.com/SlimIO/Timer.svg?branch=master)](https://travis-ci.com/SlimIO/Timer) [![Greenkeeper badge](https://badges.greenkeeper.io/SlimIO/Timer.svg)](https://greenkeeper.io/)

SlimIO - Node.js Driftless Interval Timer. This package is inspired by [driftless](https://github.com/dbkaplun/driftless)

> ⚠️ This package is experimental (Please dont use it outside).

## Requirements
- [Node.js](https://nodejs.org/en/) v10 or higher

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
