function part1(data) {
  const rows = data.split("\n");
  let answer = 0;
  let pos = 50;

  rows.forEach((instruction) => {
    const dir = instruction.slice(0, 1);
    const relativeDistance = Number(instruction.slice(1)) % 100;

    let newPos = dir === "L" ? pos - relativeDistance : pos + relativeDistance;

    if (dir === "L" && newPos < 0) {
      newPos = 100 + newPos;
    }

    if (dir === "R" && newPos > 99) {
      newPos = newPos - 100;
    }

    pos = newPos;

    if (pos === 0) {
      answer++;
    }
  });

  return answer;
}

module.exports = part1;
