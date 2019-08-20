"use strict";

// Require NodeJS Dependencies
const nodeTimer = require("timers");

/**
 * @namespace Timer
 */

// CONSTANTS
const THRESHOLD_MS = 1;
const AGGRESSION_RATE = 1.1;

/**
 * @constant timeHandles
 * @type {Map<number, NodeJS.Timeout>}
 * @description Map of timeOut handles for Interval and Timeout
 */
const timeHandles = new Map();

// Timeout and Interval ID
let currTimeId = 0;

// Force V8 de-opt (avoid cold boot).
now();
now();

/**
 * @function now
 * @description Return the current time with no clock drift
 * @returns {number}
 */
function now() {
    const [seconds, nanoseconds] = process.hrtime();

    // eslint-disable-next-line no-mixed-operators
    return seconds * 1e3 + nanoseconds / 1e6;
}

/**
 * @function setTimer
 * @description Set a new aggressive timeOut timer
 * @param {!number} id Timer handle id
 * @param {*} opts timer options
 * @param {number} opts.executedAt The timestamp at which timer should be executed
 * @param {*} opts.fn The callback that should be executed when the time is elapsed
 * @returns {void}
 */
function setTimer(id, opts) {
    const delayMs = opts.executeAt - now();
    if (delayMs > THRESHOLD_MS) {
        const timer = nodeTimer.setTimeout(() => setTimer(id, opts), delayMs / AGGRESSION_RATE);
        timeHandles.set(id, timer);
    }
    else {
        opts.fn();
    }
}

/**
 * @function clearInterval
 * @description Clear a timer (interval or timeout) with his id.
 * @memberof Timer#
 * @param {!number} id Time handle id
 * @returns {void}
 */
function clearInterval(id) {
    if (timeHandles.has(id)) {
        nodeTimer.clearTimeout(timeHandles.get(id));
        timeHandles.delete(id);
    }
}

/**
 * @function setInterval
 * @description Same as NodeJS.setInterval with no Drift
 * @memberof Timer#
 * @param {*} callFN Function handler that should be executed after delayMs
 * @param {!number} delayMs Delay in milliseconds before callFN execution
 * @param  {...any} params Handler parameters
 * @returns {number}
 */
function setInterval(callFN, delayMs = 1, ...params) {
    const id = currTimeId++;
    setTimer(id, {
        executeAt: now() + delayMs,
        fn() {
            this.executeAt += delayMs;
            setTimer(id, this);

            return callFN(...params);
        }
    });

    return id;
}

module.exports = {
    setInterval,
    clearInterval
};
