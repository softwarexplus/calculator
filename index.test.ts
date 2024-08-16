import { describe, test, expect } from "vitest"
import Calculator from "./index"

describe("Calculator function", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(Calculator(1, 2, "+")).toBe(3)
    })

    test("adds 0.1 + 0.2 to equal 0.3", () => {
        expect(Calculator(0.1, 0.2, "+")).toBe(0.3)
    })

    test("adds 0.15 + 0.25 to equal 0.4", () => {
        expect(Calculator(0.15, 0.25, "+")).toBe(0.4)
    })

    test("adds 0.12345 + 0.98765 to equal 1.1111", () => {
        expect(Calculator(0.12345, 0.98765, "+")).toBe(1.1111)
    })

    test("adds 0.33333 + 0.66667 to equal 1", () => {
        expect(Calculator(0.33333, 0.66667, "+")).toBe(1)
    })

    test("subtracts 5 - 3 to equal 2", () => {
        expect(Calculator(5, 3, "-")).toBe(2)
    })

    test("subtracts 0.5 - 0.3 to equal 0.2", () => {
        expect(Calculator(0.5, 0.3, "-")).toBe(0.2)
    })

    test("subtracts 0.9999 - 0.1111 to equal 0.8888", () => {
        expect(Calculator(0.9999, 0.1111, "-")).toBe(0.8888)
    })

    test("subtracts 0.7777 - 0.3333 to equal 0.4444", () => {
        expect(Calculator(0.7777, 0.3333, "-")).toBe(0.4444)
    })

    test("multiplies 2 * 4 to equal 8", () => {
        expect(Calculator(2, 4, "*")).toBe(8)
    })

    test("multiplies 0.2 * 0.4 to equal 0.08", () => {
        expect(Calculator(0.2, 0.4, "*")).toBe(0.08)
    })

    test("multiplies 0.1234 * 0.5678 to equal 0.07006652", () => {
        expect(Calculator(0.1234, 0.5678, "*")).toBe(0.07006652)
    })

    test("multiplies 0.9999 * 0.0001 to equal 0.00009999", () => {
        expect(Calculator(0.9999, 0.0001, "*")).toBe(0.00009999)
    })

    test("raises 3 to the power of 4 to equal 81", () => {
        expect(Calculator(3, 4, "**")).toBe(81)
    })

    test("raises 0.2 to the power of 3 to equal 0.008", () => {
        expect(Calculator(0.2, 3, "**")).toBe(0.008)
    })

    test("divides 10 by 2 to equal 5", () => {
        expect(Calculator(10, 2, "/")).toBe(5)
    })

    test("divides 0.3 by 0.1 to equal 3", () => {
        expect(Calculator(0.3, 0.1, "/")).toBe(3)
    })

    test("divides 0.999 by 0.333 to equal 3", () => {
        expect(Calculator(0.999, 0.333, "/")).toBe(3)
    })

    test("modulus 10 % 3 to equal 1", () => {
        expect(Calculator(10, 3, "%")).toBe(1)
    })

    test("returns Infinity on division by zero", () => {
        expect(Calculator(10, 0, "/")).toBe(Infinity)
    })

    test("throws error on invalid method", () => {
        // @ts-expect-error
        expect(() => Calculator(10, 5, "$")).toThrowError("Invalid method specified.")
    })
})
