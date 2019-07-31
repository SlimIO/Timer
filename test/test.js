"use strict";

// Require Third-party Dependencies
const japaTest = require("japa");

// Require Internal Dependencies
const Timer = require("../index.js");

japaTest("setTimeout", async(assert) => {
    assert.plan(1);
    let count = 0;
    function callback() {
        count++;
    }

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
    let count = 0;
    function callback() {
        count++;
    }

    const timerInterval = Timer.setInterval(callback);
    try {
        await new Promise((resolve) => setTimeout(resolve, 4));
        assert.equal(count, 2);
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
