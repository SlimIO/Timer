const japaTest = require("japa");
const Timer = require("../index.js");

japaTest("setTimeout", (assert) => {
    let count = 0;
    function callback() {
        count++;
    }

    const timerInterval = Timer.setInterval(callback, 100);
    setTimeout(() => {
        assert.is(count, 2);
        Timer.clearInterval(timerInterval);
    }, 200);
});
