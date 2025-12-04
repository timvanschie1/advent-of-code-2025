const { test, expect } = require("@jest/globals");
const part1 = require("./part1");
const part2 = require("./part2");

const testData = `987654321111111
811111111111119
234234234234278
818181911112111`;

test("day 3, part 1", () => expect(part1(testData)).toBe(357));
test("day 3, part 2", () => expect(part2(testData)).toBe(3121910778619));
