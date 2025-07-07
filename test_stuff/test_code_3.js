"use strict";
var TestCode3;
(function (TestCode3) {
    let i = 0;
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    i = randomInt(0, 3);
    if (i == 1) {
        console.log("1");
    }
    else if (i == 2) {
        console.log("2");
    }
    else {
        console.log("else");
    }
    switch (i) {
        case 1:
            console.log("hiiiii");
            break;
        case 2:
            console.log("hello");
            break;
        default:
            console.log("bye");
            break;
    }
})(TestCode3 || (TestCode3 = {}));
//# sourceMappingURL=test_code_3.js.map