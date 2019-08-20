"use strict";

// Require Third-party Dependencies
const japaTest = require("japa");

// Require Internal Dependencies
const Timer = require("../index.js");

let count = 0;
function callback() {
    count++;
}

japaTest("prevent cold JIT (dont touch)", async(assert) => {
    const timerInterval = Timer.setInterval(callback, 20);
    try {
        await new Promise((resolve) => setTimeout(resolve, 200));
    }
    finally {
        Timer.clearInterval(timerInterval);
    }
    assert.equal(1, 1);
});


japaTest("setTimeout", async(assert) => {
    assert.plan(1);
    count = 0;

    const timerInterval = Timer.setInterval(callback, 100);
    try {
        await new Promise((resolve) => setTimeout(resolve, 205));
        assert.equal(count, 2);
    }
    finally {
        Timer.clearInterval(timerInterval);
    }
});

japaTest("setTimeout without time", async(assert) => {
    assert.plan(1);
    const possibleValues = new Set([3, 4, 5]);
    count = 0;

    const timerInterval = Timer.setInterval(callback);
    try {
        await new Promise((resolve) => setTimeout(resolve, 4));
        assert.equal(possibleValues.has(count), true);
    }
    finally {
        Timer.clearInterval(timerInterval);
    }
});

japaTest("clear unexistant interval", async(assert) => {
    Timer.clearInterval(-2);
    Timer.clearInterval("");
    Timer.clearInterval({});
    Timer.clearInterval([]);
});
