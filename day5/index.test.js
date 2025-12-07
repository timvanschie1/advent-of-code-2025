const { test, expect } = require("@jest/globals");
const part1 = require("./part1");
const part2 = require("./part2");

const testData = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

test("day 5, part 1", () => expect(part1(testData)).toBe(3));
test("day 5, part 2", () => expect(part2(testData)).toBe(14));
