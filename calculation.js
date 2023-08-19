export async function calculationsInput(a, b, c) {
    let result;
    if (b === "+") {
        return (result = a + c);
    }
    else if (b === "-") {
        return (result = a - c);
    }
    else if (b === "*") {
        return (result = a * c);
    }
    else if (b === "/") {
        return (result = a / c);
    }
}
