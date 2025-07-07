namespace SpinnThatThing {
    type Vec2d = { x: number, y: number };
    type Ball = { element: HTMLSpanElement, position: Vec2d, velocity: Vec2d };

    let amount: number = 20;
    window.addEventListener("load", hndLoad);
    let balls: Ball[] = [];

    function hndLoad(): void {
        for (let i: number = 0; i < amount; i++) {
            const ball: Ball = { element: document.createElement("span"), position: { x: 50 + i * 25, y: 120 - i * 10 }, velocity: { x: 5, y: 3 } };
            document.body.appendChild(ball.element);
            balls.push(ball);
        }
        update();
    }

    function update(): void {
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

};