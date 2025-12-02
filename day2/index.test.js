const { test, expect } = require("@jest/globals");
const part1 = require("./part1");
const part2 = require("./part2");

const testData = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

test("day 2, part 1", () => expect(part1(testData)).toBe(1227775554));
test("day 2, part 2", () => expect(part2(testData)).toBe(4174379265));
