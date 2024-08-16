export default function Calculator(x: number, y: number, method: "+" | "-" | "*" | "**" | "/" | "%"): number {
    switch (method) {
        case "+":
            return Number((x + y).toFixed(15))
        case "-":
            return Number((x - y).toFixed(15))
        case "*":
            return Number((x * y).toFixed(15))
        case "**":
            return Number((x ** y).toFixed(15))
        case "/":
            return Number((x / y).toFixed(15))
        case "%":
            return Number((x % y).toFixed(15))
        default:
            throw new Error("Invalid method specified.")
    }
}
