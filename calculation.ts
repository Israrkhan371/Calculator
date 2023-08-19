import inquirer from "inquirer";
import chalk from "chalk";

export async function calculationsInput(a: number, b: string, c: number) {
  let result: number;
  if (b === "+") {
    return (result = a + c);
  } else if (b === "-") {
    return (result = a - c);
  } else if (b === "*") {
    return (result = a * c);
  } else if (b === "/") {
    return (result = a / c);
  }
}
