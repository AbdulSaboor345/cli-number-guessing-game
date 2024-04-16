#! /usr/bin/env node
import inquirer from "inquirer";
// Printing A Welcome Message
console.log("\x1b[33m" + "\n\tWelcome to \`Abdul Saboor's\` - Cli-Number Guessing Game\n" + "\x1b[0m");
// Creating a variable to generate Random Numbers
const randomNumber = Math.floor(Math.random() * 5 + 1);
// Creating a process for entering guessed number
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your Guessed Number from 1 to 5:",
    },
]);
// Using an else-if chain to print msg to the user
if (isNaN(answer.userGuessedNumber) || answer.userGuessedNumber < 1 || answer.userGuessedNumber > 5) {
    console.log("\x1b[31m" + "\nInvalid Input! Please, try guessing the number from 1 to 5. \n" + "\x1b[0m");
}
else if (answer.userGuessedNumber === randomNumber) {
    console.log("\x1b[32m" + "\nCongratulations ! You have guessed the correct number,\n" + "\x1b[0m");
}
else {
    console.log("\x1b[31m" + "\nYou have guessed the wrong number! Better Luck Next Time!\n" + "\x1b[0m");
}
