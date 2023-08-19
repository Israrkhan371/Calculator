import inquirer from "inquirer";
import chalk from "chalk";
import { Number1, Number2, Operation } from "./operations .js";
import { calculationsInput } from "./calculation.js";
let answer = await calculationsInput(Number1, Operation, Number2);
console.log(chalk.yellowBright.bold("\n CALCULATOR \n")+
  chalk.greenBright.bold("\n The answer is \n")+ " " + chalk.yellowBright.bold(answer)
);
