#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let friends = ['Asad', 'Kanwal', 'Rehman', 'Kabir', 'Ayesha'];
let continuePlay = true;
do {
    let userAns = await inquirer.prompt([{
            type: 'input',
            name: 'ans',
            message: 'Guess Your New Friend',
        }]);
    friends.push(userAns.ans);
    let friendsLength = friends.length;
    let randomIndex = Math.floor(Math.random() * friendsLength);
    let randomName = friends[randomIndex];
    console.log(chalk.bold.redBright(`*** ${randomName} ***`));
    let userconfirm = await inquirer.prompt({
        type: "confirm",
        name: "ans",
        message: "Do you want to continue ?"
    });
    if (userconfirm.ans) {
        continuePlay = true;
    }
    else {
        continuePlay = false;
    }
} while (continuePlay);
