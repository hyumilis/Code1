"use strict";
var SpinnThatThing;
(function (SpinnThatThing) {
    let amount = 20;
    window.addEventListener("load", hndLoad);
    let balls = [];
    function hndLoad() {
        for (let i = 0; i < amount; i++) {
            const ball = { element: document.createElement("span"), position: { x: 50 + i * 25, y: 120 - i * 10 }, velocity: { x: 5, y: 3 } };
            document.body.appendChild(ball.element);
            balls.push(ball);
        }
        update();
    }
    function update() {
        for (let ball of balls) {
            ball.element.style.transform = `matrix(20, 0, 0, 20, ${ball.position.x}, ${ball.position.y})`;
            ball.position.x += ball.velocity.x;
            ball.position.y += ball.velocity.y;
            ball.position.x %= window.innerWidth;
            ball.position.y %= window.innerHeight;
            console.log(`Ball position: (${ball.position.x}, ${ball.position.y})`);
        }
        setTimeout(update, 16);
    }
})(SpinnThatThing || (SpinnThatThing = {}));
;
//# sourceMappingURL=stt.js.map