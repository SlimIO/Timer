// Require NodeJS Dependencies
const nodeTimer = require("timers");

// CONSTANTS
const THRESHOLD_MS = 1;
const AGGRESSION_RATE = 1.1;

/**
 * @const timeHandles
 * @type {Map<Number, NodeJS.Timeout>}
 * @desc Map of timeOut handles for Interval and Timeout
 */
const timeHandles = new Map();

// Timeout and Interval ID
let currTimeId = 0;

/**
 * @function now
 * @desc Return the current time with no clock drift
 * @return {Number}
 */
function now() {
    const [seconds, nanoseconds] = process.hrtime();

    return seconds * 1e3 + nanoseconds / 1e6;
}

/**
 * @function setTimer
 * @desc Set a new aggressive timeOut timer
 * @param {!Number} id Timer handle id
 * @param {*} opts timer options
 * @param {Number} opts.executedAt The timestamp at which timer should be executed
 * @param {*} opts.fn The callback that should be executed when the time is elapsed
 * @returns {void}
 */
function setTimer(id, opts) {
    /** @type {NodeJS.Timeout} */
    let timer;

    const delayMs = opts.executeAt - now();
    if (delayMs > THRESHOLD_MS) {
        timer = nodeTimer.setTimeout(() => setTimer(id, opts), delayMs / AGGRESSION_RATE);
    }
    else {
        timer = nodeTimer.setTimeout(() => opts.fn(), 0);
    }

    timeHandles.set(id, timer);
}

/**
 * @function clearTimer
 * @desc Clear a timer (interval or timeout) with his id.
 * @param {!Number} id Time handle id
 * @returns {void}
 */
function clearTimer(id) {
    if (timeHandles.has(id)) {
        nodeTimer.clearTimeout(timeHandles.get(id));
        timeHandles.delete(id);
    }
}

/**
 * @function setInterval
 * @desc Same as NodeJS.setInterval with no Drift
 * @param {*} callFN Function handler that should be executed after delayMs
 * @param {!Number} delayMs Delay in milliseconds before callFN execution
 * @param  {...any} params Handler parameters
 * @returns {Number}
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
    clearTimer
};
