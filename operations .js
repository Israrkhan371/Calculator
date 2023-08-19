import inquirer from "inquirer";
// type calculationInputs = [number, number, string];
//  async function firstInputs() {
//   const userInputs = await inquirer.prompt([
//     {
//       name: "num1",
//       type: "number",
//       message: "Write first number",
//     },
//     {
//       name: "num2",
//       type: "number",
//       message: "Write second number",
//     },
//     (
//         name: "operation",
//       type: "list",
//       message: "Choose operation to perform",
//       choices:["+","-","*","/"],
//     )
//     ]);
//   let arrayNew:calculationInputs=[userInputs.num1,userInputs.num2,userInputs.operation]
// return arrayNew
// }
const input1 = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter first number",
    },
]);
const input3 = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select operation to perform",
        choices: ["+", "-", "*", "/"],
    },
]);
const input2 = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "Enter second number",
    },
]);
export let Number1 = input1.num1;
export let Number2 = input2.num2;
export let Operation = input3.operation;
