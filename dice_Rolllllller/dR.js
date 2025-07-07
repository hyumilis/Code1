"use strict";
var DiceRoller;
(function (DiceRoller) {
    let continueAddingDice = "yes";
    let total = [];
    let dice = {
        d4: 0,
        d6: 0,
        d8: 0,
        d10: 0,
        d12: 0,
        d20: 0,
    };
    //Start of the Program
    output("Welcome to the Dice Roller!");
    diceSelection();
    function diceSelection() {
        let temp1 = prompt("Do you wanna add some dice to roll? (yes/no)");
        continueAddingDice = temp1 ? temp1.toLowerCase().trim() : "no";
        while (continueAddingDice !== "no") {
            temp1 = prompt("Do you wanna add some dice to roll? (yes/no)");
            continueAddingDice = temp1 ? temp1.toLowerCase().trim() : "yes";
            if (continueAddingDice === "yes") {
                let diceType = prompt("What kind of dice do you want to add? (d4, d6, d8, d10, d12, d20)");
                if (diceType && diceType in dice) {
                    let numberOfAddedDice = parseInt(prompt(`How many ${diceType} do you want to add?`) || "0");
                    if (!isNaN(numberOfAddedDice)) {
                        dice[diceType] += numberOfAddedDice;
                    }
                    else {
                        output("Invalid number entered. Please enter a valid number.");
                    }
                }
                else {
                    output("Invalid dice type entered. Please enter one of the following: d4, d6, d8, d10, d12, d20.");
                }
            }
            else if (continueAddingDice === "no") {
                console.log("No more dice will be added.");
                alert("No more dice will be added.");
                let numberOfRolls = parseInt(prompt("How often should the dice be rolled?") || "100");
                while (numberOfRolls <= 0) {
                    numberOfRolls = parseInt(prompt("How often should the dice be rolled?") || "100");
                    if (isNaN(numberOfRolls) || numberOfRolls > 0) {
                        break;
                    }
                    else {
                        output("Invalid input. Please enter a positive integer for the number of rolls.");
                    }
                }
                for (let i = 0; i < numberOfRolls; i++) {
                    rollDice();
                }
                output("Total roll: ${total}");
                output(`Summary of rolls:
                Sum of rolls: ${totalSum()}
                Maximum roll: ${maxRoll()}
                Minimum roll: ${minRoll()}
                Average roll: ${averageRoll()}
                Median roll: ${medianRoll()}`);
                let temp2 = prompt("Do you want to roll again? (yes/no)");
                continueAddingDice = temp2 ? temp2.toLowerCase() : "no";
                if (continueAddingDice === "no") {
                    output("Thank you for using the Dice Roller!");
                    break;
                }
                resetDice();
            }
            else {
                output("Invalid input. Please enter 'yes' or 'no'.");
            }
        }
    }
    function rollDice() {
        for (const [type, count] of Object.entries(dice)) {
            if (count > 0) {
                for (let i = 0; i < count; i++) {
                    const roll = Math.floor(Math.random() * parseInt(type.slice(1))) + 1;
                    total.push(roll);
                    console.log(`Rolled a ${type}: ${roll}`);
                }
            }
        }
    }
    function totalSum() {
        let sum = 0;
        for (const roll of Object.values(total)) {
            sum += roll;
        }
        return sum;
    }
    function minRoll() {
        if (total.length === 0) {
            return 0;
        }
        return Math.min(...total);
    }
    function maxRoll() {
        if (total.length === 0) {
            return 0;
        }
        return Math.max(...total);
    }
    function averageRoll() {
        if (total.length === 0) {
            return 0;
        }
        let sum = totalSum();
        return sum / total.length;
    }
    function medianRoll() {
        if (total.length === 0) {
            return 0;
        }
        const sorted = [...total].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return (sorted[mid - 1] + sorted[mid]) / 2;
        }
        else {
            return sorted[mid];
        }
    }
    function resetDice() {
        continueAddingDice = "yes";
        total = [];
        dice = {
            d4: 0,
            d6: 0,
            d8: 0,
            d10: 0,
            d12: 0,
            d20: 0,
        };
        console.log("Dice have been reset.");
    }
    function output(_message) {
        console.log(_message);
        alert(_message);
    }
})(DiceRoller || (DiceRoller = {}));
//# sourceMappingURL=dR.js.map