const { test, expect } = require("@jest/globals");
const part1 = require("./part1");
const part2 = require("./part2");

const testData = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

test("day 1, part 1", () => expect(part1(testData)).toBe(3));
test("day 1, part 2", () => expect(part2(testData)).toBe(6));
