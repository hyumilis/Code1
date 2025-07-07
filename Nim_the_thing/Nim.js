"use strict";
// Nim The Game
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// Setup
let r0 = randomInt(2, 11);
let r1 = randomInt(2, 11);
let r2 = randomInt(2, 11);
let r3 = randomInt(2, 11);
const validpiles = [1, 2, 3, 4];
let correctinput = false;
console.log("Da Rules:\nChose to play against a Player or an Enemy(easy/hard)\nPick a Pile to subtract any number (turn out any amount of lights), up to the Pilesize, from.\nNow the enemy does the same.\nThe one who turns out the last light of the last Pile, loses!");
// Player
function _playerturn() {
    correctinput = false;
    while (!correctinput) {
        const pilenumberInput = prompt("Wich pile?");
        if (pilenumberInput === "1" || pilenumberInput === "2" || pilenumberInput === "3" || pilenumberInput === "4") {
            let pilenumber = parseInt(pilenumberInput);
            let lampcount;
            while (true) {
                const lampcountInput = prompt("How many?");
                if (!isNaN(Number(lampcountInput))) {
                    lampcount = parseInt(lampcountInput || "1");
                    break;
                }
                else {
                    console.log("Please input a number!");
                }
            }
            if (pilenumber === 1) {
                if (r0 >= lampcount && lampcount > 0) {
                    r0 = _ispileemthyorremove(pilenumber, r0, lampcount);
                }
                else {
                    correctinput = false;
                }
            }
            else if (pilenumber === 2) {
                if (r1 >= lampcount && lampcount > 0) {
                    r1 = _ispileemthyorremove(pilenumber, r1, lampcount);
                }
                else {
                    correctinput = false;
                }
            }
            else if (pilenumber === 3) {
                if (r2 >= lampcount && lampcount > 0) {
                    r2 = _ispileemthyorremove(pilenumber, r2, lampcount);
                }
                else {
                    correctinput = false;
                }
            }
            else if (pilenumber === 4) {
                if (r3 >= lampcount && lampcount > 0) {
                    r3 = _ispileemthyorremove(pilenumber, r3, lampcount);
                }
                else {
                    correctinput = false;
                }
            }
            else {
                console.log("This shouldn´t happen?");
            }
            if (correctinput) {
                return;
            }
            else {
                console.log("Chose a viable number of lamps!");
            }
        }
        else {
            console.log("Chose a existing pile!");
        }
    }
}
// easy enemy
function _easyenemy() {
    let done = false;
    const botpile = validpiles[Math.floor(Math.random() * validpiles.length)];
    while (!done) {
        let botcount;
        if (botpile === 1) {
            botcount = randomInt(1, r0 + 1);
            r0 = _isPileEmthyOrRemoveEasy(botpile, r1, botcount);
            done = true;
        }
        else if (botpile === 2) {
            botcount = randomInt(1, r1 + 1);
            r1 = _isPileEmthyOrRemoveEasy(botpile, r1, botcount);
            done = true;
        }
        else if (botpile === 3) {
            botcount = randomInt(1, r2 + 1);
            r2 = _isPileEmthyOrRemoveEasy(botpile, r2, botcount);
            done = true;
        }
        else if (botpile === 4) {
            botcount = randomInt(1, r3 + 1);
            r3 = _isPileEmthyOrRemoveEasy(botpile, r3, botcount);
            done = true;
        }
        else {
            console.log("404");
        }
    }
}
/*
// hard enemy
function _hardenemy(): void {
    globalThis.correctinput;
    let done: boolean = false;
    const botpile: number = validpiles[Math.floor(Math.random() * validpiles.length)];
    let botcount: number;
    if (botpile === 1) {
        botcount = randomInt(1, r0 + 1);
        try {
            r0 = _smartpileemthyorremove(pile, currentpilecount, count, done);
            done = true;
        } catch (error) {
            // handle error
        }
    } else if (botpile === 2) {
        botcount = randomInt(1, r1 + 1);
        r1 = _ispileemthyorremove(botpile, r1, botcount);
    } else if (botpile === 3) {
        botcount = randomInt(1, r2 + 1);
        r2 = _ispileemthyorremove(botpile, r2, botcount);
    } else if (botpile === 4) {
        botcount = randomInt(1, r3 + 1);
        r3 = _ispileemthyorremove(botpile, r3, botcount);
    } else {
        console.log("404");
    }
}
*/
// Pile remove function player
function _ispileemthyorremove(pile, currentpilecount, count) {
    currentpilecount -= count;
    if (currentpilecount === 0) {
        const index = validpiles.indexOf(pile);
        if (index > -1) {
            validpiles.splice(index, 1);
        }
    }
    correctinput = true;
    return currentpilecount;
}
// Pile remove function easy enemy
function _isPileEmthyOrRemoveEasy(pile, currentpilecount, count) {
    currentpilecount -= count;
    if (currentpilecount === 0) {
        const index = validpiles.indexOf(pile);
        if (index > -1) {
            validpiles.splice(index, 1);
        }
    }
    return currentpilecount;
}
// Enemy/Gamemode options
// let enemySelectionComplete = false;
//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});
//function selectEnemyType() {
//    rl.question("Would you like a hard or easy enemy or play against another player?", (enemytype) => {
//        if (enemytype === "hard" || enemytype === "easy" || enemytype === "player") {
//            if (enemytype === "hard") {
//                console.log("This enemy is currently unavailable, I´m sorry.");
//                selectEnemyType();
//            } else {
//                enemySelectionComplete = true;
//                rl.close();
//            }
//        } else {
//            console.log("Please input hard, easy or player!");
//            selectEnemyType();
//        }
//    });
//}
// selectEnemyType();
// Pile setup
console.log("These are the Piles: " + r0 + " " + r1 + " " + r2 + " " + r3);
// Game loop
let won = false;
while (!(r0 === 0 && r1 === 0 && r2 === 0 && r3 === 0)) {
    console.log("Player one's turn");
    _playerturn();
    if (r0 === 0 && r1 === 0 && r2 === 0 && r3 === 0) {
        won = false;
        break;
    }
    console.log("These are the Piles: " + r0 + " " + r1 + " " + r2 + " " + r3 + "\n");
    //    if (enemytype === "easy") {
    console.log("easy bot's turn");
    _easyenemy();
    //    } else if (enemytype === "hard") {
    console.log("hard bot's turn");
    // _hardenemy();
    //    } else if (enemytype === "player") {
    console.log("Player two's turn");
    _playerturn();
    //    }
    console.log("These are the Piles: " + r0 + " " + r1 + " " + r2 + " " + r3 + "\n");
    if (r0 === 0 && r1 === 0 && r2 === 0 && r3 === 0) {
        won = true;
    }
}
// End message
//if (won && enemytype !== "player") {
//    console.log("You won ;)");
//} else if (won && enemytype === "player") {
//    console.log("Player one won ;)");
//} else if (!won && enemytype === "player") {
//    console.log("Player two won :)");
//} else {
//    console.log("You lost :(\nGet good");
//}
//# sourceMappingURL=Nim.js.map