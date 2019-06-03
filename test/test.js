const japaTest = require("japa");
const Timer = require("../index.js");

japaTest("setTimeout", async(assert) => {
    let count = 0;
    function callback() {
        count++;
    }

    const timerInterval = Timer.setInterval(callback, 100);
    await new Promise((resolve) => {
        setTimeout(() => {
            assert.equal(count, 2);
            Timer.clearInterval(timerInterval);
            console.log("test");
            resolve();
        }, 202);
    });
});

japaTest("setTimeout without time", async(assert) => {
    let count = 0;
    function callback() {
        count++;
    }

    const timerInterval = Timer.setInterval(callback);
    await new Promise((resolve) => {
        setTimeout(() => {
            assert.equal(count, 2);
            Timer.clearInterval(timerInterval);
            console.log("test");
            resolve();
        }, 4);
    });
});

japaTest("clear unexistant interval", async(assert) => {
    Timer.clearInterval(-2);
    Timer.clearInterval("");
    Timer.clearInterval({});
    Timer.clearInterval([]);
});
