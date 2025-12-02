function part1(data) {
  let answer = 0;
  const ranges = data.split(",");

  ranges.forEach((range) => {
    const [min, max] = range.split("-").map(Number);

    for (let i = min; i <= max; i++) {
      const [first, second] = splitString(i.toString());
      if (first === second) {
        answer += i;
      }
    }
  });

  return answer;
}

function splitString(string) {
  const middle = Math.ceil(string.length / 2);
  return [string.slice(0, middle), string.slice(middle)];
}

module.exports = part1;
