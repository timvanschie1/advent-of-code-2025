const { test, expect } = require("@jest/globals");
const part1 = require("./part1");
const part2 = require("./part2");

const testData = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

test("day 4, part 1", () => expect(part1(testData)).toBe(13));
test("day 4, part 2", () => expect(part2(testData)).toBe(43));
