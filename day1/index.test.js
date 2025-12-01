const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData = []

test('day 1, part 1', () => expect(part1(testData)).toBe(null));
test('day 1, part 2', () => expect(part2(testData)).toBe(null));